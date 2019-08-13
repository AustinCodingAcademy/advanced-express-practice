let express = require("express");
let bodyParser = require("body-parser");

let vehicleRoutes = require("./routes/vehicle");
let productRoutes = require("./routes/product");
let contactRoutes = require("./routes/contact");
let commentRoutes = require("./routes/comment");

let app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use(vehicleRoutes);
app.use(productRoutes);
app.use(contactRoutes);
app.use(commentRoutes);

//const thePort = 3001;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/advanced-express-practice', {useeNewUrlParser: true});
const Vehicle = require("./models/VehicleModel.js");
const Product = require("./models/ProductModel.js");
const Comment = require("./models/CommentModel.js");
const Contact = require("./models/ContactModel.js");


