app.use(express.static('public'));
// Body Parser Middleware
app.use(bodyParser.json());

const contacts = require("./contacts");
let contactIdCount = contacts.length; 
// .get contacts
export function list(req, res) {
   return res.json(contacts);
}
// .get contact by ID
export function show(req, res) {
   let contact = contacts.find((contact) => contact._id == req.params.id);
   return res.json(contact);
}
// .post new contact
export function create(req, res) {
   contactIdCount++
   const newContact = {
      _id: contactIdCount,
      name: req.body.name,
      occupation: req.body.occupation
   }
   // add new contact to contacts array
   contacts.push(newContact);
   // return array with added contact
   return res.json(contacts);
}
// .put contact by ID
export function update(req, res) {
   return res.json({theId: req.params.id});
}
// .delete contact by ID
export function remove(req, res) {
   return res.json({});
}
  