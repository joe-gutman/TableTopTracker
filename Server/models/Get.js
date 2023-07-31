const db = require('../database/db.js');
const axios = require('axios');

exports.getOne = ({title}) => {
  var queryStr = `select * from games where title = '${title}'`;
  return db.query(queryStr);
}

exports.queryBggForExactResult = (title) => {
  var parsed = title.split(' ');
  parsed = parsed.join('%20')
  queryUrl = 'https://boardgamegeek.com/xmlapi/search?search=' + parsed + '&exact=1'
  return axios.get(queryUrl);
}

exports.queryBggForGameDetails = (boardgameId) => {
  var queryUrl = 'https://boardgamegeek.com/xmlapi/boardgame/' + boardgameId + '?stats=1'
  return axios.get(queryUrl);
}

exports.insertOneGame = (columns) => {
  var queryStr = "insert into games (bgg_id, title, description, minplayers, maxplayers, minplaytime, maxplaytime, age, complexity, year_published, thumbnail, more_info) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)"
  return db.query(queryStr, columns)
}