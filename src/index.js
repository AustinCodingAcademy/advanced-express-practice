import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json()); //tell express to use the tool body-parser

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.get("/contacts", (request, response) => {
  return response.json(contacts);
});

app.get("/contacts/:id", (request, response) => {
  const getAContact = contacts.find(contact => {
    return String(contact.id) === request.params.id;
  });
  return response.json(getAContact);
});

app.post("/contacts", (request, response) => {
  contacts.push(request.body);
  return response.json(contacts);
});

app.get("/vehicles", (request, response) => {
  return response.json(vehicles);
});

app.get("/vehicles/:id", (request, response) => {
  const getAVehicle = vehicles.find(vehicle => {
    return String(vehicle.id) === request.params.id;
  });
  return response.json(getAVehicle);
});

app.post("/vehicles", (request, response) => {
  vehicles.push(request.body);
  return response.json(vehicles);
});

app.get("/comments", (request, response) => {
  return response.json(comments);
});

app.post("/comments", (request, response) => {
  comments.push(request.body);
  return response.json(comments);
});

app.get("/comments/:id", (request, response) => {
  const getAComment = comments.find(comment => {
    return String(comment.id) === request.params.id;
  });
  return response.json(getAComment);
});

app.get("/products", (request, response) => {
  return response.json(products);
});

app.get("/products/:id", (request, response) => {
  const getAProduct = products.find(product => {
    return String(product.id) === request.params.id;
  });
  return response.json(getAProduct);
});

app.post("/products", (request, response) => {
  products.push(request.body);
  return response.json(products);
});
