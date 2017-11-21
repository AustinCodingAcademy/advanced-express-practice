import express from "express";
import bodyParser from "body-parser";

import commentRoutes from "./routes/CommentRoutes";
import contactRoutes from "./routes/ContactRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import productRoutes from "./routes/ProductRoutes";


const WebServer = express();
WebServer.use(bodyParser.json());



WebServer.use(commentRoutes);
WebServer.use(contactRoutes);
WebServer.use(productRoutes);
WebServer.use(vehicleRoutes);


WebServer.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});

const port = process.env.PORT || 3001;
WebServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});