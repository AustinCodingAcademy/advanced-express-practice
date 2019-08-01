const comments = require("../Server/models/Comm_model");

//get - returns all comments
   exports.list =  function list(req, res) {
    return res.json(comments);
   }
//get one comment by id   
   exports.show = function show(req, res) {
    let comment = comments.find(c=>c.id === req.params._id);
    res.json(comment)
   }
   exports.create =  function create(req, res) {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment);
   }
   
   