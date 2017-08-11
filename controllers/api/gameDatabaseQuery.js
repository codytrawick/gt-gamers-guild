const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.join(__dirname, '../../gameInventory.sqlite'));

exports.gamePagination = function (req, res) {
  db.all("SELECT * FROM Inventory", function(err, rows) {
    res.json(rows)
  })
};

exports.updateGameImage = function (req, res) {
  let inputData = [req.file.path, req.body.gameID];
  db.all(`UPDATE Inventory SET Image=? WHERE ID=?`, inputData, function(err, result) {
    if (err) {
      console.error(err);
    }
    res.send("All done");
  })
}
