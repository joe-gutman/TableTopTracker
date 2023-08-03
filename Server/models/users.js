const db = require('../database/db.js');

exports.createUser = (userData) => {
  var keys = Object.keys(userData);
  var columns = [];
  for (let k of keys) {
    columns.push(userData[k]);
  }
  var queryStr = 'insert into users (username, email, fullname, photo, age, preferred_playstyle, favorite_mythical_creature, favorite_board_game, selectedCategories)values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning id'
  return db.query(queryStr, columns)
}

exports.createDefaultCollections = (userId) => {
  var defaultCollections = ['My Games', 'Wishlist', 'Liked'];
  var promisifiedQueries = [];
  for (let d of defaultCollections) {
    var columns = [userId, d, true]
    var queryStr = 'insert into collections (user_id, collection_name, public) values ($1, $2, $3)'
    promisifiedQueries.push(db.query(queryStr, columns))
  }
  return Promise.all(promisifiedQueries);
}

// create table collections (
//   id serial primary key,
//   user_id int,
//   collection_name varchar(32),
//   public boolean,

//   foreign key (user_id) references users(id)
// );


exports.getUserByEmail = (email) => {
  var queryStr = "select * from users where email = ($1)"
  return db.query(queryStr, [email]);
}

exports.getCollectionsById = (userId) => {
  var queryStr = "select * from collections where user_id = ($1)"
  return db.query(queryStr, [userId]);
}

exports.getGamesByListOfCollections = (list) => {
  var queries = [];
  for (let l of list) {
    var queryStr = "select * from collections_games_join inner join games on game_id = games.id where collection_id = ($1)"
    queries.push(db.query(queryStr, [l.id]))
  }
  return Promise.all(queries);
}

// create table collections_games_join (
//   id serial primary key,
//   game_id int,
//   collection_id int,

//   foreign key (game_id) references games(id),
//   foreign key (collection_id) references collections(id)
// );
