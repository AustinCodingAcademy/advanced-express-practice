let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
let bodyParser = require("body-parser");
let state = require("./state")
let users = require(state.users);

const app = express();
app.use(bodyParser.json());

app.listen(5555, (err) => {
if (err) {
    return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});

app.get("/contacts",function(req,res,next){
    return res.send(contacts);
});

app.get("/vehicles",function(req,res,next){
    return res.send(vehicles);
});

app.get("/comments",function(req,res,next){
    return res.send(comments);
});

app.get("/products",function(req,res,next){
    return res.send(products);
});

//need to add the correct response.json

-app.get("/contacts/:id",function (req,res,next){	
    const contactId = contacts.find(user => user._id == req.params.id);	
    return res.json(contactId);	
});

-app.get("/vehicles/:id",function (req,res,next){	
    const vehicleId = vehicles.find(user => user._id == req.params.id);	
    return res.json(vehicleId);	
});

-app.get("/comments/:id",function (req,res,next){	
    const commentId = contacts.find(user => user._id == req.params.id);	
    return res.json(commentId);	
});

-app.get("/products/:id",function (req,res,next){	
    const productId = products.find(user => user._id == req.params.id);	
    return res.json(productId);	
});

app.post("/contacts", function (req, res, next){
    return res.json(contacts.push({}));
});

app.post("/vehicles", function (req, res, next){
    return res.json(vehicles.push({}));
});

app.post("/comments", function (req, res, next){
    return res.json(comments.push({}));
});

app.post("/products", function (req, res, next){
    return res.json(products.push({}));
});