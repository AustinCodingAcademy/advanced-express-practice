let express = require("express");
let bodyParser = require("body-parser");
let contactRoutes = require("./routes/ContactRoutes");
let commentRoutes = require("./routes/CommentRoutes");
let productRoutes = require("./routes/ProductRoutes");
let vehicleRoutes = require("./routes/VehicleRoutes");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const promise = mongoose.connect("mongodb://charcole:Th3odora@ds151558.mlab.com:51558/aca-test", {
    useMongoClient: true,
});

const app = express();

app.use(bodyParser.json());
app.use(contactRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);

app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3001");
});