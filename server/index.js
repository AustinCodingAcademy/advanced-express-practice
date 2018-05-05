const express = require("express");
const bodyParser = require("body-parser");
// const comments = require("./comments");
// const products = require("./products");
// const vehicles = require("./vehicles");
// const contacts = require("./contacts");

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
