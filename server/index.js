import express from "express";
import bodyParser from "body-parser";

import commentRoutes from "./routes/CommentRoutes";
import contactRoutes from "./routes/ContactRoutes";
import productRoutes from "./routes/ProductRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";


import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://App:2jlCFI9Mw1sIP@ds231229.mlab.com:31229/advanced-express-practice");


const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  console.log(`Listening on port:${port}`);
  if (err) {
    return console.log("Error", err);
  }
});

app.use(commentRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);
