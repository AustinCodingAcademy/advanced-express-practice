import express from "express";
import bodyParser from "body-parser";
import contactRoutes from "./routes/ContactRoutes";
import commentRoutes from "./routes/CommentRoutes";
import productRoutes from "./routes/ProductRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/advanced-express-practice"); //creating database connection


const app = express();
app.use(bodyParser.json()); //tell express to use the tool body-parser
app.use(contactRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
