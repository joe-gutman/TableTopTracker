const usersModel = require('../models/users.js');

exports.getUser = (req, res) => {
  console.log(req.body);
  //usersModel.getUser(req.body);
}

// {
//   username: 'nejim',
//   email: 'pat@pat.com',
//   fullname: 'pat',
//   profilePhoto: '',
//   age: '30',
//   preferred_playstyle: 'cool style',
//   favoriteMythicalCreature: 'cat',
//   favoriteBoardGame: 'monopoly'
// }

exports.createUser = (req, res) => {
  console.log(req.body);
  usersModel.createUser(req.body)
    .then((data) => {
      userId = data.rows[0].id;
      console.log(userId);
      usersModel.createDefaultCollections(userId)
        .then((userData) => {
          res.status(200).send(userData);
        })
    })
    .catch((error) => {
      console.log(error.message);
      res.sendStatus(500);
    })
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