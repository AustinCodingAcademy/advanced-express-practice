const express = require("express");
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


// Get all things
app.get("/contacts",function (req,res,next) {
  return res.json(contacts);
});

app.get("/vehicles",function (req,res,next) {
  return res.json(vehiclesArr);
});

app.get("/comments",function (req,res,next) {
  return res.json(commentsArr);
});

app.get("/products",function (req,res,next) {
  return res.json(productsArr);
});


// Get one thing - id
app.get("/contacts/:id",function (req,res,next) {
  const contactId = contacts.find(user => user._id == req.params.id);
  return res.json(contactId);
});
  
app.get("/vehicles/:id",function (req,res,next) {
  const vehicleId = vehicles.find(user => user._id == req.params.id);
  return res.json(vehicleId);
});
  
app.get("/comments/:id",function (req,res,next) {
  const commentId = comments.find(user => user._id == req.params.id);
  return res.json(commentId);
});
  
app.get("/products/:id",function (req,res,next) {
  const productId = products.find(user => user._id == req.params.id);
  return res.json(productId);
});


// Create one thing
app.post("/contacts",function (req,res,next) {
  return res.json(contacts.push({}));
});

app.post("/vehicles",function (req,res,next) {
  return res.json(vehicles.push({}));
});

app.post("/comments",function (req,res,next) {
  return res.json(comments.push({}));
});

app.post("/products",function (req,res,next) {
  return res.json(products.push({}));
});


// Listening to port 3001
app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening to port 3001");
});
