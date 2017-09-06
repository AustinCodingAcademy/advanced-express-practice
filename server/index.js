import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";

//mongoose stuff
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");

const app = express();

//routes
app.use(bodyParser.json())
  .use(contactRoutes)
  .use(vehicleRoutes);

//make express listen
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
