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

function postToCollection(userId, collectionName, gameId) {
  var queryStr = "select * from collections where user_id = ($1) and collection_name = ($2)"
  return db.query(queryStr)
}

// create table collections (
//   id serial primary key,
//   user_id int,
//   collection_name varchar(32),
//   public boolean,

//   foreign key (user_id) references users(id)
// );

// create table collections_games_join (
//   id serial primary key,
//   game_id int,
//   collection_id int,

//   foreign key (game_id) references games(id),
//   foreign key (collection_id) references collections(id)
// );


module.exports = {
  getCollectionGames,
  getUserCollections
};

// {
//   "userData": {
//       "id": 2,
//       "username": "SamPlayzGames",
//       "email": "admin@tabletop.com",
//       "fullname": "Samantha Johnson",
//       "photo": null,
//       "age": 28,
//       "preferred_playstyle": "Strategic and Competitive",
//       "favorite_mythical_creature": "Dragon",
//       "favorite_board_game": "Catan (Settlers of Catan)"
//   },
//   "My Games": [],
//   "Wishlist": [],
//   "Liked": []
//   "custom" : []
// }