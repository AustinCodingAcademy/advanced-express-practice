import comments from "./comments";

export function list(request, response) {
    return response.json(comments);
}

export function show(request, response) {
    return response.json({theId: request.params.id});
}

export function create(request, response) {
    comments.push(request.body);
    return response.json(comments);
}

export function update(request, response) {
    return response.json({theId: request.params.id});
}

export function remove(request, response) {
    return response.json(comments);
}