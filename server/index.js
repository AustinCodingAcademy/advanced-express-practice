
const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://melfuechec:bucket123@ds127655.mlab.com:27655/advanced-express-practice", {useNewUrlParser: true});
// mongoose.connect("mongodb://melfuechec:bucket123@ds221095.mlab.com:21095/aca-test", {useNewUrlParser: true});
const bodyParser = require("body-parser");
const ContactsRoutes = require("./routes/ContactsRoutes");
const VehiclesRoutes = require("./routes/VehiclesRoutes");
const CommentsRoutes = require("./routes/CommentsRoutes");
const ProductsRoutes = require("./routes/ProductsRoutes");

const app = express();
app.use(bodyParser.json());
app.use(ContactsRoutes);
app.use(VehiclesRoutes);
app.use(CommentsRoutes);
app.use(ProductsRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});
