import express from "express";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import CommentRoutes from "./routes/CommentRoutes";


const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(ProductRoutes);
app.use(CommentRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
