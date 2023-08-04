const usersModel = require('../models/users.js');
const db = require('../database/db.js')

exports.getUser = (req, res) => {
  console.log(req.query.email);
  var toBeSentBack = {};
  usersModel.getUserByEmail(req.query.email)
    .then((data) => {
      toBeSentBack['userData'] = data.rows[0];
      userId = data.rows[0].id;
      console.log(userId);
      usersModel.getCollectionsById(userId)
        .then((collections) => {
          console.log('collections.rows', collections.rows);
          var collectionArray = [];
          for (let c of collections.rows) {
            collectionArray.push(c.collection_name);
          }
          usersModel.getGamesByListOfCollections(collections.rows)
            .then((data) => {
              console.log(data);
              results = [];
              for (var d of data) {
                results.push(d.rows);
              }
              console.log(results);
              console.log(collectionArray);
              for (var i = 0; i < collectionArray.length; i++) {
                toBeSentBack[collectionArray[i]] = results[i];
              }
              res.status(200).send(toBeSentBack);
            })
            .catch((error) => {
              console.log(error.message);
              res.sendStatus(500);
            })
        })
        .catch((error) => {
          console.log(error.message);
          res.sendStatus(500);
        })
    })
    .catch((error) => {
      console.log(error.message);
      res.sendStatus(500);
    })
}

exports.updateUser = (req, res) => {
  const {username, email, fullname, age, preferred_playstyle, 
    favorite_mythical_creature, favorite_board_game, 
    selectedCategories} = req.body

  db.query(`UPDATE USERS set username = $1, email = $2, fullname = $3, 
  age = $4, preferred_playstyle = $5, favorite_mythical_creature = $6, 
  favorite_board_game = $7, selectedCategories = $8 WHERE email = $2 RETURNING *`, 
  [username, email, fullname, age, preferred_playstyle, 
    favorite_mythical_creature, favorite_board_game, 
    selectedCategories]).then(({rows}) => {return rows[0]}).then((rows) => {
      res.send(rows)
    })

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
          const collection = {'My Games': [], 'Liked': [], 'WishList': []}
          console.log('USER DATA IS', userData)
          res.status(200).send(collection);
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