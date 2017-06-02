/*  eslint-disable no-unused-vars*/
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import comments from "./localapi/comments";
import CommentModel from "./models/CommentModel";
import contacts from "./localapi/contacts";
import ContactModel from "./models/ContactModel";
import products from "./localapi/products";
import ProductModel from "./models/ProductModel";
import vehicles from "./localapi/vehicles";
// import VModel from "./models/VModel";

// Mongoose and DB connection
// the localhost = PORT 27017 as the default because that's what mongoose is set to
mongoose.connect("mongodb://localhost/ExpressPractice1");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("mongoose and db are connected"
);
});

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});


const commentsPath = "/comments";
const contactsPath = "/contacts";
const productsPath = "/products";
const vehiclesPath = "/vehicles";

// GET INDIVIDUALS
app.get(commentsPath + "/:id", (request, response) => {
  const query = request.params;
  console.log("comment ", query.id, " has been requested");
  const match = comments.find((comment) => {
    return String(comment._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("nothing in ", query.id);
});

app.get(contactsPath + "/:id", (request, response) => {
  const query = request.params;
  console.log("contact ", query.id, " has been requested");
  const match = contacts.find((person) => {
    return String(person._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("nothing in ", query.id);
});

app.get(productsPath + "/:id", (request, response) => {
  const query = request.params;
  console.log("product ", query.id, " was requested");
  const match = products.find((prod) => {
    return String(prod._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("no products with id ", query.id);
});

app.get(vehiclesPath + "/:id", (request, response) => {
  const query = request.params;
  console.log("vehicle ", query.id, " was requested");
  const match = vehicles.find((car) => {
    return String(car._id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json("no vehicles match the request ", query.id);
});

// GETS
app.get(commentsPath, (request, response) => {
  console.log("commments was received");
  return response.json(comments);
});

app.get(contactsPath, (request, response) => {
  console.log("contacts was requested");
  return response.json(contacts);
});

app.get(productsPath, (request, response) => {
  console.log("products was requested");
  return response.json(products);
});

app.get(vehiclesPath, (request, response) => {
  console.log("vehicles was requested");
  return response.json(vehicles);
});




// POSTS
app.post(commentsPath, (request, response) => {
  const addedComment = new CommentModel(request.body);

  addedComment.save()
    .then(() => {
      console.log("new comments was executed");
      return response.json(addedComment);
    })
    .catch((err) => {
      console.log("NO new comment saved", err);
      return response.json("NO new comment saved");
    });
  // console.log("comments was posted to");
  // const newComment = {_id: comments.length + 1, ...request.body};
  // comments.push(newComment);
  // return response.json(newComment);
});

app.post(contactsPath, (request, response) => {
  const addedContact = new ContactModel(request.body);

  addedContact.save()
    .then(() => {
      console.log("new contact was added");
      return response.json(addedContact);
    })
    .catch((err) => {
      console.log("NO new contact saved");
      return response.json("NO new contact saved");
    });

  // console.log("contacts were posted to");
  // const newContact = {_id: contacts.length + 1, ...request.body};
  // contacts.push(newContact);
  // return response.json(newContact);
});

app.post(productsPath, (request, response) => {
  const addedProduct = new ProductModel(request.body);

  addedProduct.save()
    .then(() => {
      console.log("new Product was saved");
      return response.json(addedProduct);
    })
    .catch((err) => {
      console.log("NO new product saved");
      return response.json("NO new product saved");
    });

  // console.log("new product was added");
  // const newProduct = {_id: products.length + 1, ...request.body};
  // products.push(newProduct);
  // return response.json(newProduct);
});

// app.post(vehiclesPath, (request, response) => {
//   const addedVehicle = new VModel(request.body);
// 
//   addedVehicle.save()
//     .then(() => {
//       console.log("New vehicle saved");
//       return response.json(addedVehicle);
//     })
//     .catch((err) => {
//       console.lot("NO new vehicle saved");
//       return response.json("NO new vehicle saved");
//     });

  // console.log("vehicles have a new vehicle");
  // const newVehicle = {_id: vehicles.length + 1, ...request.body};
  // vehicles.push(newVehicle);
  // return response.json(newVehicle);
// });
