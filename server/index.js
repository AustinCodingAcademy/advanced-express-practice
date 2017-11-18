const express = require("express");
const bodyParser = require("../node_modules/body-parser");
const contactRoutes = require("./routes/ContactRoutes");
const commentRoutes = require("./routes/CommentRoutes");
const productRoutes = require("./routes/ProductRoutes");
const vehicleRoutes = require("./routes/VehicleRoutes");

const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
