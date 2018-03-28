import ContactModel from "../models/ContactModel";

export function list(request, response) {
  ContactModel.find({}).exec()
 .then(contacts => {
   return response.json(contacts);
 });
}

export function create(request, response) {
  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar
  });
  contact.save()
  .then(con => {
    return response.json(con);
  });
}

export function show(request, response) {
  ContactModel.findById(request.params.id).exec()
  .then(contact => {
    return response.json(contact);
  });
}

export function update(request, response) {
  ContactModel.findById(request.params.id).exec()
    .then(contact => {
      contact.name = request.body.name || contact.name;
      contact.occupation = request.body.occupation || contact.occupation;
      contact.avatar = request.body.avatar || contact.avatar;
      return user.save();
    })
    .then(contact => {
      return response.json(contact);
    });
}

export function remove(request, response) {
 return response.json({});
}

/*export function show(request, response) {
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
}*/
