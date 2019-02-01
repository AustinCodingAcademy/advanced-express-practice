const express = require("express");
const products = require("./products");


const bodyParser = require("body-parser");
const contactRoutes = require("./routes/ContactRoutes");
const vehicleRoutes = require("./routes/VehicleRoutes");
const commentRoutes = require("./routes/CommentRoutes");



const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);


app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
});
