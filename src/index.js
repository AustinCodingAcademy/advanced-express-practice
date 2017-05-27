import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

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

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
