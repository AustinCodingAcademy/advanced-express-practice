import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ContactsRouter from "./routes/ContactsRouter";
import CommentsRouter from "./routes/CommentsRouter";
import VehiclesRouter from "./routes/VehiclesRouter";
import ProductsRouter from "./routes/ProductsRouter";

// create DB connection

mongoose.connect("mongodb://localhost/advanced-express-practice");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

const app = express();

app.use(bodyParser.json());
app.use(ContactsRouter);
app.use(CommentsRouter);
app.use(VehiclesRouter);
app.use(ProductsRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
