let express = require("express");
let commentRoutes = require("./routes/comment");
let productRoutes = require("./routes/product");
let contactRoutes  = require("./routes/contact");
let vehicleRoutes = require('./routes/vehicle');

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.use(vehicleRoutes);
app.use(productRoutes);
app.use(contactRoutes);
app.use(vehicleRoutes);

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
