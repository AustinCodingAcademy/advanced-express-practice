const comments = require("../comments");


let CommentModel = require('../models/CommentModel');

module.exports.list =  function list(req, res) {
    CommentModel.find({}).exec()
    .then(comment => {
        return res.json(comment);
    });

   }
module.exports.show =  function show(req, res) {
    CommentModel.findById(req.params.id).exec()
    .then(comment => {
        return res.json(comment);;
     });
    }

module.exports.create =  function create(req, res) {
    let newComments = new CommentModel({
      body: req.body.body,
    })
    newComments.save()
    .then(comment=>{
        res.json(comment)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }
   