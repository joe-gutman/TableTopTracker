const db = require("../database/db");

async function getUserCollections(userEmail) {
  const user = await db.query(
    `SELECT * FROM users WHERE email=$1`,
    [userEmail]
  ).then((rows) => rows[0])

  console.log(user)

  return db.query(
    `SELECT * FROM collections WHERE user_id = $1`,
    [user.id]
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

function createCollection(collection) {
  return db.query(
    `INSERT INTO 
        collections(user_id,collection_name, public boolean) 
        VALUES($1, $2, $3) RETURNING *`,
    [collection.user_id, collection.name, collection.public]
  ).then(({rows}) => rows);
}

module.exports = {
  createCollection,
  getCollectionGames,
  getUserCollections
};