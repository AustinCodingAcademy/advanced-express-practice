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
// @TODO fix bug with VehicleModel
// import VehicleModel from "./models/VehicleModel";

// this promise must be global so mongoose can use it with DB and in here
mongoose.Promise = global.Promise;
// Mongoose and DB connection
// the localhost = PORT 27017 as the default because that's what mongoose is set to
mongoose.connect("mongodb://localhost/ExpressPractice1");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
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

// GET INDIVIDUALS by ID
app.get(commentsPath + "/:id", (request, response) => {
  const query = request.params.id;

  CommentModel.findById(query)
    .then((data) => {
      console.log("Comment DB individual was requested");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Comment DB individual fetch failed", err);
  // const query = request.params;
  // console.log("comment ", query.id, " has been requested");
  // const match = comments.find((comment) => {
  //   return String(comment._id) === query.id;
  // });
  // if (match) {
  //   return response.json(match);
  // }
  // return response.json("nothing in ", query.id);
    });
});

app.get(contactsPath + "/:id", (request, response) => {
  const query = request.params.id;

  ContactModel.findById(query)
    .then((data) => {
      console.log("Contact DB was requested");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Contact DB individual fetch failed", err);
    });
});

app.get(productsPath + "/:id", (request, response) => {
  const query = request.params.id;

  ProductModel.findById(query)
    .then((data) => {
      console.log("Product DB individual was requested");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Product DB individual fetch failed", err);
    });
});

/*
// @TODO fix bug with VehicleModel
app.get(vehiclesPath + "/:id", (request, response) => {
  const query = request.params.id;

  VehicleModel.findById(query)
    .then((data) => {
      console.log("Vehicle DB individual was requested");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Vehicle DB individual fetch failed", err);
    });
});
*/

// GETS
app.get(commentsPath, (request, response) => {
  CommentModel.find({}).exec()
    .then(data => {
      console.log("fetched comments these", data);
      return response.json(data);
    })
    .catch(err => {
      return console.log("fetch failed for commentz");
    });
});

app.get(contactsPath, (request, response) => {
  ContactModel.find({}).exec()
    .then(data => {
      console.log("Contact DB was requested");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Contacts DB fetch failed");
    });
});

app.get(productsPath, (request, response) => {
  ProductModel.find({}).exec()
    .then(data => {
      console.log("Product DB was fetched");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Product DB fetch failed");
    });
});

// @TODO fix bug with VehicleModel
// app.get(vehiclesPath, (request, response) => {
//   VehicleModel.find({}).exec()
//     .then(data => {
//       console.log("Vehicle DB fetched");
//       return response.data(data);
//     })
//     .catch(err => {
//       return console.log("Vehicle DB fetch failed");
//     });
// });


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
});

// @TODO fix bug with VehicleModel
// app.post(vehiclesPath, (request, response) => {
//   const addedVehicle = new VModel(request.body);
//
//   vehicles.push(addedVehicle);
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

// DELETES

app.delete(commentsPath + "/:id", (request, response) => {
  const query = request.params.id;

  CommentModel.findByIdAndRemove(query).exec()
    .then(data => {
      console.log("Comment ", query, "was removed");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Comment failed to delete", err);
    });
});

app.delete(contactsPath + "/:id", (request, response) => {
  const query = request.params.id;

  ContactModel.findByIdAndRemove(query).exec()
    .then(data => {
      console.log("Contact ", query, "was removed");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Contact failed to delete");
    });
});

app.delete(productsPath + "/:id", (request, response) => {
  const query = request.params.id;

  ProductModel.findByIdAndRemove(query).exec()
    .then(data => {
      console.log("Product ", query, "was deleted");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Product failed to delete");
    });
});

/*
@TODO fix bug in VehicleModel
app.delete(vehiclesPath + "./:id", (request, response) => {
  const query = request.params.id;

  VehicleModel.findByIdAndRemove(query).exec()
    .then(data => {
      console.log("Vehicle ", query, "was deleted");
      return response.json(data);
    })
    .catch(err => {
      return console.log("Vehicle failed to delete");
    });
});
*/
