const db = require('../database/db.js');
const axios = require('axios');
const parser = require('../parser.js');

exports.getOne = (title) => {
  var queryStr = `select * from games where title = '${title}'`;
  return db.query(queryStr);
}

exports.queryBggForInexactResult = (title) => {
  console.log(title);
  var parsed = title.split(' ');
  parsed = parsed.join('%20');
  var queryUrl = 'https://boardgamegeek.com/xmlapi/search?search=' + parsed;
  return axios.get(queryUrl);
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

exports.getAllGameDetails = (title) => {
  return exports.queryBggForExactResult(title)
    .then((data) => {
      var results = parser.parseSearchExactGameResults(data.data, title);
      return exports.queryBggForGameDetails(results.boardgameId)
        .then((data) => {
          var xml = data.data;
          //console.log(xml);
          var dataPoints = ['<minplayers', '<maxplayers','<minplaytime', '<maxplaytime', '<age', '<description', '<thumbnail', '<averageweight', '<yearpublished']
          var found = dataPoints.forEach(point => {
            var index = point.slice(1, point.length);
            if (index === 'averageweight') {
              index = 'complexity';
            } else if (index === 'yearpublished') {
              index = 'year_published';
            }
            results[index] = parser.findDataPoint(xml, point)
          })
          var images = parser.findAllInstancesOfDataPoint(xml, '<image');
          var categories = parser.findAllInstancesOfDataPoint(xml, '<boardgamecategory');
          var bgg_url = 'https://boardgamegeek.com/boardgame/' + results.boardgameId + '/' + title.toLowerCase();
          bgg_url = bgg_url.split(' ');
          bgg_url = bgg_url.join('-');
          results['more_info'] = bgg_url;
          // todo: push results to the database.

          const order = ['boardgameId', 'title', 'description', 'minplayers', 'maxplayers', 'minplaytime', 'maxplaytime', 'age', 'complexity', 'thumbnail', 'more_info', 'year_published']
          var ints = ['boardgameId', 'minplayers', 'maxplayers', 'minplaytime', 'maxplaytime', 'age', 'year_published']
          var toBeEntered = [];
          for (let o of order) {
            if (ints.includes(o)) {
              toBeEntered.push(parseInt(results[o]));
            } else if (o === 'complexity') {
              toBeEntered.push(parseFloat(results[o]));
            } else {
              toBeEntered.push(results[o]);
            }
          }
          return {
            categories: categories,
            images: images,
            results: toBeEntered
          }
        })
        .catch((error) => {
          return {
            title: title,
            error: error.message
          }
        })
    })
    .catch((error) => {
      return {
        title: title,
        error: error.message
      }
    })
}

exports.insertOneGame = (columns) => {
  var queryStr = "insert into games (bgg_id, title, description, minplayers, maxplayers, minplaytime, maxplaytime, age, complexity, thumbnail, more_info, year_published) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)"
  return db.query(queryStr, columns)
}

exports.insertOneImage = (gameId, imageUrl) => {
  var values = [gameId, imageUrl];
  var queryStr = "insert into game_images (game_id, image) values ($1, $2)"
  return db.query(queryStr, values);
}

exports.insertOneCategory = (gameId, categoryName) => {
  var values = [gameId, categoryName]
  var queryStr = "insert into categories (game_id, category_name) values ($1, $2)"
  return db.query(queryStr, values);
}
// so we've already checked if the result was an error; if we pass it through to this content we know we're okay.

async function insertGameWithErrorHandling(columns) {
  try {
    var queryStr = "insert into games (bgg_id, title, description, minplayers, maxplayers, minplaytime, maxplaytime, age, complexity, thumbnail, more_info, year_published) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)"
    await db.query(queryStr, columns);
    console.log(`${columns[1]} inserted successfully!`);
  } catch (error) {
    var errorData = {
      title: columns[1],
      error: error.message
    }
    var newError = new Error();
    newError.data = errorData;
    throw newError;
  }
}

exports.insertGameImageAndCategories = async (resultOfGetAllGameDetails) => {
  try {
    var { categories, images, results } = resultOfGetAllGameDetails;
    await insertGameWithErrorHandling(results);
    var values = [results[1]]
    var data = await db.query('select * from games where title = ($1)', values);
    var nextId = data.rows[0].id;
    var promises = [];
    for (let i of images) {
      promises.push(exports.insertOneImage(nextId, i));
    }
    for (let c of categories) {
      promises.push(exports.insertOneCategory(nextId, c));
    }
    return Promise.all(promises);
  } catch (error) {
    console.log('in insertGameImageAndCategories')
    console.log(error.message);
    throw error;
  }
};



exports.getAllGameDetailsThrownError = (title) => {
  return exports.queryBggForExactResult(title)
    .then((data) => {
      var results = parser.parseSearchExactGameResults(data.data, title);
      return exports.queryBggForGameDetails(results.boardgameId)
        .then((data) => {
          var xml = data.data;
          //console.log(xml);
          var dataPoints = ['<minplayers', '<maxplayers','<minplaytime', '<maxplaytime', '<age', '<description', '<thumbnail', '<averageweight', '<yearpublished']
          var found = dataPoints.forEach(point => {
            var index = point.slice(1, point.length);
            if (index === 'averageweight') {
              index = 'complexity';
            } else if (index === 'yearpublished') {
              index = 'year_published';
            }
            results[index] = parser.findDataPoint(xml, point)
          })
          var images = parser.findAllInstancesOfDataPoint(xml, '<image');
          var categories = parser.findAllInstancesOfDataPoint(xml, '<boardgamecategory');
          var bgg_url = 'https://boardgamegeek.com/boardgame/' + results.boardgameId + '/' + title.toLowerCase();
          bgg_url = bgg_url.split(' ');
          bgg_url = bgg_url.join('-');
          results['more_info'] = bgg_url;
          // todo: push results to the database.

          const order = ['boardgameId', 'title', 'description', 'minplayers', 'maxplayers', 'minplaytime', 'maxplaytime', 'age', 'complexity', 'thumbnail', 'more_info', 'year_published']
          var ints = ['boardgameId', 'minplayers', 'maxplayers', 'minplaytime', 'maxplaytime', 'age', 'year_published']
          var toBeEntered = [];
          for (let o of order) {
            if (ints.includes(o)) {
              toBeEntered.push(parseInt(results[o]));
            } else if (o === 'complexity') {
              toBeEntered.push(parseFloat(results[o]));
            } else {
              toBeEntered.push(results[o]);
            }
          }
          return {
            categories: categories,
            images: images,
            results: toBeEntered
          }
        })
        .catch((error) => {
          throw error;
        })
    })
    .catch((error) => {
      throw error;
    })
}


// [
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Bul',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   {
//     title: 'Chaturanga (Indian chess)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Commands & Colors: Ancients',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Cross and circle game',
//     error: 'Request failed with status code 404'
//   },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Daldøs',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   { title: 'Doublets', error: 'Request failed with status code 404' },
//   { title: 'Draughts', error: 'Request failed with status code 404' },
//   {
//     title: 'English Game',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Hounds and Jackals',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Irish', error: 'Request failed with status code 404' },
//   { title: 'Jacquet', error: 'Request failed with status code 404' },
//   {
//     title: 'Janggi (Korean chess)',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Khet', error: 'Request failed with status code 404' },
//   {
//     title: 'Makruk (Thai chess)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Matching game',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Ouk-Khmer (Cambodian chess)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Reversi (Othello)',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'RSVP', error: 'Request failed with status code 404' },
//   { title: 'Sáhkku', error: 'Request failed with status code 404' },
//   {
//     title: 'Shatar (Mongolian chess)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Shatranj (Persian chess)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Shogi (Japanese chess)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Sittuyin (Burmese chess)',
//     error: 'Request failed with status code 404'
//   },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at runMicrotasks (<anonymous>)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Tâb',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   {
//     title: 'Tafl (Tablut)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Twilight Struggle: The Cold War, 1945–1989',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Verquere', error: 'Request failed with status code 404' },
//   {
//     title: 'Xiangqi (Chinese chess)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Axis & Allies',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Eclipse: New Dawn for the Galaxy',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Finance', error: 'Request failed with status code 404' },
//   {
//     title: 'The Great Train Robbery',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Heroscape', error: 'Request failed with status code 404' },
//   { title: 'Ludo', error: 'Request failed with status code 404' },
//   {
//     title: 'Shengguan Tu',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Shogun/Samurai Swords',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Star Wars Epic Duels',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Star Wars Tactics',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'TEG', error: 'Request failed with status code 404' },
//   { title: 'Terakh', error: 'Request failed with status code 404' },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at runMicrotasks (<anonymous>)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Tri-nim',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   {
//     title: 'War on Terror, The Boardgame',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Game of the Goose',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Hare and Tortoise',
//     error: 'Request failed with status code 404'
//   },
//   { title: '18XX', error: 'Request failed with status code 404' },
//   { title: 'Aksharit', error: 'Request failed with status code 404' },
//   { title: 'Bonkers!', error: 'Request failed with status code 404' },
//   {
//     title: 'Chinese checkers (Sternhalma)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Chowka bhara',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Clue/Cluedo',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Coin Hopping—Washington D.C.',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Catan (The Settlers of Catan)',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Dead of Winter: A Cross Roads Game',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: "Don't Quote Me",
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Dungeons & Dragons',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Axis and Allies',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Axis and Allies D-Day',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Axis and Allies Europe',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Crash Tackle',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Hedbanz', error: 'Request failed with status code 404' },
//   {
//     title: 'Isis & Osiris',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Mage Stones',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Mancala', error: 'Request failed with status code 404' },
//   { title: 'Mind Mover', error: 'Request failed with status code 404' },
//   {
//     title: 'Nabuko Generals and Conquerors',
//     error: 'Request failed with status code 404'
//   },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at runMicrotasks (<anonymous>)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Sho',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   {
//     title: 'TEG - Plan Táctico y Estratégico de la Guerra',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Daldos', error: 'Request failed with status code 404' },
//   { title: 'Reversi', error: 'Request failed with status code 404' },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at runMicrotasks (<anonymous>)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Thayaam',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   {
//     title: 'Tri Tactics',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Star Wars X-Wing Miniatures',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Hūsker Dū?', error: 'Request failed with status code 404' },
//   {
//     title: 'Mensch ärgere Dich nicht',
//     error: 'Request failed with status code 404'
//   },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at runMicrotasks (<anonymous>)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Okey',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   {
//     title: 'Omega Virus',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Ouija', error: 'Request failed with status code 404' },
//   { title: 'Outrage!', error: 'Request failed with status code 404' },
//   {
//     title: 'Pack & Stack',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Parcheesi', error: 'Request failed with status code 404' },
//   { title: 'Parqués', error: 'Request failed with status code 404' },
//   { title: 'Puzzle', error: 'Request failed with status code 404' },
//   {
//     title: 'Rivers, Roads & Rails',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Scoundrels of Skullport',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Sherlock Holmes: Consulting Detective',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Snakes and Ladders',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Take It Easy',
//     error: 'Request failed with status code 404'
//   },
//   {
//     title: 'Tigris and Euphrates',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Travel Go', error: 'Request failed with status code 404' },
//   {
//     title: 'Trivial Pursuit',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Yut', error: 'Request failed with status code 404' },
//   { title: 'København', error: 'Request failed with status code 404' },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at runMicrotasks (<anonymous>)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Carrom',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   Error
//       at insertGameWithErrorHandling (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:116:20)
//       at runMicrotasks (<anonymous>)
//       at processTicksAndRejections (node:internal/process/task_queues:96:5)
//       at async Object.exports.insertGameImageAndCategories (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/models/Get.js:125:5)
//       at async Object.exports.populateListOfGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:12:9)
//       at async Object.exports.populateBoardGames (/Users/nejim/Desktop/blueOcean/TableTop-Collection/Server/database/populate.js:34:13) {
//     data: {
//       title: 'Chapayev',
//       error: 'invalid input syntax for type integer: "NaN"'
//     }
//   },
//   { title: 'Kerplunk', error: 'Request failed with status code 404' },
//   {
//     title: 'Snakes and Ladders (Chutes and Ladders)',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'XCOM', error: 'Request failed with status code 404' },
//   {
//     title: 'Thiruthamizh',
//     error: 'Request failed with status code 404'
//   },
//   { title: 'Trickster', error: 'Request failed with status code 404' },
//   {
//     title: 'Icehouse pieces',
//     error: 'Request failed with status code 404'
//   }
// ]
