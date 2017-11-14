import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

// multiple things

app.get("/contacts", (request, response) => {
  return response.json(contacts);
});

app.get("/vehicles", (request, response) => {
  return response.json(vehicles);
});

app.get("/comments", (request, response) => {
  return response.json(comments);
});

app.get("/products", (request, response) => {
  return response.json(products);
});

// one thing

app.get("/contacts/:id", (request, response) => {
  console.log(`returned ${request}`)
  return response.json(request.params.id);
});

app.get("/vehicles/:id", (request, response) => {
  return response.json(request.params.id);
});

app.get("/comments/:id", (request, response) => {
  return response.json(request.params.id);
});

app.get("/products/:id", (request, response) => {
  return response.json(request.params.id);
});

// post stuff

app.post("/contacts", (request, response) => {
  contacts.push(request.body);
  return response.json(contacts);
});

app.post("/vehicles", (request, response) => {
  vehicles.push(request.body);
  return response.json(vehicles);
});

app.post("/comments", (request, response) => {
  comments.push(request.body);
  return response.json(comments);
});

app.post("/products", (request, response) => {
  products.push(request.body);
  return response.json(products);
});
