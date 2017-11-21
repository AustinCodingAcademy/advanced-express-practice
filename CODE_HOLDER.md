import express from "express";
import bodyParser from "body-parser";

import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contactRoutes from "./routes/ContactRoutes";



const WebServer = express();
WebServer.use(bodyParser.json());

// --------
WebServer.get('/comments', (request,response) => {
  comments.push(request.body)
  response.json(comments)
  response.send("comments added")
});

WebServer.get('/comments/:id', (request,response) => {
  response.json({commentId: request.params.id})
});

WebServer.get('/comments/:id', (request,response) => {
  let commentId =  request.params.id;
  //use this id to get from a database
  contacts.findById(commentId)
});

WebServer.post('/comments', (request,response) => {
  response.json(request.body)
});

WebServer.post('/comments', (request,response) => {
  comments.push(request.body)
  response.json(comments)
  response.send("comment saved")
});
// --------

WebServer.use(contactRoutes);

// --------
WebServer.get('/vehicles', (request,response) => {
  vehicles.push(request.body)
  response.json(vehicles)
  response.send("vehicles added")
});

WebServer.get('/vehicles/:id', (request,response) => {
  response.json({vehicleId: request.params.id})
});

WebServer.get('/vehicles/:id', (request,response) => {
  let vehicleId =  request.params.id;
  //use this id to get from a database
  vehicles.findById(vehicleId)
});

WebServer.post('/vehicles', (request,response) => {
  response.json(request.body)
});

WebServer.post('/vehicles', (request,response) => {
  vehicles.push(request.body)
  response.json(vehicles)
  response.send("vehicle saved")
});
// --------

// --------
WebServer.get('/products', (request,response) => {
  products.push(request.body)
  response.json(products)
  response.send("products added")
});

WebServer.get('/products/:id', (request,response) => {
  response.json({productId: request.params.id})
});

WebServer.get('/products/:id', (request,response) => {
  let productId =  request.params.id;
  //use this id to get from a database
  products.findById(productId)
});

WebServer.post('/products', (request,response) => {
  response.json(request.body)
});

WebServer.post('/products', (request,response) => {
  products.push(request.body)
  response.json(products)
  response.send("product saved")
});
// --------


WebServer.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});

const port = process.env.PORT || 3001;
WebServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});