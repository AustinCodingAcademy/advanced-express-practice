import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import ContactRoutes from "./routes/ContactRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import CommentsRoutes from "./routes/CommentsRoutes";
let bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());


app.get("/contacts",function (request,response,next){
  response.json(contacts)
 });

 app.get("/vehicles",function (request,response,next){
  response.json(vehicles)
 });
 app.get("/commments",function (request,response,next){
  response.json(comments)
 });
 app.get("/products",function (request,response,next){
  response.json(products)
 });
// get
app.get("/contacts/:id",function (request,response,next){
  response.json(contacts[request.params._id]);
 });

 app.get("/vehicles/:id",function (request,response,next){
  response.json(vehicles[request.params._id]);
 });
 app.get("/commments/:id",function (request,response,next){
  response.json(comments[request.params._id]);
 });
 app.get("/products/:id",function (request,response,next){
  response.json(products[request.params._id]);
 });
//get code
// app.get("/commments/:id", (request,response,next) =>{
//   let id 
//   response.json(comments[request.params._id]);
//  });

 // post
 app.post('/contacts', (request,response,next) => {
  contacts.push(request.body)
  response.send("contact saved")
 });
 app.post('/vehicles', (request,response,next) => {
  vehicles.push(request.body)
  response.send("vehicles saved")
 });
 app.post('/comments', (request,response,next) => {
  comments.push(request.body)
  response.send("comment saved")
 });
 app.post('/products', (request,response,next) => {
  products.push(request.body)
  response.send("product saved")
 });
 
 
  

app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
 });
 

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
