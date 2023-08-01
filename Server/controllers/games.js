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
        var gameId = gameData.id;
        db.query(`select * from categories where game_id = ${gameId}`)
          .then((categoryData) => {
            console.log(categoryData.rows)
            db.query(`select * from game_images where game_id = ${gameId}`)
              .then((imageData) => {
                console.log(imageData.rows);
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
      }
    })
}

exports.getGameFromTitle = (title) => {
  console.log(title);
  return db.query(`select * from games where title = ${title}`)
    .then((data) => {
      console.log(data);
      if (data.rows.length === 0) {
        return null;
      } else {
        var gameData = data.rows[0];
        var results = {
          results: gameData,
        }
        var gameId = gameData.id;
        return db.query(`select * from categories where game_id = ${gameId}`)
          .then((categoryData) => {
            results['categories'] = categoryData.rows;
            return db.query(`select * from game_images where game_id = ${gameId}`)
              .then((imageData) => {
                results['images'] = imageData.rows;
                console.log(results);
                return results;
              })
              .catch((error) => {
                throw error;
              })
          })
          .catch((error) => {
            throw error;
          })
      }
    })
    .catch((error) => {
      throw error;
    })
}