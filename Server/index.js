//connect to port

require("dotenv").config();
const express = require("express");
var morgan = require('morgan');
const path = require("path");
const PORT = 3000;
const db = require('./database/db');
const getGameController = require('./controllers/games');

const initializer = require('./database/populate.js');
const {getUserCollections, getCollectionGames} = require("./controllers/collections");

const app = express();
app.use(morgan('dev'));
app.use(express.json());

//initializer.populateBoardGames();

app.get('/game', function(req, res) {
  getGameController.getGame(req, res);
});

app.post('/users', function(req, res) {
  usersController.createUser(req, res);
})

app.get('/users', function(req, res) {
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
