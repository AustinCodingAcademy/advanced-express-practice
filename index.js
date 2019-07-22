let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

// COMMENTS
// GET
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.get('/comments/:commentId', (req, res) => {
  let comment = comments.find(x => x._id == req.params.commentId);
  res.json(comment);
});
app.post('/contacts', (req, res) => {
  let newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// VEHICLES
app.get('/vehicles', (req, res) => {
  res.json(vehicles)
});
app.get('/vehicles/:vehicleId', (req, res) => {
  let vehicle = vehicles.find(x => x._id == req.params.vehicleId);
  res.json(vehicle);
});
app.post('/vehicles', (req, res) => {
  let newVehicle = req.body;
  vehicles.push(newVehicle);
  res.json(newVehicle);
});

// CONTACTS
app.get('/contacts', (req, res) => {
  res.json(contacts)
});
app.get('/contacts/:contactId', (req, res) => {
  let contact = contacts.find(x => x._id == req.params.contactId);
  res.json(contact);
});
app.post('/contacts', (req, res) => {
  let newContact = req.body;
  contacts.push(newContact);
  res.json(newContact);
});

// PRODUCTS
app.get('/products', (req, res) => {
  res.json(products);
});
app.get('/products/:productsId', (req, res) => {
  let product = products.find(x => x._id == req.params.productsId);
  res.json(product);
});
app.post('/products', (req, res) => {
  let newProduct = req.body;
  products.push(newProduct);
  res.json(newProduct);
});

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
