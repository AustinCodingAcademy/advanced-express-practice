import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import CommentsRouter from "./routers/CommentsRouter";
import ContactsRouter from "./routers/ContactsRouter";
import ProductsRouter from "./routers/ProductsRouter";
// import VehicleRouter from "./routers/VehicleRouter";

// this promise must be global so mongoose can use it with DB and in here
mongoose.Promise = global.Promise;
// Mongoose and DB connection
// the localhost = PORT 27017 as the default because that's what mongoose is set to
mongoose.connect("mongodb://localhost/ExpressPractice1");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongoose and db are connected"
);
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(CommentsRouter);
app.use(ContactsRouter);
app.use(ProductsRouter);
// app.use(VehicleRouter);

// error handler middleware
app.use((err, request, response) => {
  console.log("error middleware is executed");
  // this must have a status to return in the response correctly
  return response.status(500).json({
    message: err.message
  });
});


app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
