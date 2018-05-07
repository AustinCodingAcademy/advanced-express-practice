const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;


app.use(bodyParser.json());
// mongoose.connect('mongodb://eric.walz:@thedr1vein@ds115350.mlab.com:15350/advanced-express-practice');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!");
// });



app.listen(3010, (err) => {
if (err) {
    return console.log("Error", err);
}
console.log("Web server is now living in apartment 3010");
});

const ContactRoutes = require("./routes/ContactRoutes");
const CommentRoutes = require("./routes/CommentRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");

app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);