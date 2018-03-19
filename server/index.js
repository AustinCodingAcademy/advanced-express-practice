import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import express from "express";
import bodyParser from "body-parser";
import ContactsRoutes from "./routes/ContactsRoutes"
import CommentsRoutes from "./routes/CommentsRoutes"
import ProductsRoutes from "./routes/ProductsRoutes"
import VehiclesRoutes from "./routes/VehiclesRoutes"

const app = express();
app.use(bodyParser.json());
app.use(ContactsRoutes);
app.use(CommentsRoutes);
app.use(ProductsRoutes);
app.use(VehiclesRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

//Get arrays

//Get single element

//Post element

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});
