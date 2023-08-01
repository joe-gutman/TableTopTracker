const chai = require('chai');
const expect = chai.expect;
const db = require('./db.js');

describe('database population', function () {
  it('should run a test', function () {
    expect(true).to.be.true;
  });

  it('should have the right data for already entered items', function () {
    const testItems = [
      "Blankety Blank"
      //"Serpentine",
      //"Monopoly"
    ]
    for (let game of testItems) {
      db.query(`select * from games where title = '${game}'`)
        .then((data) => {
          console.log(data.rows);
        })
        .catch((error) => {
          console.log(error.message);
          throw error;
        })
    }
  })
})


