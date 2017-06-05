import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Mongoose Databse Connection Added

mongoose.connect("mongodb://localhost/advanced-express-practice");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});


const app = express();
app.use(bodyParser.json());


// * Add .get() routes for /contacts, /vehicles, /comments, /products
// * response.json() the appropriate array

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


// ### Create express routes to get one thing
// * Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
// * add a path variable for id
// * use the params.id to .find() the item from the appropriate array
// * response.json() the item found

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

// ### Create express routes to create one thing
// * Add .post() routes for /contacts, /vehicles, /comments, /products
// * Add the information from the body to the appropriate array



app.post("/contacts", (request, response) => {
  const newContact = {
    ...request.body
  };
  contacts.push(newContact);
  return response.json(newContact);
});

app.post("/vehicles", (request, response) => {
  const newVehicle = {
    ...request.body
  };
  vehicles.push(newVehicle);
  return response.json(newVehicle);
});

app.post("/comments", (request, response) => {
  const newComment = {
    ...request.body
  };
  comments.push(newComment);
  return response.json(newComment);
});

app.post("/products", (request, response) => {
  const newProduct = {
    ...request.body
  };
  products.push(newProduct);
  return response.json(newProduct);
});



const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
