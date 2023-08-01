//connect to port

require("dotenv").config();
const express = require("express");
var morgan = require('morgan');
const path = require("path");
const PORT = 3000;
const db = require('./database/db');
const getGameController = require('./controllers/games');

const initializer = require('./database/populate.js');

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

app.get('/collections', (req, res, next) => {

});

app.get('/collections/:collectionId', (req, res, next) => {

});



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
