import express from "express";
import bodyParser from "body-parser";

import commentRoutes from "./routes/CommentRoutes";
import contactRoutes from "./routes/ContactRoutes";
import productRoutes from "./routes/ProductRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";

const myWebServer = express();
myWebServer.use(bodyParser.json());
myWebServer.use(commentRoutes);
myWebServer.use(contactRoutes);
myWebServer.use(productRoutes);
myWebServer.use(vehicleRoutes);

const port = process.env.PORT || 3001;
myWebServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
