const {getDatabase} = require("../server/database");

exports.list = function(req,res) {
    let db = getDatabase();
    const collection = db.collection('contacts');
    // Find some documents
    let found = collection.find({});
    found.toArray(function(err, contacts) {
      res.json(contacts)
    });
}

// exports.create = function(req,res) {
//   let db = getDatabase();
//   // Get the documents collection
//   const collection = db.collection('contacts');
//   // Insert some documents
//   collection.insertMany({contacts}, function(err, result) {
//     res.json(contacts)
//   });
// }