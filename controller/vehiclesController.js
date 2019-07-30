const {getDatabase} = require("../server/database");

exports.list = function(req,res) {
    let db = getDatabase();
    const collection = db.collection('vehicles');
    // Find some documents
    let found = collection.find({});
    found.toArray(function(err, vehicles) {
      res.json(vehicles)
    });
}

// exports.create = function(req,res) {
//   let db = getDatabase();
//   // Get the documents collection
//   const collection = db.collection('vehicles');
//   // Insert some documents
//   collection.insertMany(vehicles, function(err, result) {
//     res.json(vehicles)
//   });
// }