// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/advanced-express-practice', {useNewUrlParser: true});


// exports.connect = function(done){
//     const url = 'mongodb+srv://user-1:12345@aca-practice-jd9cz.mongodb.net/test?retryWrites=true';
//     const client = new MongoClient(url);

//     client.connect(doStuffAfterConnected, { useNewUrlParser: true });

   

//     function doStuffAfterConnected(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log("Connected successfully to server");
//         db = client.db("advanced-express-practice");
//         if(done){
//             done();
//         }
//     }
// }
// exports.getDatabase = function() {
//     return db;
// }



// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const contacts = require('../contacts');

// // change this to your mongodb atlas uri
// const url = 'mongodb+srv://user-1:12345@aca-practice-jd9cz.mongodb.net/test?retryWrites=true';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(doStuffAfterConnected, { useNewUrlParser: true });

// function doStuffAfterConnected(err){
//     if(err){
//       console.log(err);
//       return;
//     }
//     console.log("Connected successfully to server");
//     const db = client.db("advanced-express-practice");
//     insertSomething(db,()=>{
//       findSomething(db,()=>{
//         client.close();
//       });
//     });
   
// }

// const findSomething = function(db,callback) {
//     // Get the documents collection
//     const collection = db.collection('contacts');
//     // Find some documents
//     let found = collection.find({});
//     found.toArray(function(err, docs) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(docs)
//       callback();
//     });
//   }
// const insertSomething = function(db,callback) {
//     // Get the documents collection
//     const collection = db.collection('contacts');
//     // Insert some documents
//     collection.insertMany(contacts, function(err, result) {
//       console.log("Inserted documents into the collection");
//       callback();
//     });
//   }

// const insertSomething = function(db,callback) {
//     // Get the documents collection
//     const collection = db.collection('???');
//     // Insert some documents
//     collection.insertMany([
//       {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//       console.log("Inserted documents into the collection");
//       callback();
//     });
//   }