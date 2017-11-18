const comments = require("../comments");

function list(request, response) {
    return response.json(comments);
}

function show(request, response) {
    let getContact = comments.find(c => {
            return String(c._id) === request.params.id;
        });
      
    return response.json(getContact);
}

function create(request, response) {
    comments.push(request.body);
    return response.json(comments);
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