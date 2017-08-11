const path = require('path');

const gameDatabaseQuery = require(path.join(__dirname,'gameDatabaseQuery'))

exports.query = function(req, res) {
  gameDatabaseQuery.gamePagination(req, res);
}
//
// router.post('/uploadFile',  function(req, res) {
//   // console.log(req.files.inputFile);
//   if(!req.files) {
//     res.redirect("/upload");
//   }
//   let inputFile = req.files.inputFile;
//
//   inputFile.mv(path.join(__dirname, "public/data/uploads/", inputFile.name), function(err) {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.redirect("/upload");
//   });
// });

exports.uploadFile = function(req, res) {
  // console.log(req.files.inputFile);
  gameDatabaseQuery.updateGameImage(req, res);
};
