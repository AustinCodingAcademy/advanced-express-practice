const express = require("express");
const mongoose = require("mongoose");
const contactRoute = require("./Routes/Contact_routes");
const vehicleRoute = require("./Routes/Vehicles_routes");
const commentRoute = require("./Routes/Comments_routes");
const productRoute = require("./Routes/Products_routes");
const thePort = 3001;

mongoose.connect('mongodb://localhost/advanced-express-practice')

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(contactRoute);
app.use(vehicleRoute);
app.use(commentRoute);
app.use(productRoute);


app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});





