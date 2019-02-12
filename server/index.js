const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://Roger:poopoo69@ds331135.mlab.com:31135/advanced-express-practice", {useNewUrlParser: true});

const bodyParser = require("body-parser");
const contactRoutes = require("./routes/ContactRoutes");
const vehicleRoutes = require("./routes/VehicleRoutes");
const productRoutes = require("./routes/ProductRoutes");
const commentRoutes = require("./routes/CommentRoutes");


const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(productRoutes);
app.use(commentRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});
