const db = require("../database/db");
const usersModel = require("../models/users.js");

async function getUserCollections(req, res) {
  var toBeSentBack = {};
  usersModel.getCollectionsById(req.query.userId)
    .then((collections) => {
      console.log('collections.rows', collections.rows);
      var collectionArray = [];
      for (let c of collections.rows) {
        collectionArray.push(c.collection_name);
      }
      usersModel.getGamesByListOfCollections(collections.rows)
        .then((data) => {
          console.log(data);
          const results = [];
          for (var d of data) {
            results.push(d.rows);
          }
          console.log(results);
          console.log(collectionArray);
          for (var i = 0; i < collectionArray.length; i++) {
            toBeSentBack[collectionArray[i]] = results[i];
          }
          res.send(toBeSentBack);
        })
        .catch((error) => {
          console.log(error.message);
          throw new Error(error);
        })
    })
    .catch((error) => {
      console.log(error.message);
      throw new Error(error)
    })
}
function getCollectionGames(collectionId) {
  return db.query(
    `SELECT g.*
      FROM collections c
      JOIN collections_games_join cgj ON c.id = cgj.collection_id
      JOIN games g ON cgj.game_id = g.id
      WHERE cgj.collection_id = $1`,
    [collectionId]
  ).then(({rows}) => rows);
}

function postToCollection(userId, collectionName, gameId) {
  var queryStr = "select * from collections where user_id = ($1) and collection_name = ($2)"
  return db.query(queryStr, [userId, collectionName])
    .then((data) => {
      // no we want to insert into collections_games_join
      console.log(data);
      var collectionId = data.rows[0].id;
      console.log(gameId, collectionId)
      var queryStr = "insert into collections_games_join (game_id, collection_id) values ($1, $2)"
      return db.query(queryStr, [gameId, collectionId])
    })

}

function createCollection({userId, name}) {
  return db.query(
    `INSERT INTO
        collections(user_id,collection_name)
        VALUES($1, $2) RETURNING *`,
    [userId, name]
  ).then(({rows}) => rows[0]);
}
module.exports = {
  createCollection,
  getCollectionGames,
  getUserCollections,
  postToCollection
};