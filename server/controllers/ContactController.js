import Contact from "../models/Contact";


 export function list(request, response) {
   Contact.find({}).exec()
   .then(contacts => {
     return response.json(contacts);
   });
 }

 export function show(request, response) {
   Contact.findById(request.params.id).exec()
      .then(contacts => {
        return response.json(contacts);
      });
 }

 export function create(request, response) {
   const contact = new Contact({
         name: request.body.name,
         occupation: request.body.occupation,
         avatar: request.body.avatar
     });
     contact.save()
     .then(contacts => {
         return response.json(contacts);
     });
 }

 export function update(request, response) {
     return response.json(Contact[0].name = request.params.id);

 export function remove(request, response) {
     return response.json(Contact.pop());
 }
