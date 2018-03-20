import express from "express";
import bodyParser from "body-parser";
import CommentRoute from "./routes/CommentRoute";
import ProductRoute from "./routes/ProductRoute";
import VehicleRoute from "./routes/VehicleRoute";
import ContactRoute from "./routes/ContactRoute";
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://stephsingler:Butterfly2825@ds217349.mlab.com:17349/checkpoint2");

const app = express();
app.use(bodyParser.json());
app.use(CommentRoute);
app.use(ProductRoute);
app.use(VehicleRoute);
app.use(ContactRoute);

// app.get('/contacts', (req, res) => {
//   res.json(contacts);
// });
// app.get('/comments', (req, res) => {
//   res.json(comments);
// });
// app.get('/products', (req, res) => {
//   res.json(products);
// });
// app.get('/vehicles', (req, res) => {
//   res.json(vehicles);
// });
// //get one thing
// app.get('/contacts/:contactId', (req, res) => {
//   res.json(comments[req.params.commentId]);
// });
// app.get('/comments/:commentId', (req, res) => {
//   res.json(comments[req.params.commentId]);
// });
// app.get('/products/:productId', (req, res) => {
//   res.json(products[req.params.productId]);
// });
// app.get('/vehicles/:vehicleId', (req, res) => {
//
//   res.json(vehicles[req.params.vehicleId]);
// });
// app.post('/contacts', (req, res) => {
//   const newContact = req.body;
//   contacts.push(newContact);
//   res.json(newContact);
// });
// app.post('/comments', (req, res) => {
//   const newComment = req.body;
//   comments.push(newComment);
//   res.json(newComment);
// });
// app.post('/products', (req, res) => {
//   const newProduct = req.body;
//   products.push(newProduct);
//   res.json(newProduct);
// });
// app.post('/vehicles', (req, res) => {
//   const newVehicle = req.body;
//   products.push(newVehicle);
//   res.json(newVehicle);
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
