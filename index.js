    
let express = require("express");
let mongoose = require('mongoose')

const app = express();
const port = 3001;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public"));

const contactsRoute = require('./routes/contacts-r');
const commentsRoute = require('./routes/comments-r');
const productsRoute = require('./routes/products-r');
const vehiclesRoute = require('./routes/vehicles-r');

mongoose.connect("mongodb+srv://cbetori:betori12@database-cb-nio9a.gcp.mongodb.net/advanced-express-practice?retryWrites=true",{useNewUrlParser: true})


app.use(contactsRoute, commentsRoute, productsRoute, vehiclesRoute);

app.listen(port, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port -", port);
});