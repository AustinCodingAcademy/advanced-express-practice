let express = require("express");
let vehicles = require('../vehicles');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

exports.list = function list(req, res){
    res.json(vehicles);
  }

exports.show = function show(req, res){
    let id = req.params.id
    console.log(id)
    let vehicle = vehicles.find(v => v["_id"] == id);
    res.json(vehicle);
}

exports.create = function create(req,res){
    let vehicle = req.body;
    vehicles.push(vehicle);
    res.json(vehicle);
}