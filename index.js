let express = require("express");

const app = express();
const thePort = 3001;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public"));

const contactRoutes = require('./Routes/ContactRoutes');
const commentRoutes = require('./Routes/CommentsRoutes');
const productRoutes = require('./Routes/ProductsRoutes');
const vehicleRoutes = require('./Routes/VehiclesRoutes');

app.use(contactRoutes, commentRoutes, productRoutes, vehicleRoutes);

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port", thePort);
});
