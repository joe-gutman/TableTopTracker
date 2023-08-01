const db = require('../database/db.js');
const axios = require('axios');
const parser = require('../parser.js');

exports.getOne = ({title}) => {
  var queryStr = `select * from games where title = '${title}'`;
  return db.query(queryStr);
}

exports.queryBggForExactResult = (title) => {
  var parsed = title.split(' ');
  parsed = parsed.join('%20')
  queryUrl = 'https://boardgamegeek.com/xmlapi/search?search=' + parsed + '&exact=1'
  return axios.get(queryUrl);
}

exports.queryBggForGameDetails = (boardgameId) => {
  var queryUrl = 'https://boardgamegeek.com/xmlapi/boardgame/' + boardgameId + '?stats=1'
  return axios.get(queryUrl);
}

exports.getAllGameDetails = (title) => {
  return exports.queryBggForExactResult(title)
    .then((data) => {
      var results = parser.parseSearchExactGameResults(data.data, title);
      return exports.queryBggForGameDetails(results.boardgameId)
        .then((data) => {
          var xml = data.data;
          var dataPoints = ['<minplayers', '<maxplayers','<minplaytime', '<maxplaytime', '<age', '<description', '<thumbnail', '<averageweight']
          var found = dataPoints.forEach(point => {
            var index = point.slice(1, point.length);
            if (index === 'averageweight') {
              index = 'complexity'
            }
            results[index] = parser.findDataPoint(xml, point)
          })
          var images = parser.findAllInstancesOfDataPoint(xml, '<image');
          var categories = parser.findAllInstancesOfDataPoint(xml, '<boardgamecategory');
          var bgg_url = 'https://boardgamegeek.com/boardgame/' + results.boardgameId + '/' + title.toLowerCase();
          bgg_url = bgg_url.split(' ');
          bgg_url = bgg_url.join('-');
          results['more_info'] = bgg_url;
          // todo: push results to the database.
          const order = ['boardgameId', 'title', 'description', 'minplayers', 'maxplayers', 'minplaytime', 'maxplaytime', 'age', 'complexity', 'year_published', 'thumbnail', 'more_info']
          var ints = ['boardgameId', 'minplayers', 'maxplayers', 'minplaytime', 'maxplaytime', 'age', 'year_published']
          var toBeEntered = [];
          for (let o of order) {
            if (ints.includes(o)) {
              toBeEntered.push(parseInt(results[o]));
            } else if (o === 'complexity') {
              toBeEntered.push(parseFloat(results[o]));
            } else {
              toBeEntered.push(results[o]);
            }
          }
          return {
            categories: categories,
            images: images,
            results: toBeEntered
          }
        })
        .catch((error) => {
          console.log(error.message);
        })
    })
    .catch((error) => {
      console.log(error.message);
    })
}

exports.insertOneGame = (columns) => {
  var queryStr = "insert into games (bgg_id, title, description, minplayers, maxplayers, minplaytime, maxplaytime, age, complexity, year_published, thumbnail, more_info) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)"
  return db.query(queryStr, columns)
}

exports.insertOneImage = (gameId, imageUrl) => {
  var values = [gameId, imageUrl];
  var queryStr = "insert into game_images (game_id, image) values ($1, $2)"
  return db.query(queryStr, values);
}

exports.insertOneCategory = (gameId, categoryName) => {
  var values = [gameId, categoryName]
  var queryStr = "insert into categories (game_id, category_name) values ($1, $2)"
  return db.query(queryStr, values);
}

exports.insertGameImageAndCategories = async (resultOfGetAllGameDetails) => {
  try {
    var { categories, images, results } = resultOfGetAllGameDetails;
    const data = await db.query("select count(*) from games");
    var nextId = parseInt(data.rows[0].count) + 1;
    await exports.insertOneGame(results);
    var promises = [];
    for (let i of images) {
      promises.push(exports.insertOneImage(nextId, i));
    }
    for (let c of categories) {
      promises.push(exports.insertOneCategory(nextId, c));
    }
    return Promise.all(promises);
  } catch (error) {
    console.log(error.message);
  }
};
