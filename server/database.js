// const MongoClient = require('mongodb').MongoClient;
// let db = null;

// exports.connect = function(done){
//     const url = 'mongodb://localhost:27017/adv-exp-db';
//     const client = new MongoClient(url);

//     client.connect(doStuffAfterConnected, { useNewUrlParser: true });

   

//     function doStuffAfterConnected(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log("Connected successfully to server");
//         db = client.db("adv-exp-db");
//         if(done){
//             done();
//         }
//     }
// }
// exports.getDatabase = function() {
//     return db;
// }