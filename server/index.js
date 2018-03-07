import express from "express";
import bodyParser from "body-parser";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import ProductRoutes from "./routes/ProductRoutes";

const app = express();
app.use(bodyParser.json());

//snippets made for expressgetroute and expresspostroute
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

// app.get("/contacts",function (request,response,next){
//  response.json(contacts);
// });
// app.get("/contacts/:id",function (request,response,next){
//  response.json(contacts.find((c)=>c._id==request.params.id));
// });
// app.post("/contacts",function (request,response,next){
//  let newContact = request.body
//  contacts.push(newContact);
//  response.json(newContact);
// });


// app.get("/vehicles",function (request,response,next){
//  response.json(vehicles);
// });
// app.get("/vehicles/:id", function (request,response,next){
//   response.json(vehicles.find((c)=>c._id==request.params.id));
// });
// app.post("/vehicles", function (request,response,next){
//   let newVehicle = request.body;
//   vehicles.push(newVehicle);
//   response.json(newVehicle);
// });
//
// app.get("/comments",function (request,response,next){
//  response.json(comments);
// });
// app.get("/comments/:id",function (request,response,next){
//  response.json(comments.find((c)=>c._id==request.params.id));
// });
// app.post("/comments", function (request,response,next){
//   let newComment = request.body;
//   comments.push(newComment);
//   response.json(newComment);
// });
//
// app.get("/products",function (request,response,next){
//  response.json(products);
// });
// app.get("/products/:id",function (request,response,next){
//  response.json(products.find((c)=>c._id==request.params.id));
// });
// app.post("/products", function (request,response,next){
//   let newProduct = request.body;
//   products.push(newProduct);
//   response.json(newProduct);
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
