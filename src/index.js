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
