// In server/index.js, import and use mongoose. Connect to a database "advanced-express-practice"
// Create the mongoose models for Contact, Vehicle, Comment Product
// CommentModel - body
// ContactModel - name, occupation, avatar
// VehicleModel - year, make, model
// ProductModel - name, description
// Change the code in the controllers to use the Models instead of hard coded arrays


const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://shelbyinloes:Phimulove11!@ds147070.mlab.com:47070/advanced-express-practice");
app.use(bodyParser.json());

const ContactRoutes = require("./routes/ContactRoutes");
const CommentRoutes = require("./routes/CommentRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");

app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});
