let express = require("express");
let bodyParser = require("body-parser");

let vehicleRoutes = require('./routes/vehicle');
let contactRoutes = require('./routes/contacts');
let productRoutes = require('./routes/products');
let commentRoutes = require('./routes/comments');

let app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.use(vehicleRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(commentRoutes);

app.listen(thePort, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port",thePort);
 });