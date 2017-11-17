import express from "express";
import bodyParser from "body-parser";

import commentRoutes from "./routes/CommentRoutes";
 // myWebServer.use(commentRoutes);
import contactRoutes from "./routes/ContactRoutes";
 // myWebServer.use(contactRoutes);
import productRoutes from "./routes/ProductRoutes";
 // myWebServer.use(productRoutes);
import vehicleRoutes from "./routes/VehicleRoutes";
 // myWebServer.use(vehicleRoutes);

// const app = express();
const myWebServer = express();
myWebServer.use(bodyParser.json());
myWebServer.use(commentRoutes);
myWebServer.use(contactRoutes);
myWebServer.use(productRoutes);
myWebServer.use(vehicleRoutes);

/*
// Create express routes to get all things

myWebServer.get("/contacts", (request, response) => {
  response.json(contacts);
});

myWebServer.get("/vehicles", (request, response) => {
  response.json(vehicles);
});

myWebServer.get("/comments", (request, response) => {
  response.json(comments);
});

myWebServer.get("/products", (request, response) => {
  response.json(products);
});

// Create express routes to get one thing

myWebServer.get("/contacts/:id", (request,response) => {
  const contactId = request.params.id;
 // use this id to get from a database
  contacts.findById(contactId);
});

myWebServer.get("/vehicles/:id", (request,response) => {
  const vehicleId = request.params.id;
 // use this id to get from a database
  vehicles.findById(vehicleId);
});

myWebServer.get("/comments/:id", (request,response) => {
  const commentId = request.params.id;
 // use this id to get from a database
  comments.findById(commentId);
});

myWebServer.get("/products/:id", (request,response) => {
  const productId = request.params.id;
  // use this id to get from a database
  products.findById(productId);
});

// OLD WAY - routes to get one thing
/*
myWebServer.get("/contacts/:id", (request, response) => {
  // const contactId = request.params.id.toString();
  const contactId = request.params.id;
  const thisContact = contacts.find(con => con.id == contactId) || {};
  response.json(thisContact);
});

myWebServer.get("/vehicles/:id", (request, response) => {
  const vehicleId = request.params.id;
  const thisVehicle = vehicles.find(veh => veh.id == vehicleId) || {};
  response.json(thisVehicle);
});

myWebServer.get("/comments/:id", (request, response) => {
  const commentId = request.params.id;
  const thisComment = comments.find(comm => comm.id == commentId) || {};
  response.json(thisComment);
});

myWebServer.get("/products/:id", (request, response) => {
  const productId = request.params.id;
  const thisProduct = products.find(prod => prod.id == productId) || {};
  response.json(thisProduct);
});
*/
/*
// Create express routes to create one thing

myWebServer.post("/contacts", (request, response) => {
  contacts.push(request.body);
  response.json(contacts);
});

myWebServer.post("/vehicles", (request, response) => {
  vehicles.push(request.body);
  response.json(vehicles);
});

myWebServer.post("/comments", (request, response) => {
  comments.push(request.body);
  response.json(comments);
});

myWebServer.post("/products", (request, response) => {
  products.push(request.body);
  response.json(products);
});
*/

const port = process.env.PORT || 3001;
myWebServer.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

// Alternately
/*
app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});
*/
