let express = require("express");
let bodyParser = require("body-parser");
let comment = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();
app.use(bodyParser.json());

app.get('/contacts', (request,response,next) => {
    return response.json(contacts);
   });
app.get('/vehicles', (request,response,next) => {
    return response.json(vehicles)
   });
app.get('/comment', (request,response,next) => {
    return response.json(comments)
   });
app.get('/products', (request,response,next) => {
    return response.json(products)
   });
app.get('/contacts/:id', (request,response,next) => {
    let contactId = request.params.id;
    let myContact = contacts.find((contact) => {
        return (contact._id == contactId)
    });
        return response.json(myContact)
    });
app.get('/vehicles/:id', (request,response,next) => {
    let carId = request.params.id;
    let myCar = vehicles.find((car) => {
        return (car._id == carId)
    });
        return response.json(myCar)
    });
app.get('/comment/:id', (request,response,next) => {
    let commentId = request.params.id;
    let myComment = comments.find((comment) => {
        return (comment._id == myComment)
    });
        return response.json(myComment)
    });
app.get('/products/:id', (request,response,next) => {
    let prodId = request.params.id;
    let myProd = products.find((product) => {
        return (product._id == prodId)
    });
        return response.json(myProd)
    });

app.post('/contacts', (request, response, next) => {
    contacts.push(request.body);
    return response.json(request.body);
      });
app.post('/vehicles', (request, response, next) => {
    vehicles.push(request.body);
    return response.json(request.body);
      });
app.post('/comment', (request, response, next) => {
    comments.push(request.body);
    return response.json(request.body);
      });
app.post('/products', (request, response, next) => {
    products.push(request.body);
    return response.json(request.body);
      });
         
 app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
        }
    console.log("Web server is now living in apartment 3001")

});

