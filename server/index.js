const express = require("express");
const bodyParser = require("body-parser");

const CommentRouter = require("./routes/CommentRoutes");
const ContactRouter = require("./routes/ContactRotues");
const VehicleRouter = require("./routes/VehicleRoutes");
const ProductRouter = require("./routes/ProductRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/comments", CommentRouter);
app.use("/contacts", ContactRouter);
app.use("/vehicles", VehicleRouter);
app.use("/products", ProductRouter);

app.listen(3001, () =>
  console.log("Server listening at http://localhost:3001")
);
