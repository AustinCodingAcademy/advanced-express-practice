import contacts from "../contacts";


export function list(request, response) {
    return response.json(contacts);
}

export function show(request, response) {
    return response.json(contacts.find(u => u._id == request.params.id) || {});
}

export function create(request, response) {
    contacts.push(request.body);
    return response.send("contact saved");
}

export function update(request, response) {
    return response.json(contacts[0].name = request.params.id);
}
export function remove(request, response) {
    return response.json(contacts.pop());
}
