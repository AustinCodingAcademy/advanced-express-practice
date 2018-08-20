let express = require("express");
let bodyParser = require("body-parser");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

let theParser = bodyParser.json();
app.use(theParser);

app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now living on port 3001.");
});

/*
Create express routes to get all things
Add .get() routes for /contacts, /vehicles, /comments, /products
response.json() the appropriate array
*/
app.get("/contacts", function(request, response, next){
    return response.json(contacts);
});

app.get("/vehicles", function(request, response, next){
    return response.json(vehicles);
});

app.get("/comments", function(request, response, next){
    return response.json(comments);
});

app.get("/products", function(request, response, next){
    return response.json(products);
});


/*
Create express routes to get one thing
- Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
- add a path variable for id
- use the params.id to .find() the item from the appropriate array
- response.json() the item found
*/
app.get("/contact/:contactId", function(request, response, next){
    return response.json(contacts[request.params.contactId]);
    // let contactID = request.params._id;
    // return response.json(contact.find(contactID));
});

app.get("/vehicle/:vehicleId", function(request, response,next){
    //return response.json(vehicles[request.params.vehicleId]);
    let vehicleID = request.params._id;
    return response.json(vehicle.find(vehicleID));
});

app.get("/comment/:commentId", function(request, response, next){
    let commentID = request.params.id;
    return response.json(comment.find(commentID));
});

app.get("/product/:productId", function(request, response,next){
    let productID = request.params.id;
    return response.json(product.find(productID));
});


/*
Create express routes to create one thing
Add .post() routes for /contacts, /vehicles, /comments, /products
Add the information from the body to the appropriate array
*/
app.post("/contacts", (request, response)=>{
    let newContact = request.body;
    let contactID = contacts.length;
    newContact._id = contactID ++;
    contacts.push(newContact);
    return response.json(newContact);
});

app.post("/vehicles", (request, response)=>{
    let newVehicle = request.body;
    let vehicleID = vehicles.length;
    newVehicle._id = vehicleID ++;
    contacts.push(newVehicle);
    return response.json(newVehicle);
});

app.post("/comments", (request, response)=>{
    let newComment = request.body;
    let commentID = comments.length;
    newComment._id = commentID ++;
    comments.push(newComment);
    return response.json(newComment);
});

app.post("/products", (request, response)=>{
    let productID = 1
    request.body._id = productID 
    productID ++;
    products.push(request.body);
    return response.json(request.body);

});
