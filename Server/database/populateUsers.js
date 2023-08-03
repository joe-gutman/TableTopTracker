const usersModel = require('../models/users.js');
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
  };
  usersModel.createUser(adminData)
    .then((data) => {
      userId = data.rows[0].id;
      console.log(userId);
      usersModel.createDefaultCollections(userId)
        .then((userData) => {
          console.log('entered');
        })
    })
    .catch((error) => {
      console.log(error.message);
    })
}