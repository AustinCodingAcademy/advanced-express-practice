import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import contactRoute from "./routes/ContactRoute";
import vehicleRoute from "./routes/VehicleRoute";
import commentRoute from "./routes/CommentRoute";
import productRoute from "./routes/ProductRoute";
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/Express-Practice");

const app = express();

app.use(bodyParser.json())
  .use(contactRoute)
  .use(vehicleRoute)
  .use(commentRoute)
  .use(productRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
