const express = require("express");
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");
const bodyParser = require("../node_modules/body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/contacts",(request,response)=>{
  return response.json(contacts);
});

app.get("/contacts/:id", (request, response) => { 
  let getContact = contacts.find(c => {
  return String(c._id) === request.params.id;
  });

  return response.json(getContact);
});

app.post("/contacts", (request, response) => {
  contacts.push(request.body);
  return response.json(contacts);
});

app.get("/vehicles",(request,response)=>{
  return response.json(vehicles);
});

app.get("/vehicles/:id",(request,response)=>{
  let getVehicle = vehicles.find(v => {
    return String(v._id) === request.params.id;
    });
  
  return response.json(getVehicle);
});

app.post("/vehicles", (request, response) => {
  vehicles.push(request.body);
  return response.json(vehicles);
});

app.get("/comments",(request,response)=>{
  return response.json(comments);
});

app.get("/comments/:id",(request,response)=>{
  let getComment = comments.find(c => {
    return String(c._id) === request.params.id;
    });
  
  return response.json(getComment);
});

app.post("/comments", (request, response) => {
  comments.push(request.body);
  return response.json(comments);
});

app.get("/products",(request,response)=>{
  return response.json(products);
});

app.get("/products/:id",(request,response)=>{
  let getProduct = products.find(p => {
    return String(p._id) === request.params.id;
    });
  
  return response.json(getProduct);
});

app.post("/products", (request, response) => {
  products.push(request.body);
  return response.json(products);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
