const db = require('../database/db.js');
const axios = require('axios');

exports.getOne = ({title}) => {
  console.log(title);
  var queryStr = `select * from games where title = '${title}'`;
  return db.query(queryStr);
}

exports.queryBggForExactResult = (title) => {
  var parsed = title.split(' ');
  parsed = parsed.join('%20')
  console.log(parsed);
  queryUrl = 'https://boardgamegeek.com/xmlapi/search?search=Crossbows%20and%20Catapults&exact=1'
  return axios.get(queryUrl);
}

exports.queryBggForGameDetails = (boardgameId) => {
  var queryUrl = 'https://boardgamegeek.com/xmlapi/boardgame/' + boardgameId + '?stats=1'
  return axios.get(queryUrl);
}