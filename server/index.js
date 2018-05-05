const express = require("express");
const bodyParser = require("body-parser");

const ContactRoutes = require("./routes/ContactRoutes");
const CommentRoutes = require("./routes/CommentRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");

const app = express();
app.use(bodyParser.json());

app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
