import contacts from "../contacts";


export function list(request, response) {
    response.json(contacts);
  }
  export function show(request, response) {
    let id = request.params.id;
    let foundContact = contacts.find((contact) => {
      if(contact._id == id){
        return contact
        console.log(contact)
      }
      else response.send("There is no such contact")
    })
    return response.json(foundContact);
  }
    export function create(request, response) {
      contacts.push(request.body);
  }
  
  export function update(request, response) {
    return response.json(contacts[0].name = request.params.id);
  }
  
  export function remove(request, response) {
    return response.json(contacts.pop());
  }