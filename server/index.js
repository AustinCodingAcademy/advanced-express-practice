let express = require("express");


const app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());
const ContactRoutes = require ("./routes/ContactRoutes");
const VehicleRoutes = require ("./routes/VehicleRoutes");
const ProductRoutes = require ("./routes/ProductRoutes");
const CommentRoutes = require ("./routes/CommentRoutes");



app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(ProductRoutes);
app.use(CommentRoutes);





app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});