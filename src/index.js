import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Comment from "./models/Comment";
import Contact from "./models/Contact";
import Product from "./models/Product";
import Vehicle from "./models/Vehicle";

// create DB connection

mongoose.connect("mongodb://localhost/advanced-express-practice");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

const app = express();
app.use(bodyParser.json());

// GET REQUESTS FOR BASE ROUTES

app.get("/contacts", (request, response) => {
  Contact.find().exec()
    .then(data => {
      return response.json(data);
    })
    .catch(() => {
      return response.json("Error");
    });
});

app.get("/vehicles", (request, response) => {
  Vehicle.find().exec()
    .then(data => {
      return response.json(data);
    })
    .catch(() => {
      return response.json("Error");
    });
});

app.get("/comments", (request, response) => {
  Comment.find().exec()
    .then(data => {
      return response.json(data);
    })
    .catch(() => {
      return response.json("Error");
    });
});

app.get("/products", (request, response) => {
  Product.find().exec()
    .then(data => {
      return response.json(data);
    })
    .catch(() => {
      return response.json("Error");
    });
});

// GET REQUESTS FOR SPECIFIC ITEM ROUTES
//
// app.get("/contacts/:id", (request, response) => {
//   const foundContact = contacts.find((contact) => {
//     return String(contact.id) === request.params.id;
//   });
//   return response.json(foundContact || null);
// });
//
// app.get("/vehicles/:id", (request, response) => {
//   const foundVehicle = vehicles.find((vehicle) => {
//     return String(vehicle.id) === request.params.id;
//   });
//   return response.json(foundVehicle || null);
// });
//
// app.get("/comments/:id", (request, response) => {
//   const foundComment = comments.find((comment) => {
//     return String(comment.id) === request.params.id;
//   });
//   return response.json(foundComment || null);
// });
//
// app.get("/products/:id", (request, response) => {
//   const foundProduct = products.find((product) => {
//     return String(product.id) === request.params.id;
//   });
//   return response.json(foundProduct || null);
// });

// POST REQUESTS FOR NEW ITEMS

app.post("/contacts", (request, response) => {
  const contact = new Contact(request.body);

  contact.save()
    .then(storedContact => {
      console.log("Contact was saved");
      return response.json(storedContact);
    })
    .catch(() => {
      console.log("Contact was NOT saved");
      return response.json("Error");
    });
});

app.post("/vehicles", (request, response) => {
  const vehicle = new Vehicle(request.body);

  vehicle.save()
    .then(storedVehicle => {
      console.log("Vehicle was saved");
      return response.json(storedVehicle);
    })
    .catch(() => {
      console.log("Vehicle was NOT saved");
      return response.json("Error");
    });
});

app.post("/comments", (request, response) => {
  const comment = new Comment(request.body);

  comment.save()
    .then(storedComment => {
      console.log("Comment was saved");
      return response.json(storedComment);
    })
    .catch(() => {
      console.log("Comment was NOT saved");
      return response.json("Error");
    });
});

app.post("/products", (request, response) => {
  const product = new Product(request.body);

  product.save()
    .then(storedProduct => {
      console.log("Product was saved");
      return response.json(storedProduct);
    })
    .catch(() => {
      console.log("Product was NOT saved");
      return response.json("Error");
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
