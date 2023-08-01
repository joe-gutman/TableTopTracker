//connect to port

require("dotenv").config();
const express = require("express");
var morgan = require('morgan');
const path = require("path");
const PORT = 3000;
const db = require('./database/db');
const getController = require('./controllers/gets');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
//app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/game', function(req, res) {
  getController.getGame(req, res);
});

app.get('/collections', (req, res, next) => {

});

app.get('/collections/:collectionId', (req, res, next) => {

});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
