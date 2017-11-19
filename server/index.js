import express from "express";
import commentRoutes from ".routes/comments";
import productRoutes from ".routes/products";
import vehicleRoutes from ".routes/vehicles";
import contactRoutes from ".routes/contacts";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(commentRoutes);
app.use(productRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});


