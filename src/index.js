/*  eslint-disable no-unused-vars*/
import express from "express";
import bodyParser from "body-parser";
import comments from "./localapi/comments";
import contacts from "./localapi/contacts";
import products from "./localapi/products";
import vehicle from "./localapi/vehicles";


const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.get("/comments", (request, response) => {
  console.log("commments was received");
  return response.json(comments);
});

app.get("/contacts", (request, response) => {
  console.log("contacts was requested");
  return response.json(contacts);
});
