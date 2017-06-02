/*  eslint-disable no-unused-vars*/
import express from "express";
import bodyParser from "body-parser";
import comments from "./localapi/comments";
import contacts from "./localapi/contacts";
import products from "./localapi/products";
import vehicles from "./localapi/vehicles";


const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

// GET INDIVIDUALS
app.get("/comments/:id", (request, response) => {
  const query = request.params;
  console.log("comment ", query.id, " has been requested");
  const match = comments.find((comment) => {
    return String(comment._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("nothing in ", query.id);
});

app.get("/contacts/:id", (request, response) => {
  const query = request.params;
  console.log("contact ", query.id, " has been requested");
  const match = contacts.find((person) => {
    return String(person._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("nothing in ", query.id);
});

app.get("/products/:id", (request, response) => {
  const query = request.params;
  console.log("product ", query.id, " was requested");
  const match = products.find((prod) => {
    return String(prod._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("no products with id ", query.id);
});

app.get("/vehicles/:id", (request, response) => {
  const query = request.params;
  console.log("vehicle ", query.id, " was requested");
  const match = vehicles.find((car) => {
    return String(car._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("no vehicles match the request ", query.id);
});

// GETS
app.get("/comments", (request, response) => {
  console.log("commments was received");
  return response.json(comments);
});

app.get("/contacts", (request, response) => {
  console.log("contacts was requested");
  return response.json(contacts);
});

app.get("/products", (request, response) => {
  console.log("products was requested");
  return response.json(products);
});

app.get("/vehicles", (request, response) => {
  console.log("vehicles was requested");
  return response.json(vehicles);
});




// POSTS
app.post("/comments", (request, response) => {
  console.log("comments was posted to");
  const newComment = {_id: comments.length + 1, ...request.body};
  comments.push(newComment);
  return response.json(newComment);
});

app.post("/contacts", (request, response) => {
  console.log("contacts were posted to");
  const newContact = {_id: contacts.length + 1, ...request.body};
  contacts.push(newContact);
  return response.json(newContact);
});

app.post("/products", (request, response) => {
  console.log("new product was added");
  const newProduct = {_id: products.length + 1, ...request.body};
  products.push(newProduct);
  return response.json(newProduct);
});

app.post("/vehicles", (request, response) => {
  console.log("vehicles have a new vehicle");
  const newVehicle = {_id: vehicles.length + 1, ...request.body};
  vehicles.push(newVehicle);
  return response.json(newVehicle);
});
