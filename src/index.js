import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import commentRoutes from "./routes/CommentRoutes";
import productRoutes from "./routes/ProductRoutes";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/practice");

const app = express();

app.use(bodyParser.json())
  .use(contactRoutes)
  .use(vehicleRoutes)
  .use(commentRoutes)
  .use(productRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
