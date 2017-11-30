import express from "express";
import contactRoutes from "./routes/contactRoutes";
import commentRoutes from "./routes/commentRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";
import productRoutes from "./routes/productRoutes";
import bodyParser from "body-parser";
// import { list, show, create } from "./controllers/ContactController";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");

const app = express();
app.use(bodyParser.json());

app.use(contactRoutes);
app.use(commentRoutes);
app.use(vehicleRoutes);
app.use(productRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
