let express = require("express");

const mongoose = require('mongoose');

mongoose.connect('mongodb://dbAdmin:pass1234@cluster0-shard-00-00-2km2k.mongodb.net:27017,cluster0-shard-00-01-2km2k.mongodb.net:27017,cluster0-shard-00-02-2km2k.mongodb.net:27017/advanced-express-practice?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', function(err) {
  console.log(err)
  // If no error, successfully connected
});



const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
const commentRoutes = require("./routes/CommentRoutes")
const contactRoutes = require("./routes/ContactRoutes")
const productRoutes = require("./routes/ProductRoutes")
const vehicleRoutes = require("./routes/VehicleRoutes")
app.use(contactRoutes)
app.use(commentRoutes)
app.use(productRoutes)
app.use(vehicleRoutes)

const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
