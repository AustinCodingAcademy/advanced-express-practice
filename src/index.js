import express from "express";
import products from "./products";
import bodyParser from "body-parser";
import productsRouter from "./routes/productsRoute"
import contactsRouter from "./routes/contactsRoute";
import commentRouter from "./routes/commentsRoute";
import vehicleRouter from "./routes/vehiclesRoute";
import mongoose from "mongoose";


const app = express();

mongoose.connect("mongodb://localhost/ExpressPracticeDB");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are Connected");
});


app.use(bodyParser.json());

app.use(vehicleRouter);
app.use(commentRouter);
app.use(contactsRouter);
app.use(productsRouter)


// Comments section
// app.get("/comments", (request, response) => {
//   response.json(comments);
// });
//
// app.get("/comments/:id", (request, response) => {
//   const userComments = comments.find((comment) => {
//     return String(comment.id === request.params.id);
//   });
//   return response.json(userComments);
// });
//
// app.post("/comments", (request, response) => {
//   const addUserComment = {
//     id: comments.length + 1,
//     ...request.body
//   };
//   comments.push(request.body);
//   return response.json(addUserComment);
// });

// app.delete("/comments", (request, response) => {
//   const deleteUserComment = {
//     id: comments.length - 1
//   };
//   comments.splice(request.body);
//   return response.json(deleteUserComment);
// });

// Products section
// app.get("/products", (request, response) => {
//   response.json(products);
// });
//
// app.post("/products", (request, response) => {
//   const addUserProduct = {
//     id: products.length + 1,
//     ...request.body
//   };
//   products.push(request.body);
//   return response.json(addUserProduct);
// });

// Vehicle section
// app.get("/vehicles", (request, response) => {
//   response.json(vehicle);
// });
//
//
//
// app.post("/vehicles", (request, response) => {
//   const addUserVehicle = {
//     id: vehicle.length + 1,
//     ...request.body
//   };
//   vehicle.push(request.body);
//   return response.json(addUserVehicle);
// });

// Contacts section
// app.get("/contacts", (request, response) => {
//   response.json(contacts);
// });
//
// app.post("/contacts", (request, response) => {
//   const addUserContacts = {
//     id: contacts.length + 1,
//     ...request.body
//   };
//   contacts.push(request.body);
//   return response.json(addUserContacts);
// });




app.get("/*", (request, response) => {
  response.json({
    Its: "Broke"
  });
});

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if (err) {
    console.log("There was an error loading");
  }
  console.log(`Listening on port:${port}`);
});
