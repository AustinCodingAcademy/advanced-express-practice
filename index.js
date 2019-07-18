let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.json("I'm here");
});
app.get("/contacts/:id", function (req, res) {
  let foundContact = contacts.filter(p => p._id == req.params.id);
  res.json(foundContact);
});

app.get("/contacts", function (req, res) {
  res.json(contacts);
});

app.post("/contacts", function (req, res) {
  let contact = req.body;
  contacts.push(contact);
  res.json(contacts)
})

app.get("/vehicles", function (req, res) {
  res.json(vehicles);
});
app.get("/vehicles/:id", function (req, res) {
  let veeID = vehicles.filter(p => p._id == req.params.id)
  res.json(veeID);
});

app.post("/vehicles", function (req, res) {
  let vehicle = req.body;
  vehicles.push(vehicle);
  res.json(vehicles)
})

app.get("/products", function (req, res) {
  res.json(products);
});

app.get("/products/:id"), function (req, res) {
  let product = products.filter(p => p._id == req.params.id)
  res.json(product)
}
app.post("/products", function (req, res) {
  let product = req.body;
  products.push(product);
  res.json(products)
})
app.get("/comments", function (req, res) {
  res.json(comments);
});

app.get("/comments/:id", function (req, res) {
  let comment = comments.find(p => p._id == req.params.id);
  res.json(comment);
})

app.post("/comments", function (req, res) {
  let comment = req.body;
  comments.push(comment);
  res.json(comments)
})
const thePort = 3002;

app.listen(3002, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
