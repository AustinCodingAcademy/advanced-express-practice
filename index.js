let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
const commentRoutes = require("./routes/CommentRoutes")
const contactRoutes = require("./routes/ContactRoutes")
const productRoutes = require("./routes/ProductRoutes")
const vehicleRoutes = require("./routes/VehicleRoutes")
app.use(contactRoutes)
app.use(commentRoutes)
app.use(productRoutes)
app.use(vehicleRoutes)

const thePort = 3001;



app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
