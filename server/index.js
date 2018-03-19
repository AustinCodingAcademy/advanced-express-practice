import express from "express";

import commentRouter from "./routes/commentRoutes";
import contactRouter from "./routes/contactRoutes";
import productRouter from "./routes/productRoutes";
import vehicleRouter from "./routes/vehicleRoutes";

import bodyParser from "body-parser";

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
