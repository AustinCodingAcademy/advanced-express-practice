import express from "express";
import comments from "./comments";
import products from "./products";
import vehicle from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import ContactRoute from "./Routes/ContactRoutes";

const app = express();
app.use(bodyParser.json());
app.use(ContactRoute);

const port = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost/contacts");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("MongoDB connected!!");
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

app.get("/", (req, res) => {
  return res.json({
    welcome: "willkommen"
  });
});

// app.get("/contacts", (req, res) => {
//   ContactModel.find({}).exec()
//     .then((contact) => {
//       return res.json(contact);
//     });
// });
//
// app.get("/contacts/:id", (req, res) => {
//   ContactModel.findById(req.params.id).exec()
//     .then(contact => {
//       return res.json(contact);
//     });
// });
//
// app.post("/contacts", (req, res) => {
//   const contact = new ContactModel(req.body);
//   contact.save()
//     .then(savedContact => {
//       return res.json(savedContact);
//     });
// });
//
// app.put("/contacts/:id", (req, res) => {
//   ContactModel.findById(req.params.id).exec()
//     .then((contact) => {
//       contact.name = req.body.name || contact.name;
//       contact.occupation = req.body.occupation || contact.occupation;
//       contact.avatar = req.body.avatar || contact.avatar;
//
//       return contact.save();
//     })
//     .then((contact) => {
//       return res.json(contact);
//     });
// });
//
// app.delete("/contacts/:id", (req, res) => {
//   ContactModel.findByIdAndRemove(req.params.id).exec()
//     .then(() => {
//       return res.json("Contact deleted!!!");
//     });
// });

// app.get("/contacts/:id", (request, response) => {
//   const targetedContact = contacts.find((contact) => {
//     return String(contact._id) === request.params.id;
//   });
//   // console.log("targetedContact", targetedContact);
//   return response.json(targetedContact || null);
// });

app.post("/contacts", (req, res) => {
  contacts.push(req.body);
  res.json(contacts);
});

app.get("/comments", (req, res) => {
  return res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  const targetedComment = comments.find((comment) => {
    return String(comment._id) === req.params.id;
  });
  return res.json(targetedComment);
});

app.post("/comments", (req, res) => {
  comments.push(req.body);
  return res.json(comments);
});

app.get("/vehicles", (req, res) => {
  return res.json(vehicle);
});

app.get("/vehicles/:id", (req, res) => {
  const targetedVehicle = vehicle.find((v) => {
    return String(v._id) === req.params.id;
  });
  return res.json(targetedVehicle);
});

app.post("/vehicles", (req, res) => {
  vehicle.push(req.body);
  res.json(vehicle);
});

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/products/:id", (req, res) => {
  const targetedProduct = products.find((product) => {
    return String(product._id) === req.params.id;
  });
  return res.json(targetedProduct);
});

app.post("/products", (req, res) => {
  products.push(req.body);
  return res.json(products);
});
