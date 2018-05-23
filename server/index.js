const express = require("express");
const app = express();
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://kkannen:expresspractice@ds231720.mlab.com:31720/express-practice");

app.use(bodyParser.json());
app.use(require("./routes/contactRoutes"));
app.use(require("./routes/commentRoutes"));
app.use(require("./routes/productRoutes"));
app.use(require("./routes/vehicleRoutes"));

app.listen(3001, (err) => {
if (err) {console.log('Error', err);}
console.log('server running');
});