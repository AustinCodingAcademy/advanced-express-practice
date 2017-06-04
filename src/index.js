import express from "express";

import bodyParser from "body-parser";
import contacstRoutes from "./routes/ContactRoutes";
import vehiclesRoutes from "./routes/VehicleRoutes";
import commentsRoutes from "./routes/CommentRoutes";
import productsRoutes from "./routes/ProductRoutes";
import mongoose from "mongoose";


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/address-book");

const app = express();
app.use(bodyParser.json());
app.use(contactsRoutes);
app.use(vehiclesRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);







const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
