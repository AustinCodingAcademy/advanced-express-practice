import express from "express";
import comments from "./comments";
import products from "./products";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";


const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
