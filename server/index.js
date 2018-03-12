import express from "express";
import bodyParser from 'body-parser';
// routes
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import ProductRoutes from "./routes/ProductRoutes";

const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

//routes to get one thing

// app.get('/contacts/:id', (request, response, next) => {
//   const contactId = request.params.id;
//   response.json(contacts[contactId]);
// });
//
// app.get('/vehicles/:id', (request, response, next) => {
//   const vehicleId = request.params.id;
//   response.json(vehicles[vehicleId]);
// });
//
// app.get('/comments/:id', (request, response, next) => {
//   const commentId = request.params.id;
//   const comment = comments.find((c) => {
//     return (c.id == id)
//   });
//   return response.json(comment);
// });
//
//
// app.get('/products/:id', (request, response, next) => {
//   const productId = request.params.id;
//   response.json(products[productId]);
// });
//
// app.post('/contacts', (request, response, next) => {
//   contacts.push(request.body);
//   response.json(contacts);
// });
//
// app.post('/vehicles', (request, response, next) => {
//   vehicles.push(request.body);
//   response.json(vehicles);
// });
//
// app.post('/comments', (request, response, next) => {
//   vehicles.push(request.body);
//   response.json(comments);
// });
//
// app.post('/products', (request, response, next) => {
//   vehicles.push(request.body);
//   response.json(products);
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
