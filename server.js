const MongoClient = require('mongodb').MongoClient;

// change this to your mongodb atlas uri
const url = 'mongodb+srv://user-1:12345@aca-practice-jd9cz.mongodb.net/test?retryWrites=true';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(doStuffAfterConnected, { useNewUrlParser: true });

function doStuffAfterConnected(err){
    if(err){
      console.log(err);
      return;
    }
    console.log("Connected successfully to server");
    const db = client.db("aca-practice");
    insertSomething(db,()=>{
      findSomething(db,()=>{
        client.close();
      });
    });
   
}