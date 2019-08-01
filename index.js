let express = require("express");

let vehicleRoutes = require('./routes/vehiclesRoute');
let contactRoutes = require('./routes/contactsRoute');
let productRoutes = require('./routes/productsRoute');
let commentRoutes = require('./routes/commentsRoute');

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(vehicleRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(commentRoutes);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/advanced-express-practice', {useNewUrlParser: true});

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",3002);
});