import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// GET REQUESTS FOR BASE ROUTES

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

// GET REQUESTS FOR SPECIFIC ITEM ROUTES

app.get("/contacts/:id", (request, response) => {
  const foundContact = contacts.find((contact) => {
    return String(contact.id) === request.params.id;
  });
  return response.json(foundContact || null);
});

app.get("/vehicles/:id", (request, response) => {
  const foundVehicle = vehicles.find((vehicle) => {
    return String(vehicle.id) === request.params.id;
  });
  return response.json(foundVehicle || null);
});

app.get("/comments/:id", (request, response) => {
  const foundComment = comments.find((comment) => {
    return String(comment.id) === request.params.id;
  });
  return response.json(foundComment || null);
});

app.get("/products/:id", (request, response) => {
  const foundProduct = products.find((product) => {
    return String(product.id) === request.params.id;
  });
  return response.json(foundProduct || null);
});

// POST REQUESTS FOR NEW ITEMS



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
