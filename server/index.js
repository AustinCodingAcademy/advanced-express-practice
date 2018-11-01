const express = require("express");
const bodyParser = require("body-parser");

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