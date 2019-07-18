let express = require("express");
var contactRoutes = require("./routes/contacts")
var vehicleRoutes = require("./routes/vehicles")
var commentRoutes = require("./routes/comments")
var productRoutes = require("./routes/products")
const app = express();

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




















