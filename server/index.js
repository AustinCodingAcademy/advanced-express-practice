import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.json());


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});






// *** GETS COMMENTS ***
app.get("/comments", (request, response) => {
  response.json(comments);
});
// *** GETS PRODUCTS ***
app.get("/products/", (request, response) => {
  response.json(products);
});
// *** GETS VEHICLES ***
app.get("/vehicles", (request, response) => {
  response.json(vehicles);
})
// *** GETS CONTACTS ***
app.get("/contacts", (request, response) => {
  response.json(contacts);
});
// *** GETS SPECIFIC COMMENT BASED ON ID ***
app.get("/comments/:id", (request, response) => {
  let id = request.params.id;
  let commentID = comments.find((comment) => {
    if(comment._id == id){
     return comment
    }
    else response.send("There is no such comment")
  })
  response.json(commentID);
});
// *** GETS SPECIFIC PRODUCT BASED ON ID ***
app.get("/products/:id/", (request, response) => {
  let id = request.params.id;
  let productID = products.find((product) => {
    if(product._id == id){
     return product
    }
    else response.send("There is no such product")
  })
  response.json(productID);
});
// *** GETS SPECIFIC VEHICLE BASED ON ID ***
app.get("/vehicles/:id/", (request, response) => {
  let id = request.params.id;
  let vehicleID = vehicles.find((vehicle) => {
    if(vehicle._id == id){
     return vehicle
    }
    else response.send("There is no such vehicle")
  })
  response.json(vehicleID);
});
// *** GETS SPECIFIC CONTACT BASED ON ID *** 
app.get("/contacts/:id/", (request, response) => {
  let id = request.params.id;
  let contactID = contacts.find((contact) => {
    if(contact._id == id){
     return contact
    }
    else response.send("There is no such contact")
  })
  response.json(contactID);
});