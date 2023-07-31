const Get = require('../models/Get.js');
const parser = require('../parser.js');

exports.getGame = (req, res) => {
  Get.getOne(req.body)
    .then((data) => {
      if (data.rows.length === 0) {
        var { title } = req.body;
        Get.getAllGameDetails(title)
          .then((data) => {
            const { categories, images, results } = data
            console.log(results);
            console.log(categories);
            console.log(images);
            // Get.insertOneGame(results)
            //   .then(() => {
            //     console.log('success');
            //     res.sendStatus(200);
            //   })
            //   .catch((error) => {
            //     console.log(error.message);
            //     res.sendStatus(500);
            //   })
            res.sendStatus(200);
          })
          .catch((error) => {
            console.log(error.message);
            res.sendStatus(500);
          })
      }
    })
}