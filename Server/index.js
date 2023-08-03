//connect to port

require("dotenv").config();
const express = require("express");
var morgan = require('morgan');
const path = require("path");
const PORT = 3000;
const db = require('./database/db');
const getGameController = require('./controllers/games');
const usersController = require('./controllers/users');
const cors = require('cors');
const initializer = require('./database/populate.js');
const adminInit = require('./database/populateUsers.js');
const {getUserCollections, getCollectionGames} = require("./controllers/collections");

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

// initializer.populateBoardGames();
<<<<<<< HEAD
//adminInit.populateAdmin();
=======
// adminInit.populateAdmin();
>>>>>>> d548a75c985e7d4d8b80ca9a9a4a7ab73ed6c3aa

app.get('/game', function(req, res) {
  getGameController.getGame(req, res);
});

app.post('/users', function(req, res) {
  console.log(req.body)
  usersController.createUser(req, res);
})

app.get('/users', function(req, res) {
  // we make a request to the database for the user data by email
  usersController.getUser(req, res);
})

app.get('/collections', async (req, res, next) => {
  try{
    const collections = await getUserCollections(req.query.userId);
    res.send(collections)

  } catch(err) {
    req.sendStatus(500);
  }
});

app.get('/collections/:collectionId/games', async (req, res, next) => {
  try {
    const collectionGames = await getCollectionGames(req.params.collectionId);
    res.send(collectionGames);
  } catch(err) {
    req.sendStatus(500);
  }
});



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})