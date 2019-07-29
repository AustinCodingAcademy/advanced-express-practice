const getDatabase = require('../index');
const assert = require('assert');
let express = require("express");
// let contacts = require('../contacts');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());



exports.list = function list(req, res){
  let db = getDatabase();
  let collection = db.collection('contacts')
  collection.find().then((contacts) =>{
    return res.send(contacts);
  })
}

exports.show = function show(req, res){
    // let id = req.params.id
    // let contact = contacts.find(c => c["_id"] == id);
    // res.json(contact);
}

exports.create = function create(req,res){
    // let contact = req.body;
    // contacts.push(contact);
    // res.json(contact);
}

