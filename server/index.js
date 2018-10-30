const express = require("express");
const bodyParser = require("body-parser");

const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");

const app = express();

app.use(bodyParser.json());

let commentsIdCount = comments.length;
let contactsIdCount = contacts.length;
let vehiclesIdCount = vehicles.length;
let productsIdCount = products.length;

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/comments/:id", (req, res) => {
  const comment = comments.find((c) => {
    return c._id === Number(req.params.id);
  });
  res.json(comment);
});

app.get("/contacts/:id", (req, res) => {
  const contact = contacts.find((c) => {
    return c._id === Number(req.params.id);
  });
  res.json(contact);
});

app.get("/vehicles/:id", (req, res) => {
  const vehicle = vehicles.find((v) => {
    return v._id === Number(req.params.id);
  });
  res.json(vehicle);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => {
    return p._id === Number(req.params.id);
  });
  res.json(product);
});

app.post("/comments", (req, res) => {
  commentsIdCount++;
  comments.push({ ...req.body, _id: commentsIdCount });
  res.json(comments[comments.length - 1]);
});

app.post("/contacts", (req, res) => {
  contactsIdCount++;
  contacts.push({ ...req.body, _id: contactsIdCount });
  res.json(contacts[contacts.length - 1]);
});

app.post("/vehicles", (req, res) => {
  vehiclesIdCount++;
  vehicles.push({ ...req.body, _id: vehiclesIdCount });
  res.json(vehicles[vehicles.length - 1]);
});

app.post("/products", (req, res) => {
  productsIdCount++;
  products.push({ ...req.body, _id: productsIdCount });
  res.json(products[products.length - 1]);
});

app.listen(3001, () => console.log("Server listening at http://localhost:3001"));
