
const express = require('express');
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://zgutier5:zeke33@ds131903.mlab.com:31903/expresspractice");

const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");
const bodyParser = require("body-parser");

let ContactRoutes  = require("./routes/ContactRoutes");
let CommentRoutes  = require("./routes/CommentRoutes");
let ProductRoutes  = require("./routes/ProductRoutes");
let VehicleRoutes  = require("./routes/VehiclesRoutes");



const app = express();
app.use(bodyParser.json());
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

