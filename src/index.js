import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contactRoutes";
import commentRoutes from "./routes/commentRoutes";
import productRoutes from "./routes/productRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";

const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});