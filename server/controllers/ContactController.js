let contacts = require("./contacts");
let idCount = 5;

export function list(request, response) {
    return res.json(contacts)
}
export function show(request, response) {
    let conID = contacts.find((item) => { return item._id == req.params.id })
    return res.json(conID)
}
export function create(request, response) {
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
export function update(request, response) {
    return response.json({theId: request.params.id});
}
export function remove(request, response) {
    return response.json({});
}
   