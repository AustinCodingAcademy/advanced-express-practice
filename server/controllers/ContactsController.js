const contacts = require("../contacts");

function list(request, response) {
    return response.json(contacts);
}

function show(request, response) {
    let getContact = contacts.find(c => {
            return String(c._id) === request.params.id;
        });
      
    return response.json(getContact);
}

function create(request, response) {
    contacts.push(request.body);
    return response.json(contacts);
}

module.exports = {
    list,
    show,
    create
}

/*export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json({});
}*/