const Contact  = require("../Server/models/Contact_model");

//get - returns all comments
   exports.list =  function list(req, res) {
      Contact.find((e,c)=>{
         return res.json(c);
      });
   }
//get one comment by id   
   exports.show = function show(req, res) {
      Contact.findById(req.params.id, (err,c)=>{
         return res.json(c);
      });
   }
   exports.create =  function create(req, res) {
      let newContact = new Contact(req.body);
      newContact.save(()=>{
         res.json(newContact);
      });
   }