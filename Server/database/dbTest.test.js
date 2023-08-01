const chai = require('chai');
const expect = chai.expect;
const done = chai.done;
const db = require('./db.js');
const Get = require('../models/addGame.js');

describe('database population', function () {
  this.timeout(5000);
  it('should have the right data for already entered items', async function () {
    var game = 'Blankety Blank';
    var dbData = await getGameDataFromDatabase(game);
    var dbCategories = getCategories(dbData);
    var dbImages = getImages(dbData);
    var columns = flattenDbResults(dbData);
    var apiData = await Get.getAllGameDetails(game);
    expect(dbCategories).to.have.same.members(apiData.categories);
    expect(dbImages).to.have.same.members(apiData.images);
    expect(columns).to.eql(apiData.results);
  });

  it('should have the right data for already entered items', async function () {
    var game = 'Monopoly';
    var dbData = await getGameDataFromDatabase(game);
    var dbCategories = getCategories(dbData);
    var dbImages = getImages(dbData);
    var columns = flattenDbResults(dbData);
    var apiData = await Get.getAllGameDetails(game);
    expect(dbCategories).to.have.same.members(apiData.categories);
    expect(dbImages).to.have.same.members(apiData.images);
    expect(columns).to.eql(apiData.results);
  })

  it('should have the right data for already entered items', async function () {
    var game = "Jenga";
    var dbData = await getGameDataFromDatabase(game);
    var dbCategories = getCategories(dbData);
    var dbImages = getImages(dbData);
    var columns = flattenDbResults(dbData);
    var apiData = await Get.getAllGameDetails(game);
    expect(dbCategories).to.have.same.members(apiData.categories);
    expect(dbImages).to.have.same.members(apiData.images);
    expect(columns).to.eql(apiData.results);
  })
})

const flattenDbResults = (dbData) => {
  var keys = Object.keys(dbData.results);
  var columns = [];
  for (let k of keys) {
    if (k !== 'id') {
      columns.push(dbData.results[k])
    }
  }
  return columns;
}

const getImages = (dbData) => {
  var images = [];
  for (let i of dbData.images) {
    images.push(i.image);
  }
  return images;
}

const getCategories = (dbData) => {
  var categories = [];
  for (let c of dbData.categories) {
    categories.push(c.category_name)
  }
  return categories;
}

const getGameDataFromDatabase = (title) => {
  return db.query(`select * from games where title = '${title}'`)
    .then((data) => {
      var results = {
        results: data.rows[0]
      }
      var gameId = data.rows[0].id;
      return db.query(`select * from game_images where game_id = ${gameId}`)
        .then((data) => {
          results['images'] = data.rows;
          return db.query(`select * from categories where game_id = ${gameId}`)
            .then((data) => {
              results['categories'] = data.rows;
              return results;
            })
        })
        .catch((error) => {
          console.log(error.message);
          throw error;
        })
    })
    .catch((error) => {
      console.log(error.message);
      throw error;
    })
}


