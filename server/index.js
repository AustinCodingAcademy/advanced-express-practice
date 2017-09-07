import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import commentRoutes from "./routes/CommentRoutes";
import productRoutes from "./routes/ProductRoutes";

//mongoose stuff
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");

const app = express();

//routes
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);

//make express listen
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
