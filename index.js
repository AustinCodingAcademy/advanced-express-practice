let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/comments", (req, res) => {
  res.json(comments)
});

app.get("/comments/:idNum", (req, res) => {
  let comment = comments.filter(p=>p._id == req.params.idNum);
  res.json(comment)
});

app.post('/comments', (req,res) => {
  let newComment = req.body;
  comments.push(newComment);
  res.json(newComment)
});

app.get("/products", (req, res) => {
  res.json(products)
});

app.get("/products/:idNum", (req, res) => {
  let product = products.filter(p=>p._id == req.params.idNum);
  res.json(product)
});

app.post('/products', (req,res) => {
  let newProduct = req.body;
  products.push(newProduct);
  res.json(newProduct)
});

app.get("/vehicles", (req, res) => {
  res.json(vehicles)
});

app.get("/vehicles/:idNum", (req, res) => {
  let vehicle = vehicles.filter(p=>p._id == req.params.idNum);
  res.json(vehicle)
});

app.post('/vehicles', (req,res) => {
  let newVehicle = req.body;
  vehicles.push(newVehicle);
  res.json(newVehicle)
});

app.get("/contacts", (req, res) => {
  res.json(contacts)
});

app.get("/contacts/:idNum", (req, res) => {
  let contact = contacts.filter(p=>p._id == req.params.idNum);
  res.json(contact)
});

app.post('/contacts', (req,res) => {
  let newContact = req.body;
  contacts.push(newContact);
  res.json(newContact)
});

app.listen(3001, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",3001);
});
