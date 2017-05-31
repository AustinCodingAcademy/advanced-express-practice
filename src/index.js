import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import ContactRoutes from "./routes/ContactRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import VehiclesRoutes from "./routes/VehiclesRoutes";
import ProductsRoutes from "./routes/ProductsRoutes";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/address-book");

const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(VehiclesRoutes);
app.use(ProductsRoutes);

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if(err){
  console.log(`Listening on port:${port}`);
}
});
