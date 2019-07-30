const {getDatabase} = require("../server/database");

exports.list = function(req,res) {
    let db = getDatabase();
    const collection = db.collection('comments');
    // Find some documents
    let found = collection.find({});
    found.toArray(function(err, comments) {
      res.json(comments)
    });
}

// exports.create = function(req,res) {
//   let db = getDatabase();
//   // Get the documents collection
//   const collection = db.collection('comments');
//   // Insert some documents
//   collection.insertMany(comments, function(err, result) {
//     res.json(comments)
//   });
// }