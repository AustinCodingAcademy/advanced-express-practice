let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
//Part 2-Routes...import and use the routers in index.js//
import commentRoutes from "./routes/commentR.js";
app.use(commentRoutes);
import contactRoutes from "./routes/contactR.js";
app.use(contactRoutes);
import productRoutes from "./routes/productR.js";
app.use(productRoutes);
import vehicleRoutes from "./routes/vehicleR.js";
app.use (vehicleRoutes);


const app = express();
//PART 2 Import and use the Routers in index.js//
let routes = require("./routes);
app.use(routes);


//*PART 1 Add body parser middleware to express//

let bodyParser= require("body-parser");

/*PART 1
* This is the starting point of the server, put all code here
* Make your app listen to port 3001*/

app.listen(3001 ,(req,res) => {
        return console.log("we are running");
})
app.use (bodyParser.json())

//Part 1 add .get routes for comments,products.vehicles.contacts//
app.get("/comment",function(req,res){
    return res.send(comment)
}) 

 app.get ("/products",function (req,res)  {
     return res.send(products);
 });
 app.get("/vehicles", function (req,res){
     return res.send(vehicles);
 });
 app.get ("/contacts",function (req,res) {
    return res.send(contacts);
 });
 //Part 1 response .json the appropriate array//
 app.get ("/contacts", function(request,response,next){
     response.json(contacts[1]);
 })
 /* ### Create express routes to get one thing. Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
 -Add a path variable for id, use the params.id to .find() the item from the appropriate array, * response.json () the item found*/
 app.get ("/contacts/:contactsId", function (req,res,next) {
     response.json(contacts[request.params.contactsId]);
 });
 app.get ("/vehicles/:vehiclesId", function (req,res,next) {
     response.json(vehicles[request.params.vehiclesId]);
 });
 app.get ("/comment/:commentId", function (req,res,next) {
     response.json(comment[request.params.commentId]);
 });
 app.get ("/products/:productsId", function (req,res,next) {
     response.json(comment[request.params.productsId]);
 });





 //users plus post means get the entire array of users and add another user to it//
 /*### PART 1 Create express routes to create one thing
* Add .post() routes for /contacts, /vehicles, /comments, /products
* Add the information from the body to the appropriate array*/

 app.post ("/comment",function (req,res){
     req.body._id = comment.length+1 
     console.log (comment) 
     console.log (req.body)
     comments.push(req.body)
     return res.send(req.body)
 });
 app.post ("/products",function (req,res){
     req.body._id = products.length+1
     console.log (products)
     console.log (req.body)
     products.push(req.body)
     return res.send(req.body)
 });
 app.post ("/vehicles",function(req,res){
     req.body._id = vehicles.length+1
     console.log(vehicles)
     console.log(req.body)
     vehicles.push(req.body)
     return res.send(req.body)
 });
 app.post("/contacts",function(req,res){
     req.body.id = contacts.length+1
     console.log(contacts)
     console.log(req.body)
     contacts.push(req.body)
     return res.send(req.body)
});
/*# Part 3 - Controllers
* Create controller files 
* Import the arrays into the controller
* Take the code from the routes and put it into the controller
* create functions for list, show and create*/



//This is the starting point of the app, make your app listen to port 3001//

// console.log ("Web server is now living in apartment 3001");
// });
//everything that is in the client folder is already built, you are only changing stuff in the server folder//
//Create Express Routes to create one thing//
//Add .get() routes for /contacts/:id,/vehicles/:id,/comments/:id,/products/:id//
//Add a path variable for id//
//use the params .id to find() the item from the appropriate array//
//response.json() the item found//
//make sure that you use comment not comments across the board or you will get an error//
//  app.get("contacts/:/contactsId/vehicles/:vehiclesId/comment/:/commentId/products:/productsId",
// function(request,response,next){
//     console.log(request.params.commentId);
// }
// response.json(comment[request.params.commentId]);
//  })
 

