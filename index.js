let express = require("express");
let vehicleRoutes = require("./routes/vehicles");
let contactsRoutes  = require("./routes/contacts");
let commentsRoutes = require("./routes/comments");
let productsRoutes = require("./routes/products");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kelly-nguyen-1:YOURPASSWORDHERE@aca-practice-ss4lm.mongodb.net/advanced-express-practice?retryWrites=true&w=majority', {useNewUrlParser: true},(err)=>{
   console.log("the error is",err)
   //start web server
});


const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.use(vehicleRoutes);
app.use(contactsRoutes);
app.use(commentsRoutes);
app.use(productsRoutes);


  app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});

// let express = require("express");
// let comments = require("./comments");
// let products = require("./products");
// let vehicles = require("./vehicles");
// let contacts  = require("./contacts");

// const bodyParser = require("body-parser");
// const app = express();
// app.use(bodyParser.json());
// app.use(express.static("public"));

// const thePort = 3001;

// app.listen(thePort, (err) => {
//  if (err) {
//    return console.log("Error", err);
//  }
//  console.log("Web server is now listening for messages on port",thePort);
// });

// //Create express routes to get all things

// //contacts
// app.get("/contacts", function(req, res, next) {
//   return res.json(contacts);
// });

// //vehicles
// app.get("/vehicles", function(req, res, next) {
//   return res.json(vehicles);
// });

// //comments
// app.get("/comments", function(req, res, next) {
//   return res.json(comments);
// });

// //products
// app.get("/products", function(req, res, next) {
//   return res.json(products);
// });

// //Create express routes to get one thing

// //contacts
// app.get("/contacts/:id", function(req, res, next) {
//   let contactsId = contacts.find(p => p._id == req.params.id);
//   return res.json(contactsId)
// });

// //vehicles
// app.get("/vehicles/:id", function(req, res, next) {
//   let vehiclesId = vehicles.find(p => p._id == req.params.id);
//   return res.json(vehiclesId)
// });

// //comments
// app.get("/comments/:id", function(req, res, next) {
//   let commentsId = comments.find(p => p._id == req.params.id);
//   return res.json(commentsId)
// });

// //products
// app.get("/products/:id", function(req, res, next) {
//   let productsId = products.find(p => p._id == req.params.id);
//   return res.json(productsId)
// });

// //Create express routes to create one thing

// //contacts
// app.post("/contacts", function(req, res, next) {
//   contacts.push(req.body);
//   console.log(req);
// });

// //vehicles
// app.post("/vehicles", function(req, res, next) {
//   vehicles.push(req.body);
//   console.log(req);
// });

// //comments
// app.post("/comments", function(req, res, next) {
//   comments.push(req.body);
//   console.log(req);
// });

// //products
// app.post("/products", function(req, res, next) {
//   products.push(req.body);
//   console.log(req);
// });