import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// get all things
app.get("/contacts", (request, response)=> {
  return response.json(contacts);
});
app.get("/vehicles", (request, response)=> {
  return response.json(vehicles);
});
app.get("/comments", (request, response)=> {
  return response.json(comments);
});

app.get("/products", (request, response)=> {
  return response.json(products);
});

//  get one thing
app.get("/vehicles/:id", (request, response)=> {
  return response.json(vehicles.find(vehicle => vehicle._id == request.params.id));
});

app.get("/comments/:id", (request, response)=> {
  return response.json(comments.find(comment => comment._id == request.params.id));
});

app.get("/products/:id", (request, response)=> {
  return response.json(products.find(product => product._id == request.params.id));
});

app.get("/contacts/:id", (request, response)=> {
  return response.json(contacts.find(contact => contact._id == request.params.id));
});

// creat one thing
app.post("/vehicles", (request, response)=> {
  return response.json(vehicles.push(request.body));
});

app.post("/comments", (request, response)=> {
  return response.json(comments.push(request.body));
});

app.post("/products", (request, response)=> {
  response.json(products.push(request.body));
});

app.post("/contacts", (request, response)=> {
  response.json(contacts.push(request.body));
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
