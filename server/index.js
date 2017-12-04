import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import mongoose from "mongoose";


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/test");


const app = express();
app.use(bodyParser.json());

//CONTACTS
app.get('/contacts', (request,response) => {
 response.json(contacts)
});
app.use(ContactRoutes);

app.get('/contacts/:id', (request,response) => {
  function findContacts(contact) {
    return contact._id === request.params.id;
  }
 const contactObject = contacts.find(findContacts);
  response.json(contactObject)
});

app.post('/contacts', (request,response) => {
 contacts.push(request.body)
 response.send("contact saved")
});


//VEHICLES
app.get('/vehicles', (request,response) => {
 response.json(vehicles)
});
app.use(VehicleRoutes);

app.get('/vehicles/:id', (request,response) => {
  function findVehicles(vehicle) {
    return vehicle._id === request.params.id;
  }
 const vehicleObject = vehicle.find(findVehicles);
  response.json(vehicleObject)
});

app.post('/vehicles', (request,response) => {
 vehicles.push(request.body)
 response.send("vehicle saved")
});


//PRODUCTS
app.get('/products', (request,response) => {
 response.json(products)
});
app.use(ProductRoutes);

app.get('/products/:id', (request,response) => {
  function findProducts(product) {
    return product._id === request.params.id;
  }
 const productObject = product.find(findProducts);
  response.json(productObject)
});

app.post('/products', (request,response) => {
 products.push(request.body)
 response.send("product saved")
});


//COMMENTS
app.get('/comments', (request,response) => {
 response.json(comments)
});
app.use(CommenttRoutes);

app.get('/comments/:id', (request,response) => {
  function findComments(comment) {
    return comment._id === request.params.id;
  }
 const commentObject = comment.find(findComments);
  response.json(commentObject)
});

app.post('/comments', (request,response) => {
 comments.push(request.body)
 response.send("comment saved")
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
