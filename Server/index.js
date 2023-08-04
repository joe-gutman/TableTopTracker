//connect to port

require("dotenv").config();
const express = require("express");
var morgan = require('morgan');
const path = require("path");
const PORT = 3000;
const db = require('./database/db');
const getGameController = require('./controllers/games');
const cors = require('cors');
const initializer = require('./database/populate.js');
const adminInit = require('./database/populateUsers.js');
const {getUserCollections, getCollectionGames, createCollection, postToCollection} = require("./controllers/collections");
const usersController = require('./controllers/users.js');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

// initializer.populateBoardGames();
adminInit.populateAdmin();

// this is still needed for line 47 app.get('/users', ...)
const dummydata = {
  "uid":"yElHRF2wa2NDBQ9myvTXVEd60Tt2",
  "email":"admin@tabletop.com",
  "fullname": "Samantha Johnson",
  "username": "SamPlayzGames",
  "age": 28,
  "preferred_playstyle": "Strategic and Competitive",
  "favorite_mythical_creature": "Dragon",
  "favorite_board_game": "Catan (Settlers of Catan)",
  "favorite_category": "Eurogames"
};

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

app.post('/collections/games', async (req, res, next) => {
  try{
    const {userId, collectionName, gameId} = req.body
    const newJoin = await postToCollection(userId, collectionName, gameId);
    res.status(201).send(newJoin);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post('/collections', async (req, res, next) => {
  try{
    const newCollection = await createCollection(req.body);
    res.status(201).send(newCollection);
  } catch(err) {
    console.log(err)
    res.sendStatus(500);
  }
});

app.get('/collections', getUserCollections);

app.get('/collections/:collectionId/games', async (req, res, next) => {
  try {
    const collectionGames = await getCollectionGames(req.params.collectionId);
    res.send(collectionGames);
  } catch(err) {
    res.sendStatus(500);
  }
});

app.post('/gpt', (req, res) => {
  // we want to make a query based on the exact game data;
  getGameController.getListOfGames(req, res);
});

// {
//   recommendations: [ { gameName: 'Monopoly' }, { gameName: 'The Settlers of Catan' } ]
// }




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})