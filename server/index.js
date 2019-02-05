let express = require("express");



const bodyParser = require("body-parser");
const ContactRoutes = require("./routes/ContactRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");
const CommentRoutes = require("./routes/CommentRoutes");
const ProductRoutes = require("./routes/ProductRoutes");



const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);



app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
