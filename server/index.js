let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const contactRoutes = require("./routes/ContactRoutes");
const vehiclesRoutes = require("./routes/VehiclesRoutes");
const productsRoutes = require("./routes/ProductsRoutes");
const commentRoutes = require("./routes/CommentsRoutes");

app.use(contactRoutes);
app.use(vehiclesRoutes);
app.use(productsRoutes);
app.use(commentRoutes);

// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
 