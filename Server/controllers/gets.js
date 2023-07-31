const Get = require('../models/Get.js');
const parser = require('../parser.js');

exports.getGame = (req, res) => {
  Get.getOne(req.body)
    .then((data) => {
      if (data.rows.length === 0) {
        var { title } = req.body
        Get.queryBggForExactResult(title)
          .then((data) => {
            var results = parser.parseSearchExactGameResults(data.data, title);
            Get.queryBggForGameDetails(results.boardgameId)
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
                Get.insertOneGame(toBeEntered)
                  .then(() => {
                    console.log('success');
                    res.sendStatus(200);
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
          })
          .catch((error) => {
            console.log('api query failed');
            console.log(error.message);
            res.sendStatus(500);
          })
      } else {
        res.status(200).send(data.rows);
      }
    })
    .catch((error) => {
      console.log(error.message);
      res.sendStatus(500);
    })
};