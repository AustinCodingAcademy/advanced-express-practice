let Comment = require("../models/commentModel")

exports.list =  function list(req, res) {
   Comment.find((err,c)=>{
       return res.json(c);
   });
}
exports.show = function show(req, res) {
   Comment.findById(req.params.id, (err,c)=>{
       return res.json(c);
   });
}
exports.create =  function create(req, res) {
    const newComment = new Comment({
        body: req.body.body
    })
    newComment.save().then(savedComment=>{
        console.log(savedComment)
    })    
} 
