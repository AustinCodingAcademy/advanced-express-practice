import express from "express";
import bodyParser from "body-parser";

import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  console.log(`Listening on port:${port}`);
  if (err) {
    return console.log("Error", err);
  }
});



// Create express routes to get all things

// Add .get() routes for /contacts, /vehicles, /comments, /products
// response.json() the appropriate array

app.get('/contacts', (request,response,next) => {
  response.json(contacts);
});

app.get('/vehicles', (request,response,next) => {
  response.json(vehicles);
});

app.get('/comments', (request,response,next) => {
  response.json(comments);
});

app.get('/products', (request,response,next) => {
  response.json(products);
});



// Create express routes to get one thing

// Add .get() route for /contacts/:id
// add a path variable for id
// use the params.id to .find() the item from the appropriate array
// response.json() the item found

app.get('/contacts/:id', (request,response,next) => {
  let contact = contacts.find(function(item){
    return (item._id == request.params.id);
  });
  console.log(contact);
  response.json(contact);
});


// Add .get() route for /vehicles/:id
app.get('/vehicles/:id', (request,response,next) => {
  let vehicle = vehicles.find(function(item){
    return (item._id == request.params.id);
  });
  response.json(vehicle);
});

// Add .get() route for /comments/:id
app.get('/comments/:id', (request,response,next) => {
  let comment = comments.find(function(item){
    return (item._id == request.params.id);
  });
  response.json(comment);
});

// * Add .get() route for /products/:id
app.get('/products/:id', (request,response,next) => {
  let product = products.find(function(item){
    return (item._id == request.params.id);
  });
  response.json(product);
});



// Add .get() route for /contacts/:id
// add a path variable for id
// use the params.id to .find() the item from the appropriate array
// response.json() the item found

app.get('/contacts/:id', (request,response,next) => {
  let contact = contacts.find(function(item){
    return (item._id == request.params.id);
  });
  response.json(contact);
});

// Add .get() route for /vehicles/:id
app.get('/vehicles/:id', (request,response,next) => {
  let vehicle = vehicles.find(function(item){
    return (item._id == request.params.id);
  });
  response.json(vehicle);
});

// * Add .get() route for /comments/:id
app.get('/comments/:id', (request,response,next) => {
  let comment = comments.find(function(item){
    return (item._id == request.params.id);
  });
  response.json(comment);
});

// * Add .get() route for /products/:id
app.get('/products/:id', (request,response,next) => {
  let product = products.find(function(item){
    return (item._id == request.params.id);
  });
  response.json(product);
});




// Add .post() route for /contacts
// Add the information from the body to the appropriate array
app.post('/contacts', (request,response,next) => {
  contacts.push(request.body);
  response.send("contact saved");
});


// Add .post() route for /vehicles
// Add the information from the body to the appropriate array
app.post('/vehicles', (request,response,next) => {
  vehicles.push(request.body);
  response.send("vehicle saved");
});

// Add .post() route for /comments
// Add the information from the body to the appropriate array
app.post('/comments', (request,response,next) => {
  comments.push(request.body);
  response.send("comment saved");
});

// Add .post() route for /products
// Add the information from the body to the appropriate array
app.post('/products', (request,response,next) => {
  products.push(request.body);
  response.send("product saved");
});
