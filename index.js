let express = require("express");

var contactRoutes = require("./server/routes/contacts")
var vehicleRoutes = require("./server/routes/vehicles")
var commentRoutes = require("./server/routes/comments")
var productRoutes = require("./server/routes/products")

const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/selena-practice", {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/contacts", contactRoutes)
app.use("/vehicles", vehicleRoutes)
app.use("/comments", commentRoutes)
app.use("/products", productRoutes)

const thePort = 3001;

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});