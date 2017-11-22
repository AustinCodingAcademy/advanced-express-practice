import express from "express";
import contactRoutes from "./routes/contactRoutes";
import commentRoutes from "./routes/commentRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";
import productRoutes from "./routes/productRoutes";
import bodyParser from "body-parser";
// import { list, show, create } from "./controllers/ContactController";


const app = express();
app.use(bodyParser.json());

app.use(contactRoutes);
app.use(commentRoutes);
app.use(vehicleRoutes);
app.use(productRoutes);

//Getting the data... the entire list
// app.get("/contacts", list);
//Getting the data... just one entity
// app.get("/contacts/:id", show);
//posting new entries to the database
// app.post("/contacts", create);

//Getting the data... the entire list
// app.get("/vehicles", (request, response)=> {
//   return response.json(vehicles);
// });
//
// app.get("/comments", (request, response)=> {
//   return response.json(comments);
// });
//
// app.get("/products", (request, response)=> {
//   return response.json(products);
// });


//Getting the data... just one entity
// app.get("/vehicles/:id", (request, response)=> {
//   console.log(vehicles.find(vehicle => vehicle._id == request.params.id));
//   return response.json(vehicles.find(vehicle => vehicle._id == request.params.id));
// });
//
// app.get("/comments/:id", (request, response)=> {
//   return response.json(comments.find(comment => comment._id == request.params.id));
// });
//
// app.get("/products/:id", (request, response)=> {
//   return response.json(products.find(product => product._id == request.params.id));
// });


//posting new entries to the database
// app.post("/vehicles", (request, response)=> {
//   return response.json(vehicles.push(request.body));
// });
//
// app.post("/comments", (request, response)=> {
//   return response.json(comments.push(request.body));
// });
//
// app.post("/products", (request, response)=> {
//   response.json(products.push(request.body));
//   return 'contact added';
// });


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
