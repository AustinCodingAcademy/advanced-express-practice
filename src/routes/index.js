import vehicles from "../vehicles";
import express from "express";
import contacts from "../contacts";
import comments from "../comments";
import products from "../products";
const router = express.Router();
import list from "../controllers/ContactsController";
import vehicleList from "../controllers/VehiclesController";
import productsList from "../controllers/ProductsController";
import commentList from "../controllers/CommentsControllers";


// Express route to get all things
router.get("/contacts/", (request, response) => {
  list(request, response);
});

router.get("/vehicles/", (request, response) => {
  vehicleList(request, response);
});

router.get("/comments/", (request, response) => {
  commentList(request, response);
});

router.get("/products/", (request, response) => {
  productsList(request, response);
});




// Express route to get one thing

router.get("/contacts/:id", (request, response) => {
  const contactsId = comments.find(c => c.id === request.params.id);
  return response.json({contactsId});
});

router.get("/vehicles/:id", (request, response) => {
  const vehiclesId = comments.find(c => c.id === request.params.id);
  return response.json({vehiclesId});
});

router.get("/comments/:id", (request, response) => {
  const commentsId = comments.find(c => c.id === request.params.id);
  return response.json(commentsId);
});

router.get("/products/:id", (request, response) => {
  const productsId = comments.find(c => c.id === request.params.id);
  return response.json({productsId});
});




// // Express route to get create one thing
// app.post("/contacts/", (request, response) => {
//   contacts.push(request.body)
//   return response.json(request.body);
// });
//
// app.post("/vehicles/", (request, response) => {
//   vehicles.push(request.body)
//   return response.json(request.body);
// });
//
// app.post("/comments/", (request, response) => {
//   comments.push(request.body)
//   return response.json(request.body);
// });
//
// app.post("/products/", (request, response) => {
//   products.push(request.body)
//   return response.json(request.body);
// });

export default router;
