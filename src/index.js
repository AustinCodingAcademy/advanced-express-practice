import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ContactRoute from "./Routes/ContactRoutes";
import CommentRoute from "./Routes/CommentRoutes";
import VehicleRoute from "./Routes/VehicleRoutes";
import ProductRoute from "./Routes/ProductRoutes";

const app = express();
app.use(bodyParser.json());
app.use(ContactRoute);
app.use(CommentRoute);
app.use(VehicleRoute);
app.use(ProductRoute);

const port = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost/contacts");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("MongoDB connected!!");
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.get("/", (req, res) => {
  return res.json({
    welcome: "willkommen"
  });
});

app.get("/falseRoute", (req, res, next) => {
  const error = new Error("Falsch!");
  return next(error);
});

// eslint-disable-next-line
app.use((err, req, res, next) => {
  return res.status(500).json({message: err.message});
});

// app.get("/products", (req, res) => {
//   return res.json(products);
// });
//
// app.get("/products/:id", (req, res) => {
//   const targetedProduct = products.find((product) => {
//     return String(product._id) === req.params.id;
//   });
//   return res.json(targetedProduct);
// });
//
// app.post("/products", (req, res) => {
//   products.push(req.body);
//   return res.json(products);
// });
