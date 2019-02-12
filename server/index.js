const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/ContactRoutes");
const vehicleRoutes = require("./routes/VehicleRoutes");
const commentRoutes = require("./routes/CommentRoutes");
const productRoutes = require("./routes/ProductRoutes");

const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password1@ds131905.mlab.com:31905/advanced-express-practice', { useMongoClient: true });




const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);

app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});
