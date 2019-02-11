const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://emilioc:emilioc4@ds058548.mlab.com:58548/advanced_express_practice_aca', {useNewUrlParser: true});


//Routes
const commentRoutes = require("./server/routes/CommentRoutes"); 
const contactRoutes = require("./server/routes/ContactRoutes");
const vehicleRoutes = require("./server/routes/VehicleRoutes");
const productRoutes = require("./server/routes/ProductRoutes");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use(commentRoutes); 
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(productRoutes);

const thePort = 3001;

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port", thePort);
});
