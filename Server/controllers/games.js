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


// {
//   "categories": [
//       "Economic",
//       "Industry / Manufacturing",
//       "Science Fiction",
//       "Transportation"
//   ],
//   "images": [
//       "https://cf.geekdo-images.com/fIVUaMvbfy6GCOgfxt7xaw__original/img/dBMnuz3SrgxsDLHT6pwbQFPQBIw=/0x0/filters:format(jpeg)/pic7647168.jpg"
//   ],
//   "results": [
//       396790,
//       "Nucleum",
//       "When Elsa von Fr&amp;uuml;hlingfeld presented her invention to King Frederik Augustus II of Saxony, people thought it was trickery. She used the recently isolated element Uranium to heat up a jar of water and used the resulting steam to power an engine that kept the Uranium active via a process she called &amp;ldquo;atomization.&amp;rdquo; Her device, the Nucleum, ushered in a new era of energy and prosperity over the next decades. Saxony went from a minor regional power to the hub of European science and engineering. Now, a generation later, factories are still hungry for more power, demanding bigger and more Nucleums to be built, more Uranium imported from the nearby country of Bohemia, and railways and power lines built across the country to carry the tamed power of the atoms to Saxony&amp;rsquo;s great cities. Inventors, engineers, and industrialists flock to the Saxon court, vying to be the leader in this new industrial revolution.&lt;br/&gt;&lt;br/&gt;Nucleum is a heavy euro board game in which players take role of industrialists trying to succeed during the economic and technological boom of 19th-century Saxony, fueled by the invention and spread of the Nucleum (a nuclear reactor).&lt;br/&gt;&lt;br/&gt;Players earn victory points by developing their networks, building and powering urban buildings, securing contracts, and meeting milestones (randomized endgame goals). Each player also gets unique asymmetric technologies, giving them special powers when unlocked. Gameplay is continuous; players take turns one after another with no rounds or phases.&lt;br/&gt;&lt;br/&gt;&amp;mdash;description from the publisher&lt;br/&gt;&lt;br/&gt;",
//       1,
//       4,
//       60,
//       150,
//       14,
//       3.8,
//       "https://cf.geekdo-images.com/fIVUaMvbfy6GCOgfxt7xaw__thumb/img/jKsO4nKmtNjX5bfH7aCPeK7hsqU=/fit-in/200x150/filters:strip_icc()/pic7647168.jpg",
//       "https://boardgamegeek.com/boardgame/396790/nucleum",
//       2023
//   ]
// }
