let express = require("express");
let contacts = require('../contacts');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

exports.list = function list(req, res){
    res.json(contacts);
  }

exports.show = function show(req, res){
    let id = req.params.id
    let contact = contacts.find(c => c["_id"] == id);
    res.json(contact);
}

exports.create = function create(req,res){
    let contact = req.body;
    contacts.push(contact);
    res.json(contact);
}

