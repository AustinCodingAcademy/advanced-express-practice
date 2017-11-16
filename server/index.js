import express from "express";
import products from "./products";
import bodyParser from "body-parser";
import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import commentRoutes from "./routes/CommentRoutes";
import productRoutes from "./routes/ProductRoutes";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);
