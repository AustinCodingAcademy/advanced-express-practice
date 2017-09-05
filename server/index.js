import express from "express";
import bodyParser from "body-parser";
import contactsRoutes from "./routes/ContactsRoutes";
import commentsRoutes from "./routes/CommentsRoutes";
import productsRoutes from "./routes/ProductsRoutes";
import vehiclesRoutes from "./routes/VehiclesRoutes";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/advanced-express-practice");
// test = name of database, not port

const app = express();

app.use(bodyParser.json());
app.use(contactsRoutes);
app.use(vehiclesRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
