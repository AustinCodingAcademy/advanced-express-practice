let express = require("express");
let bodyParser = require("body-parser");
let contactRoutes = require("./routes/ContactRoutes");
let commentRoutes = require("./routes/CommentRoutes");
let productRoutes = require("./routes/ProductRoutes");
let vehicleRoutes = require("./routes/VehicleRoutes");

app.use(contactRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);

const app = express();

const ids = {
    com: comments.length,
    con: contacts.length,
    pro: products.length,
    veh: vehicles.length
}

app.use(bodyParser.json());

app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
});