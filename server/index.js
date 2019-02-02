let express = require("express");


const contactRoutes = require("./routes/ContactRoutes");
const bodyParser = require("body-parser");
const vehicleRoutes = require('./routes/VehicleRoutes');
const productRoutes = require('./routes/ProductsRoutes');
const commentRoutes = require('./routes/CommentRoutes');

const app = express();
app.use(bodyParser.json());
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(productRoutes);
app.use(commentRoutes);


app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages", err);
});
