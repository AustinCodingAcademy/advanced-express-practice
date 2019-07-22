let express = require("express");

let vehicleRoutes = require('./routes/vehicles');
let contactRoutes = require('./routes/contacts');
let productRoutes = require('./routes/products');
let commentRoutes = require('./routes/comments');

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(vehicleRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(commentRoutes);

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",3001);
});
