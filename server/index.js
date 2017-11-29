import express from "express";
import comments from "./comments";
import vehicleRoutes from "./routes/VehicleRoutes";
import productRoutes from "./routes/ProductRoutes";
import commentRoutes from "./routes/CommentRoutes";
import contactRoutes from "./routes/ContactRoutes";
import bodyParser from "body-parser";
      
const app = express();
app.use(bodyParser.json());
      
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});		 

app.use(contactRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);