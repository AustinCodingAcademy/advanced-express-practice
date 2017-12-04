import contacts from "./contacts";
import Contact from "./models/Contact";

app.get("/contacts", (request, response) => {
Contact.find({}).exec()
.then(contacts => {
  return response.json(contacts);
});
});

export function list(request, response) {
 return response.json(contacts);
}
export function show(request, response) {
 return response.json({theId: request.params.id});
}
export function create(request, response) {
  contacts.push(request.body);
 return response.json({});
}
export function update(request, response) {
 return response.json({theId: request.params.id});
}
export function remove(request, response) {
 return response.json({});
}
