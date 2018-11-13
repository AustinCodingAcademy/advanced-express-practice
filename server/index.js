const express = require("express");
const bodyParser = require("body-parser");
// import mongoose to connect to mongoDB
const mongoose = require("mongoose");
// setup mongoDB connection
mongoose.Promise = global.Promise;
// connect to personal mongoDB database on mlab
mongoose.connect("mongodb://kesto:password1@ds155587.mlab.com:55587/express-practice");
const db = mongoose.connection;
// Check connection
db.once('open', function() {
   console.log('Connected to MongoDB');
})
// Check for database errors
db.on('error', function(err) {
   console.log(err);
})

const contactRouter = require("./routes/ContactRoutes");
const commentRouter = require("./routes/CommentRoutes");
const productRouter = require("./routes/ProductRoutes");
const vehicleRouter = require("./routes/VehicleRoutes");

const app = express();
// Set static path
app.use(express.static('public'));
// Body Parser Middleware
app.use(bodyParser.json());
// bring in routers with routes and controllers
app.use(contactRouter);
app.use(commentRouter);
app.use(productRouter);
app.use(vehicleRouter);

// app is listening to port 3002
app.listen(3001, (err) => {
   if (err) {
      return console.log("Error", err);
   }
   console.log("Web server is now living in apartment 3001");
})