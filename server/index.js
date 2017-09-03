import express from "express";
import CommentsRoutes from "./routes/CommentsRoutes";
import ProductsRoutes from "./routes/ProductsRoutes";
import VehiclesRoutes from "./routes/VehiclesRoutes";
import ContactsRoutes from "./routes/ContactsRoutes";
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");

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
