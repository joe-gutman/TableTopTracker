const db = require("../database/db");

function getUserCollections(userId) {
  return db.query(
    `SELECT * FROM collections WHERE user_id = $1`,
    [userId]
  ).then(({rows}) => rows);
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

module.exports = {
  getCollectionGames,
  getUserCollections
};