const parser = require("../parser.js");
const {queryBggForExactResult, queryBggForGameDetails} = require("../models/Get");
const {games} = require("./games");

const results = [];

function fetchList(gamesList) {
  Promise.all(
    gamesList.map((name) =>
      fetchInfo(name)
    )
  ).then((x) =>
    console.log(x)
  )
}

function fetchInfo(title) {
  return queryBggForExactResult(title)
    .then((data) => {
      var results = parser.parseSearchExactGameResults(data.data, title);
      return queryBggForGameDetails(results.boardgameId)
        .then((data) => {
          var xml = data.data;
          var dataPoints = ['<minplayers', '<maxplayers','<minplaytime', '<maxplaytime', '<age', '<description', '<thumbnail', '<boardgamecategory', '<averageweight']
          var found = dataPoints.forEach(point => {
            var index = point.slice(1, point.length);
            if (index === 'averageweight') {
              index = 'complexity'
            }
            results[index] = parser.findDataPoint(xml, point)
          })
          var images = parser.findAllInstancesOfDataPoint(xml, '<image');
          results['more_info'] = 'https://boardgamegeek.com/boardgame/' + results.boardgameId + '/' + title.toLowerCase();
          // todo: push results to the database.
          return results
        })
        .catch((error) => {
          console.log(error.message);
        })
    })
    .catch((error) => {
      console.log('api query failed');
      console.log(error.message);
    })
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomizeGames(min, max) {

  return games.map((x, i) => {
    return [`${i + 1},${x.id},${randomIntFromInterval(min, max)}`];
  });
}

// console.log('USER GAMES: ', randomizeGames(1, 8));
console.log('COLLECTION_GAMES: ', randomizeGames(1, 16));