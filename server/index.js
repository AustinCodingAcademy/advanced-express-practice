import express from "express";
import bodyParser from 'body-parser';
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";


const app = express();
app.use(bodyParser.json());

app.get('/contacts', (request, response, next) => {
  return response.json(contacts);
});

app.get('/vehicles', (request, response, next) => {
  return response.json(vehicles);
});

app.get('/comments', (request, response, next) => {
  return response.json(comments);
});

app.get('/products', (request, response, next) => {
  return response.json(products);
});
//routes to get one thing
app.get('/contacts/:id', (request, response, next) => {
  const contactId = request.params.id;
  response.json(contacts[contactId]);
});

app.get('/vehicles/:id', (request, response, next) => {
  const vehicleId = request.params.id;
  response.json(vehicles[vehicleId]);
});

app.get('/comments/:id', (request, response, next) => {
  const commentId = request.params.id;
  response.json(comments[commentId]);
});

app.get('/products/:id', (request, response, next) => {
  const productId = request.params.id;
  response.json(products[productId]);
});

app.post('/contacts', (request, response, next) => {
  contacts.push(request.body);
  response.json(contacts);
});

app.post('/vehicles', (request, response, next) => {
  vehicles.push(request.body);
  response.json(vehicles);
});

app.post('/comments', (request, response, next) => {
  vehicles.push(request.body);
  response.json(comments);
});

app.post('/products', (request, response, next) => {
  vehicles.push(request.body);
  response.json(products);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
