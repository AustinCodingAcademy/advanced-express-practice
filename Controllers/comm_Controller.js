const Comment = require("../Server/models/Comm_model");

//get - returns all comments
   exports.list =  function list(req, res) {
      Comment.find((e,c)=>{
         return res.json(c);
      });
   }
//get one comment by id   
   exports.show = function show(req, res) {
      Comment.findById(req.params.id, (err,c)=>{
         return res.json(c);
      });
   }

   exports.create =  function create(req, res) {
      let newComment = new Comment(req.body);
      newComment.save(()=>{
         return res.json(newComment);
      });
   }
   
   