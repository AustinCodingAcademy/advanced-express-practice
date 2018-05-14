const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


app.use(bodyParser.json());
mongoose.createConnection('mongodb://walzer85:gr33n3ggs@ds115350.mlab.com:15350/advanced-express-practice');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MongoDB')
});

//set up the server to listen to port 3010
app.listen(3010, (err) => {
if (err) {
    return console.log("Error", err);
}
console.log("Web server is now living in apartment 3010");
});

//where the routes are going to & coming from
const ContactRoutes = require("./routes/ContactRoutes");
const CommentRoutes = require("./routes/CommentRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");

//Now able to access the routes
app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);