let contacts = require("../contacts");
let idCount = 5;

module.exports.list = function list(req, res, next) {
    return res.json(contacts)
}
module.exports.show = function show(req, res, next) {
    let conID = contacts.find((item) => { return item._id == req.params.id })
    return res.json(conID)
}
module.exports.create = function create(req, res, next) {
    idCount++;
    let newContact = {
        _id: idCount,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }
    contacts.push(newContact);
    return res.json(contacts);
}
module.exports.update = function update(request, response, next) {
    return response.json({theId: request.params.id});
}
module.exports.remove = function remove(request, response, next) {
    return response.json({});
}
   