import express from "express";
import CommentsRoutes from "./routes/CommentsRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import VehiclesRoutes from "./routes/VehicleRoutes";
import ContactRoutes from "./routes/ContactRoutes";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehiclesRoutes);
app.use(ProductRoutes);
app.use(CommentsRoutes);


// –––––server–––––
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
