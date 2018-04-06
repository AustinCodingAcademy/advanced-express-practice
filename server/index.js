import express from "express";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import ProductRoutes from "./routes/ProductRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://jwoo:jwoo@ds147668.mlab.com:47668/aca-test');
mongoose.connect("mongodb://geohalbert:4ghhuFff@ds153978.mlab.com:53978/tonyromo");

const app = express();
app.use(bodyParser.json());

//snippets made for expressgetroute and expresspostroute
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
