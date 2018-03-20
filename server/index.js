import express from "express";
import mongoose from "mongoose";
import commentRouter from "./routes/commentRoutes";
import contactRouter from "./routes/contactRoutes";
import productRouter from "./routes/productRoutes";
import vehicleRouter from "./routes/vehicleRoutes";
import bodyParser from "body-parser";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://cnoteATX:St4rryplough@ds261678.mlab.com:61678/conor-aca');

const app = express();

app.use(bodyParser.json());

app.use(commentRouter);
app.use(productRouter);
app.use(vehicleRouter);
app.use(contactRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
