import express from "express";
import bodyParser from "body-parser";

import commentRoutes from "./routes/CommentRoutes";
import contactRoutes from "./routes/ContactRoutes";
import productRoutes from "./routes/ProductRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";


const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  console.log(`Listening on port:${port}`);
  if (err) {
    return console.log("Error", err);
  }
});

app.use(commentRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);
