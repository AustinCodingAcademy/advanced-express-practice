let express = require("express");
let productRoutes = require("./routes/products.js")
const bodyParser = require("body-parser");
const app = express();
let { connect } = require("./database");

connect(() => {
  app.use(bodyParser.json());
  app.use(express.static("public"));
  app.use(productRoutes);
  app.get("/", function (req, res) {
    res.json("I'm here");
  })
  const thePort = 3002;

  app.listen(3002, err => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port", thePort);
  });
})








// });
// app.get("/contacts/:id", function (req, res) {
//   let foundContact = contacts.filter(p => p._id == req.params.id);
//   res.json(foundContact);
// });

// app.get("/contacts", function (req, res) {
//   res.json(contacts);
// });

// app.post("/contacts", function (req, res) {
//   let contact = req.body;
//   contacts.push(contact);
//   res.json(contacts)
// })



// app.get("/comments", function (req, res) {
//   res.json(comments);
// });

// app.get("/comments/:id", function (req, res) {
//   let comment = comments.find(p => p._id == req.params.id);
//   res.json(comment);
// })

// app.post("/comments", function (req, res) {
//   let comment = req.body;
//   comments.push(comment);
//   res.json(comments)
// })

