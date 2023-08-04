const usersModel = require('../models/users.js');
const collectionsController = require('../controllers/collections.js');
const collectionsController = require('../controllers/collections.js');
const db = require('./db.js');
exports.populateAdmin = () => {
  const adminData = {
    "username": "SamPlayzGames",
    "email":"admin@tabletop.com",
    "fullname": "Samantha Johnson",
    "photo": null,
    "age": 28,
    "preferred_playstyle": "Strategic and Competitive",
    "favorite_mythical_creature": "Dragon",
    "favorite_board_game": "Catan (Settlers of Catan)",
    "favoriteCategories": "action"
    "favoriteCategories": "action"
  };
  usersModel.createUser(adminData)
    .then((data) => {
      userId = data.rows[0].id;
      console.log(userId);
      usersModel.createDefaultCollections(userId)
        .then((userData) => {
          // need userId, collectionName, gameId
          var queries = [];
          collectionNames = ['My Games', 'Wishlist', 'Liked'];
          var ids = [[1,2,3],[4,5,6],[7,8,9]]
          for (var i = 0; i < 3; i++) {
            queries.push(exports.addGamesInBulk(userId, collectionNames[i], ids[i]))
          }
          Promise.all(queries)
            .then(() => {
              console.log('success');
            })
            .catch((error) => {
              console.log(error.message);
            })
        })
    })
    .catch((error) => {
      console.log(error.message);
    })
}
exports.addGamesInBulk = (userId, collectionName, ids ) => {
  var queries = [];
  for ( let id of ids ) {
    queries.push(collectionsController.postToCollection(userId, collectionName, id))
  }
  return Promise.all(queries)
}