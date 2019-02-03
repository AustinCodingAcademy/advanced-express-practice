
const express = require("express");

const bodyParser = require("body-parser");
const ContactsRoutes = require("./routes/ContactsRoutes");
const VehiclesRoutes = require("./routes/VehiclesRoutes");
const CommentsRoutes = require("./routes/CommentsRoutes");
const ProductsRoutes = require("./routes/ProductsRoutes");

const app = express();
app.use(bodyParser.json());
app.use(ContactsRoutes);
app.use(VehiclesRoutes);
app.use(CommentsRoutes);
app.use(ProductsRoutes);

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});