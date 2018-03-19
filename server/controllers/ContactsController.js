import contacts from "../contacts"

export function list(request, response) {
 return response.json(contacts);
}
export function show(request, response) {
  let id = request.params.contactID; //set id equal to the request in the url
  let contact = contacts.find((c)=>{
    if (c._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(contact);
}
export function create(request, response) {
  contacts.push(request.body)
  return response.json(request.body);
}
export function update(request, response) {
 return response.json({contactID: request.params.contactID});
}
export function remove(request, response) {
 return response.json({});
}
