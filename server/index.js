import express from "express";
import CommentsRoutes from "./routes/CommentsRoutes";
import comments from "./comments";
import ProductsRoutes from "./routes/ProductsRoutes";
import products from "./products";
import VehiclesRoutes from "./routes/VehiclesRoutes";
import vehicles from "./vehicles";
import ContactsRoutes from "./routes/ContactsRoutes";
import contacts from "./contacts";
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use(CommentsRoutes);
app.use(ProductsRoutes);
app.use(VehiclesRoutes);
app.use(ContactsRoutes);

const port = process.env.PORT || 3001;

// app.listen(port, (err) => {
//   if (err) {
//     return console.log("error", err);
//   }
// })

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
