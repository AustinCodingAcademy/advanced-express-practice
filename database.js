const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dotenv = require('dotenv').config();
 
// Connection URL
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/test?retryWrites=true&w=majority`;
 
// Database Name
const dbName = 'advanced-express-practice';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});