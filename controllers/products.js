let express = require("express");
let products = require('../products');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

exports.list = function list(req, res){
    res.json(products);
  }

exports.show = function show(req, res){
    let id = req.params.id
    let product = products.find(p => p["_id"] == id);
    res.json(product);
}

exports.create = function create(req,res){
    let product = req.body;
    products.push(product);
    res.json(product);
}