import express from "express";
import bodyParser from "body-parser";
import contactRoutes from "./routes/ContactsRoutes";
import commentRoutes from "./routes/CommentsRoutes";
import productRoutes from "./routes/ProductsRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/advanced-express-practice");
// test = name of database, not port

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
