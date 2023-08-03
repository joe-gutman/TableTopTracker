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


exports.getUser = (userData) => {

}