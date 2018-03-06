import express from "express";
import bodyParser from "body-parser";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";

const app = express();
app.use(bodyParser.json());

// get routes
app.get('/comments', (req, res) => {
  return res.json(comments);
});

app.get('/products', (req, res) => {
  return res.json(products);
});

app.get('/vehicles', (req, res) => {
  return res.json(vehicles);
});

app.get('/contacts', (req, res) => {
  return res.json(contacts);
});

// single item get routes
app.get('/comments/:id', (req, res) => {
  let comment = comments.find((comm) => {
    return comm._id == req.params.id;
  })
  return comment ? res.json(comment) : res.send('comm??');
});

app.get('/products/:id', (req, res) => {
  let product = products.find((prod) => {
    return prod._id == req.params.id;
  })
  return product ? res.json(product) : res.send('prod??');
});

app.get('/contacts/:id', (req, res) => {
  let contact = contacts.find((cont) => {
    return cont._id == req.params.id;
  })
  return contact ? res.json(contact) : res.send('cont??');
});

app.get('/vehicles/:id', (req, res) => {
  let vehicle = vehicles.find((veh) => {
    return veh._id == req.params.id;
  })
  return vehicle ? res.json(vehicle) : res.send('veh??');
});

// post routes
app.post('/comments', (req, res) => {
  products.push(req.body);
  res.json(comments);
});

app.post('/products', (req, res) => {
  products.push(req.body);
  res.json(products);
});

app.post('/contacts', (req, res) => {
  products.push(req.body);
  res.json(contacts);
});

app.post('/vehicles', (req, res) => {
  products.push(req.body);
  res.json(vehicles);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
