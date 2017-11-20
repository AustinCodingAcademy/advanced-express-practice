import express from "express";
import bodyParser from "body-parser";
import commentRouter from './routes/CommentRoutes';
import contactRouter from './routes/ContactRoutes';
import productRouter from './routes/ProductRoutes';
import vehicleRouter from './routes/VehicleRoutes';
import products from './products'

const app = express();
app.use(bodyParser.json());


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});




app.use(commentRouter);
app.use(contactRouter);
app.use(productRouter);
app.use(vehicleRouter);










//        ------ COMMENTS ------

//        *** GETS COMMENTS ***

// app.get("/comments", (request, response) => {
//   return response.json(comments);
// });

//       *** GETS SPECIFIC COMMENT BASED ON ID ***

// app.get("/comments/:id", (request, response) => {
//   let id = request.params.id;
//   let commentID = comments.find((comment) => {
//     if(comment._id == id){
//      return comment
//     }
//     else response.send("There is no such comment")
//   })
//   return response.json(commentID);
// });

//      *** CREATE A POST IN COMMENTS ***

// app.post("/comments", (request, response) => {
//   comments.push(request.body);


//        ------ CONTACTS ------

//        *** GETS CONTACTS ***

// app.get("/contacts", (request, response) => {
//   return response.json(contacts);
// });

//        *** GETS SPECIFIC CONTACT BASED ON ID *** 

// app.get("/contacts/:id/", (request, response) => {
//   let id = request.params.id;
//   let contactID = contacts.find((contact) => {
//     if(contact._id == id){
//      return contact
//     }
//     else response.send("There is no such contact")
//   })
//   return response.json(contactID);
// });

//      *** CREATE A POST IN CONTACTS ***

// app.post("/contacts", (request, response) => {
//   contacts.push(request.body);
// })

//        ------ PRODUCTS ------

//        *** GETS PRODUCTS ***

// app.get("/products/", (request, response) => {
//   return response.json(products);
// });

//     *** GETS SPECIFIC PRODUCT BASED ON ID ***

// app.get("/products/:id/", (request, response) => {
//   let id = request.params.id;
//   let productID = products.find((product) => {
//     if(product._id == id){
//      return product
//     }
//     else response.send("There is no such product")
//   })
//   return response.json(productID);
// });

//       *** CREATE A POST IN PRODUCTS ***

// app.post("/products", (request, response) => {
//   products.push(request.body);
// })

//      ------ VEHICLES ------

//      *** GETS VEHICLES ***

// app.get("/vehicles", (request, response) => {
//   return response.json(vehicles);
// })

//     *** GETS SPECIFIC VEHICLE BASED ON ID ***

// app.get("/vehicles/:id/", (request, response) => {
//   let id = request.params.id;
//   let vehicleID = vehicles.find((vehicle) => {
//     if(vehicle._id == id){
//      return vehicle
//     }
//     else response.send("There is no such vehicle")
//   })
//   return response.json(vehicleID);
// });

//      *** CREATE A POST IN VEHICLES ***

// app.post("/vehicles", (request, response) => {
//   vehicles.push(request.body);
// })

