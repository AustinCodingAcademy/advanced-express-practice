import express from "express";
import bodyParser from "body-parser";

import commentsRoutes from "./routes/CommentsRoutes";
import contactsRoutes from "./routes/ContactsRoutes";
import productsRoutes from "./routes/ProductsRoutes";
import vehiclesRoutes from "./routes/VehiclesRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/advanced-express-practice");


const app = express();
app.use(bodyParser.json());
app.use(commentsRoutes);
app.use(contactsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

const port = process.env.PORT || 3001;

app.get("/", function (request, response) {
  return response.json({hello: "get world"});
});
app.post("/", function (request, response) {
  return response.json({hello: "post world"})
})

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
