let express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
const thePort = 3001;

//Get routes
let contacts = require("./routes/ContactsRoutes");
let vehicles = require("./routes/VehiclesRoutes");
let products = require("./routes/ProductsRoutes");
let comments = require("./routes/CommentsRoutes");

app.use('/', contacts);
app.use('/', vehicles);
app.use('/', products);
app.use('/', comments);

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
