let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

app.listen(3001, (err) => {
if (err) {
    return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});

app.get("/contacts",function(req,res,next){
    return res.send(contacts});
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
