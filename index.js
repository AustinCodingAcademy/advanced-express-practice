let express = require("express");
var contactRoutes = require("./routes/contacts")
var vehicleRoutes = require("./routes/vehicles")
var commentRoutes = require("./routes/comments")
var productRoutes = require("./routes/products")
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://selenasolis:Ss-419057@selena-practice-s1rzj.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url);
let db;

client.connect(doStuffAfterConnected, { useNewUrlParser: true });
function doStuffAfterConnected(err){
    if(err){
      console.log(err);
      return;
    }
    console.log("Connected successfully to server");
    db = client.db("adv-exp-db");
}

function getDatabase(){
  return db;
}


app.use(express.static("public"));
app.use("/contacts", contactRoutes)
app.use("/vehicles", vehicleRoutes)
app.use("/comments", commentRoutes)
app.use("/products", productRoutes)

const thePort = 3001;


app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});


module.exports = getDatabase















