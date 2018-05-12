const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://nhbs:Nhbs7178@ds119930.mlab.com:19930/aca-express-practice", {
  useMongoClient: true
});


const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const CommentRoutes = require("./routes/CommentRoutes.js");
const ContactRoutes = require("./routes/ContactRoutes.js");
const VehicleRoutes = require("./routes/VehicleRoutes.js");
const ProductRoutes = require("./routes/ProductRoutes.js");

app.use(CommentRoutes);
app.use(VehicleRoutes);
app.use(ProductRoutes);
app.use(ContactRoutes);


app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});


// In src/index.js, import and use mongoose. Connect to a database "advanced-express-practice"
// Create the mongoose models for Contact, Vehicle, Comment Product
// CommentModel - body
// ContactModel - name, occupation, avatar
// VehicleModel - year, make, model
// ProductModel - name, description
// Change the code in the controllers to use the Models instead of hard coded arrays
