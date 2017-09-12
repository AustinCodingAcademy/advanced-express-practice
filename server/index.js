import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";
import ContactsRoutes from "./routes/ContactsRoutes";
import CommentsRoutes from "./routes/CommentsRoutes";
import ProductsRoutes from "./routes/ProductsRoutes";
import VehiclesRoutes from "./routes/VehiclesRoutes";
import mongoose from "mongoose";//not sure how to connect here
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");



const app = express();
app.use(bodyParser.json());
app.use(ContactsRoutes);
app.use(CommentsRoutes);
app.use(ProductsRoutes);
app.use(VehiclesRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
