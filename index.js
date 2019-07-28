let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});

//*****Comments******/

app.get("/comments", function(req, res, next) {
  return res.json(comments);
});
app.get("/comments/:id", function(req, res) {
  let commentsID = comments.find(p => p._id == req.params.id);
  res.json(commentsID);
});

app.post("/comments", (req, res) => {
  let newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});
//*****Contacts********/
app.get("/contacts", function(req, res, next) {
  return res.json(contacts);
});

app.get("/contacts/:id", function(req, res) {
  let contactsID = contacts.find(p => p._id == req.params.id);
  res.json(contactsID);
});
app.post("/contacts", function(req, res) {
  contacts.push(req.body);
  console.log(req);
});

//*****Vehicles********/
app.get("/vehicles", function(req, res, next) {
  return res.json(vehicles);
});
app.get("/vehicles/:id", function(req, res) {
  let vehicleID = vehicles.find(p => p._id == req.params.id);
  res.json(vehicleID);
});
app.post("/vehicles", function(req, res) {
  let vehicle = req.body;
  vehicles.push(vehicle);
});
//*****Products********/
app.get("/products", function(req, res, next) {
  return res.json(products);
});

app.get("/products/:id", function(req, res) {
  let productsID = products.find(p => p._id == req.params.id);
  res.json(productsID);
});
app.post("/products", (req, res) => {
  let newProduct = req.body;
  products.push(newProduct);
  res.json(newProduct);
});
