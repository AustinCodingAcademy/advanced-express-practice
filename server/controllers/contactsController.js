import contacts from "../contacts";


export function list(request, response) {
    return response.json([contacts]);
   }

   
export function show(request, response) {
    let id = request.params.id;
    let contactID = contacts.find((contact) => {
      if(contact._id == id){
       return contact
      }
      else response.send("There is no such contact")
    })
    return response.json(contactID);
   }


export function create(request, response) {
    return contacts.push(request.body);
   }


export function update(request, response) {
    return response.json({theId: request.params.id});
   }
export function remove(request, response) {
    return response.json({});
   }