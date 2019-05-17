let express = require("express");
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://aaron:testing123@cluster0-hlfen.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true});

let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

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
