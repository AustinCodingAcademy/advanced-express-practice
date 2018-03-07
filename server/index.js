import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

//Get arrays

app.get("/contacts",function (request,response,next){
  console.log("You want to get all contacts");
  return response.json(contacts);
});

app.get("/vehicles",function (request,response,next){
  console.log("You want to get all vehicles");
  return response.json(vehicles);
});

app.get("/comments",function (request,response,next){
  console.log("You want to get all comments");
  return response.json(comments);
});

app.get("/products",function (request,response,next){
  console.log("You want to get all products");
  return response.json(products);
});

//Get single element

app.get("/contacts/:contactID",function (request,response,next){
  let id = request.params.contactID; //set id equal to the request in the url
  let contact = contacts.find((c)=>{
    if (c._id==id){ //double equals to compare a number and a string: 1 and "1"
      return true;
    }else{
      return false;
    }
  })
  return response.json(contact);
});

app.get("/vehicles/:vehicleID",function (request,response,next){
  let id = request.params.vehicleID; //set id equal to the request in the url
  let vehicle = vehicles.find((v)=>{
    if (v._id==id){ //double equals to compare a number and a string: 1 and "1"
      return true;
    }else{
      return false;
    }
  })
  return response.json(vehicle);
});

app.get("/comments/:commentID",function (request,response,next){
  let id = request.params.commentID; //set id equal to the request in the url
  let comment = comments.find((c)=>{
    if (c._id==id){ //double equals to compare a number and a string: 1 and "1"
      //console.log("Inside if statement: true")
      return true;
    }else{
      return false;
    }
  })
  return response.json(comment);
});

app.get("/products/:productID",function (request,response,next){
  let id = request.params.productID; //set id equal to the request in the url
  let product = products.find((p)=>{
    if (p._id==id){ //double equals to compare a number and a string: 1 and "1"
      return true;
    }else{
      return false;
    }
  })
  return response.json(product);
});
//Post element

app.post("/contacts", function (request, response, next){
  contacts.push(request.body)
  return response.json(request.body);
});

app.post("/vehicles", function (request, response, next){
  vehicles.push(request.body)
  return response.json(request.body);
});

app.post("/comments", function (request, response, next){
  comments.push(request.body)
  return response.json(request.body);
});

app.post("/products", function (request, response, next){
  products.push(request.body)
  return response.json(request.body);
});

//

app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});
