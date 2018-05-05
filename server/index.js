const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.listen(3001, (err) => {
if (err) {
    return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});

const ContactRoutes = require("./routes/ContactRoutes");
app.use(ContactRoutes);

const CommentRoutes = require("./routes/CommentRoutes");
app.use(CommentRoutes);

const ProductRoutes = require("./routes/ProductRoutes");
app.use(ProductRoutes);

const VehicleRoutes = require("./routes/VehicleRoutes");
app.use(VehicleRoutes);