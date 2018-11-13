//const contacts=require("../contacts");
const ContactModel=require("../models/ContactModel");
//let contactCount=contacts.length;

module.exports.list=(req, res)=>{
    ContactModel.find().exec().then((contact)=>{
        return res.json(contact)
    })
}

module.exports.show=(req,res)=>{
    ContactModel.findById(req.params.id).exec().then((contact)=>{
        return res.json(contact)
    })
}

module.exports.create=(req, res)=>{
    const c=new ContactModel({
        name:req.body.name,
        occupation:req.body.occupation,
        avatar:req.body.avatar
    });
    c.save().then(savedContact=>{
        return res.json(savedContact)
    })
}
// module.exports.list=(req,res,next)=>{
//     return res.json(contacts)
// }

// module.exports.show= (req, res)=>{
//     let contact= contacts.find((id)=>{
//         return id._id == req.params.id
//     })
//     return res.json(contact)
// }

// module.exports.create=(req,res)=>{
//     let newContact=req.body;
//     contacts.push(newContact);
//     contactCount++;
//     newContact._id =contactCount;
//     return res.json(newContact)
// }

module.exports.update= function update(req,res) {
    return res.json({theId: req.params.id});
}

module.exports.remove= function remove(req, res){
    return res.json({});
}