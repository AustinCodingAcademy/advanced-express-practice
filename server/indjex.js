const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const MongoClient = require(‘mongodb’).MongoClient;
const uri = "mongodb+srv://user1:12345@database-server-1-5wzy9.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("advanced-express-practice").collection("devices");
  // perform actions on the collection object
  client.close();
});