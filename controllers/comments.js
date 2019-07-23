let express = require("express");
let comments = require('../comments');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

exports.list = function list(req, res){
    res.json(comments);
  }

exports.show = function show(req, res){
    let id = req.params.id
    let comment = comments.find(c => c["_id"] == id);
    res.json(comment);
}

exports.create = function create(req,res){
    let comment = req.body;
    comments.push(comment);
    res.json(comment);
}