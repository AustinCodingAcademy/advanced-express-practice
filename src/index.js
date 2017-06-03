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
db.once("open", () => {
  console.log("mongoose and db are connected"
);
});

const app = express();

app.use(bodyParser.json());

app.use((request, response, next) => {
  request.specialMessage = "I am a special Error Message";
  next();
});

app.get("/", (request, response, next) => {
  const message = request.specialMessage;
  response.send(message);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});

const commentsPath = "/comments";
const contactsPath = "/contacts";
const productsPath = "/products";
const vehiclesPath = "/vehicles";

// GET INDIVIDUALS by ID  ************************************************

app.get(commentsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  CommentModel.findById(query)
    .then((data) => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
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

app.get(contactsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  ContactModel.findById(query)
    .then((data) => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

app.get(productsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  ProductModel.findById(query)
    .then((data) => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

/*
// @TODO fix bug with VehicleModel
app.get(vehiclesPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  VehicleModel.findById(query)
    .then((data) => {
      console.log("Vehicle DB individual was requested");
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});
*/

// GETS  ************************************************

app.get(commentsPath, (request, response, next) => {
  CommentModel.find({}).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

app.get(contactsPath, (request, response, next) => {
  ContactModel.find({}).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

app.get(productsPath, (request, response, next) => {
  ProductModel.find({}).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

// @TODO fix bug with VehicleModel
// app.get(vehiclesPath, (request, response, next) => {
//   VehicleModel.find({}).exec()
//     .then(data => {
//       console.log("Vehicle DB fetched");
//       return response.data(data);
//     })
//     .catch(err => {
//       return next(err);
//     });
// });


// POSTS ************************************************

app.post(commentsPath, (request, response, next) => {
  const addedComment = new CommentModel(request.body);

  addedComment.save()
    .then(() => {
      return response.json(addedComment);
    })
    .catch((err) => {
      return next(err);
    });
  // console.log("comments was posted to");
  // const newComment = {_id: comments.length + 1, ...request.body};
  // comments.push(newComment);
  // return response.json(newComment);
});

app.post(contactsPath, (request, response, next) => {
  const addedContact = new ContactModel(request.body);

  addedContact.save()
    .then(() => {
      return response.json(addedContact);
    })
    .catch((err) => {
      return next(err);
    });
});

app.post(productsPath, (request, response, next) => {
  const addedProduct = new ProductModel(request.body);

  addedProduct.save()
    .then(() => {
      return response.json(addedProduct);
    })
    .catch((err) => {
      return next(err);
    });
});

// @TODO fix bug with VehicleModel
// app.post(vehiclesPath, (request, response, next) => {
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
//       return next(err);
//     });

  // console.log("vehicles have a new vehicle");
  // const newVehicle = {_id: vehicles.length + 1, ...request.body};
  // vehicles.push(newVehicle);
  // return response.json(newVehicle);
// });

// DELETES  ************************************************

app.delete(commentsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  CommentModel.findByIdAndRemove(query).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

app.delete(contactsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  ContactModel.findByIdAndRemove(query).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

app.delete(productsPath + "/:id", (request, response, next) => {
  const query = request.params.id;

  ProductModel.findByIdAndRemove(query).exec()
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

/*
@TODO fix bug in VehicleModel
app.delete(vehiclesPath + "./:id", (request, response, next) => {
  const query = request.params.id;

  VehicleModel.findByIdAndRemove(query).exec()
    .then(data => {
      console.log("Vehicle ", query, "was deleted");
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});
*/

// UPDATES ************************************************

app.put(commentsPath + "/:id", (request, response, next) => {
  const query = request;

  CommentModel.findById(query.params.id).exec()
    .then(data => {
      data.body = query.body.body || data.body;
      data.postId = query.body.postId || data.postId;
      return data.save();
    })
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

app.put(contactsPath + "/:id", (request, response, next) => {
  ContactModel.findById(request.params.id).exec()
    .then(data => {
      data.name = request.body.name || data.name;
      data.occupation = request.body.occupation || data.occupation;
      data.avatar = request.body.avatar || data.avatar;
      return data.save();
    })
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});

app.put(productsPath + "/:id", (request, response, next) => {
  const itemBody = request.body;
  ProductModel.findById(request.params.id).exec()
    .then(data => {
      data.name = itemBody.name || data.name;
      data.description = itemBody.description || data.description;
      data.reviewNum = itemBody.reviewNum || data.reviewNum;
      data.rating = itemBody.rating || data.rating;
      data.imgUrl = itemBody.imgUrl || data.imgUrl;
      data.price = itemBody.price || data.price;
      data.category = itemBody.category || data.category;
      // @TODO Would change the logic here so we can add review one at a time
      // insted of having to send all of the each time.
      data.reviews = itemBody.reviews || data.reviews;
      return data.save();
    })
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
});
/*
@TODO fix bug in vehicle model
app.put(vehiclesPath + "/:id", (request, response, next) => {
  const itemBody = request.body;

  VehicleModel.findById(request.params.id).exec()
    .then(data => {
      data.imgUrl = itemBody.imgUrl || data.imgUrl;
      data.year = itemBody.year || data.year;
      data.make = itemBody.make || data.make;
      data.model = itemBody.model || data.model;
      data.price = itemBody.price || data.price;
      data.km = itemBody.km || data.km;
      data.miles = itemBody.miles || data.miles;
      data.fuel = itemBody.fuel || data.fuel;
      data.city = itemBody.city || data.city;

      console.log("Vehicle ", request.params.id, " was updated");
      return data.save();
    })
      .then(data => {
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
});
*/
