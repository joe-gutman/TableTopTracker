//connect to port

require("dotenv").config();
const express = require("express");
var morgan = require('morgan');
const path = require("path");
const PORT = 3000;
const db = require('./database/db');
const getController = require('./controllers/gets');

const initializer = require('./database/populate.js');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
//app.use(express.static(path.join(__dirname, '../client/public')));

initializer.populateBoardGames();

app.get('/game', function(req, res) {
  getController.getGame(req, res);
})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
