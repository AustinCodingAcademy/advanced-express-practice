let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

// COMMENTS
app.get('/comments', (req, res) => {
  res.json(comments)
})

app.get('/comments/:commentId', (req,res) => {
 let id = comments.filter(i => i._id == req.params.commentId);
  res.json(id)
})

app.post('/comments', (req, res)=> {
  let newComment = req.body;
  comments.push(newComment)
  res.json(newComment)
})


// PRODUCTS
app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:productId', (req,res) => {
  let id = products.filter(i => i._id == req.params.productId);
   res.json(id)
 })

 app.post('/products', (req, res)=> {
  let newProduct = req.body;
  products.push(newProduct)
  res.json(newProduct)
})


// VEHICLES
app.get('/vehicles', (req, res) => {
  res.json(vehicles)
})

app.get('/vehicles/:vehicleId', (req,res) => {
  let id = vehicles.filter(i => i._id == req.params.vehicleId);
   res.json(id)
 })

 app.post('/vehicles', (req, res)=> {
  let newVehicle = req.body;
  vehicles.push(newVehicle)
  res.json(newVehicle)
})


// CONTACTS
app.get('/contacts', (req, res) => {
  res.json(contacts)
})

app.get('/contacts/:contactsId', (req,res) => {
  let id = contacts.filter(i => i._id == req.params.contactsId);
   res.json(id)
 })

 app.post('/contacts', (req, res)=> {
  let newContacts = req.body;
  contacts.push(newContacts)
  res.json(newContacts)
})


app.listen(thePort, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port",thePort);
 });