let express = require("express");
const app = express();
let bodyParser = require("body-parser");
// let comments = require("./comments");
// let products = require("./products");
// let vehicles = require("./vehicles");
// let contacts = require("./contacts");

app.use(bodyParser.json());

const ContactRoutes = require("./routes/ContactRoutes");
const CommentRoutes = require("./routes/CommentRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");

app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);

app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
    });
    