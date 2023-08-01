const usersModel = require('../models/users.js');

exports.getUser = (req, res) => {
  console.log(req.body);
  //usersModel.getUser(req.body);
}

exports.createUser = (req, res) => {
  console.log(req.body);
  //usersModel.createUser(req.body)
}


// {
//   "uid":"yElHRF2wa2NDBQ9myvTXVEd60Tt2",
//   "email":"admin@tabletop.com",
//   "fullname": "Samantha Johnson",
//   "username": "SamPlayzGames",
//   "age": 28,
//   "preferred_playstyle": "Strategic and Competitive",
//   "favorite_category": "Dragon",
//   "favorite_board_game": "Catan (Settlers of Catan)",
//   "category": "Eurogames"
// }