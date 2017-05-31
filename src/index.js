import express from "express";

import bodyParser from "body-parser";
import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import commentRoutes from "./routes/CommentRoutes";
import productRoutes from "./routes/ProductRoutes";
import mongoose from "mongoose";


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/address-book");

const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);







const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
