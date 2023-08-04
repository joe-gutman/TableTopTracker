const addGame = require('../models/addGame.js');
const parser = require('../parser.js');
const db = require('../database/db.js');

exports.getGame = (req, res) => {
  addGame.getOne(req.body)
    .then((data) => {
      if (data.rows.length === 0) {
        var { title } = req.body;
        addGame.getAllGameDetails(title)
          .then((data) => {
            const toBeSentBack = data;
            addGame.insertGameImageAndCategories(data)
              .then(() => {
                res.status(200).send(toBeSentBack);
              })
              .catch((error) => {
                res.sendStatus(500);
              })
          })
          .catch((error) => {
            console.log(error.message);
            res.sendStatus(500);
          })
      } else {
        console.log(data.rows[0]);
        var gameData = data.rows[0];
        var toBeSentBack = {
          results: flattenDbResults(gameData)
        }
        var gameId = gameData.id;
        db.query(`select * from game_images where game_id = ${gameId}`)
          .then((imageData) => {
            toBeSentBack['images'] = getImages(imageData.rows);
            db.query(`select * from categories where game_id = ${gameId}`)
              .then((categoryData) => {
                toBeSentBack['categories'] = getCategories(categoryData.rows);
                res.status(200).send(toBeSentBack);
              })
              .catch((error) => {
                console.log(error.message);
                res.sendStatus(500);
              })
          })
          .catch((error) => {
            console.log(error.message);
            res.sendStatus(500);
          })
      }
    })
}

exports.getGameModified = (req, res) => {
  var title = req.body.gameName
  addGame.getOne(title)
    .then((data) => {
      console.log(data.rows);
      if (data.rows.length === 0) {
        addGame.getAllGameDetails(title)
          .then((data) => {
            addGame.insertGameImageAndCategories(data)
              .then(() => {
                exports.getGameModified(req, res);
              })
              .catch((error) => {
                res.sendStatus(500);
              })
          })
          .catch((error) => {
            console.log(error.message);
            res.sendStatus(500);
          })
      } else {
        var gameData = data.rows[0];
        res.status(200).send(gameData);
      }
    })
}


const getGamesFromList = (title) => {
  return addGame.getOne(title)
    .then((data) => {
      console.log(data.rows);
      if (data.rows.length === 0) {
        return addGame.getAllGameDetails(title)
          .then((data) => {
            console.log(data);
            return addGame.insertGameImageAndCategories(data)
              .then(() => {
                getGamesFromList(title);
              })
              .catch((error) => {
                throw error;
              })
          })
          .catch((error) => {
            throw error;
          })
      } else {
        var gameData = data.rows[0];
        return gameData;
      }
    })
}

exports.getListOfGames = (req, res) => {
  var listOfGames = req.body.recommendations;
  console.log('listOfGames', listOfGames);
  var queries = [];
  for (let game of listOfGames) {
    console.log(game);
    queries.push(getGamesFromList(game.gameName));
  }
  Promise.all(queries)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error.message);
      res.sendStatus(500)
    })
}




const flattenDbResults = (dbData) => {
  var keys = Object.keys(dbData);
  var columns = [];
  for (let k of keys) {
    if (k !== 'id') {
      columns.push(dbData[k])
    }
  }
  return columns;
}

const getImages = (imageData) => {
  var images = [];
  for (let i of imageData) {
    images.push(i.image);
  }
  return images;
}

const getCategories = (categoryData) => {
  var categories = [];
  for (let c of categoryData) {
    categories.push(c.category_name)
  }
  return categories;
}


const getInexactGames = (title) => {
  console.log(title);
  addGame.queryBggForInexactResult(title)
    .then((data) => {
      var xml = data.data;
      var listified = xml.split('</boardgame>')
      var sanitizedList = [];
      for (let game of listified) {
        var toBePushed = {}
        var name = parser.findDataPoint(game, '<name');
        if (name.indexOf(title) === -1) {
          continue;
        } else {
          toBePushed['name'] = name;
          var start = game.indexOf('objectid');
          var inQuotes = 0;
          var id = '';
          for (var i = start; i < game.length; i++) {
            if (game[i] ==='"') {
              inQuotes++;
            }
            if (inQuotes === 1 && game[i] !== '"') {
              id = id + game[i];
            }
            if (inQuotes === 2) {
              break;
            }
          }
          toBePushed['boardgameId'] = id;
          toBePushed['percentage'] = title.length / name.length;
          sanitizedList.push(toBePushed);
        }

      }
      var ordered = orderByPercentage(sanitizedList);
      return ordered.slice(0, 5);
    })
    .catch((error) => {
      throw error;
    })
}

function orderByPercentage(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const lesser = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].percentage > pivot.percentage) {
      greater.push(arr[i]);
    } else {
      lesser.push(arr[i]);
    }
  }

  return [...orderByPercentage(greater), pivot, ...orderByPercentage(lesser)];
}