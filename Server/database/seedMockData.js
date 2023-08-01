const path = require('path');
const db = require('./db.js');

db.query(
  `COPY "users"(id,username,user_id,email,photo,games_owned,games_wishlisted,collections)
      FROM '${path.join(__dirname, 'mockCsvs/users.csv')}'
      WITH ( FORMAT csv, HEADER true )`
).then(() =>
  db.query(
    `COPY games(id,bgg_id,title,description,minplayers,maxplayers,minplaytime,maxplaytime,age,complexity,year_published,more_info)
    FROM '${path.join(__dirname, 'mockCsvs/games.csv')}'
    WITH ( FORMAT csv, HEADER true )`
  )
).then(() =>
  db.query(
    `COPY collections(id,user_id,collection_name)
    FROM '${path.join(__dirname, 'mockCsvs/collections.csv')}'
    WITH ( FORMAT csv, HEADER true )`
  )
).then(() =>
  db.query(
    `COPY collections_games_join(id,game_id,collection_id)
    FROM '${path.join(__dirname, 'mockCsvs/collection_games.csv')}'
    WITH ( FORMAT csv, HEADER true )`
  )
).then(() =>
  db.query(
    `COPY owned_games_join(id,game_id,user_id)
    FROM '${path.join(__dirname, 'mockCsvs/owned_games.csv')}' 
    WITH ( FORMAT csv, HEADER true )`
  )
)
.then((x) => {
  console.log('done: ', x);
}).catch((err) => {
  console.log('error: ', err)
})