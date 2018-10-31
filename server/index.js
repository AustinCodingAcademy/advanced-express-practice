const express = require("express");
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");
const bodyParser = require("body-parser");

let contactIdCount = contacts.length; // could just hardcode as 5

const app = express();
// Set static path
app.use(express.static('public'));
// Body Parser Middleware
app.use(bodyParser.json());

// GET
app.get("/contacts", function(req, res, next) {
   return res.json(contacts);
});

app.get("/contacts/:id", function (req, res, next) {
   let contact = contacts.find((contact) => contact._id == req.params.id);
   return res.json(contact);
})

//POST (add)
app.post("/contacts", (req, res, next) => {
   console.log(req)
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
})


// app is listening to port 3002
app.listen(3001, (err) => {
   if (err) {
      return console.log("Error", err);
   }
   console.log("Web server is now living in apartment 3001");
})