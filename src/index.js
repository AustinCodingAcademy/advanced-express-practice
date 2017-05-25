import express from "express";
import comments from "./comments";
import products from "./products";
import vehicle from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.get("/", (req, res) => {
  return res.json({
    welcome: "willkommen"
  });
});

app.get("/contacts", (req, res) => {
  return res.json(contacts);
});

app.get("/contacts/:id", (request, response) => {
  const targetedContact = contacts.find((contact) => {
    return String(contact._id) === request.params.id;
  });
  // console.log("targetedContact", targetedContact);
  return response.json(targetedContact || null);
});

app.post("/contacts", (req, res) => {
  contacts.push(req.body);
  res.json(contacts);
});

app.get("/comments", (req, res) => {
  return res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  const targetedComment = comments.find((comment) => {
    return String(comment._id) === req.params.id;
  });
  return res.json(targetedComment);
});

app.post("/comments", (req, res) => {
  comments.push(req.body);
  return res.json(comments);
});

app.get("/vehicles", (req, res) => {
  return res.json(vehicle);
});

app.get("/vehicles/:id", (req, res) => {
  const targetedVehicle = vehicle.find((v) => {
    return String(v._id) === req.params.id;
  });
  return res.json(targetedVehicle);
});

app.post("/vehicles", (req, res) => {
  vehicle.push(req.body);
  res.json(vehicle);
});

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products/:id", (req, res) => {
  const targetedProduct = products.find((product) => {
    return String(product._id) === req.params.id;
  });
  return res.json(targetedProduct);
});

app.post("/products", (req, res) => {
  products.push(req.body);
  return res.json(products);
});
