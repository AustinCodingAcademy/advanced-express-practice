let express = require("express");
let mongoose = require('mongoose');
mongoose.connect('mongodb://practice:green333@ds129045.mlab.com:29045/advanced-express-practice');


const bodyParser = require("body-parser");
const contactRoutes = require("./routes/ContactRoutes");
const vehicleRoutes = require("./routes/VehicleRoutes");
const commentRoutes = require("./routes/CommentRoutes");
const productRoutes = require("./routes/ProductRoutes");


const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});