let express = require("express");
const mongoose = require('mongoose');
const assert = require('assert');
const dotenv = require('dotenv').config();
let commentRoutes = require('./routes/comment');
let productRoutes = require('./routes/product');
let contactRoutes  = require('./routes/contact');
let vehicleRoutes = require('./routes/vehicle');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use(contactRoutes);

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
