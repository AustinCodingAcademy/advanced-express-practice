const express = require("express");
const parser = require("body-parser");
const mon = require("mongoose")
var db = mon.connection;

const app = express()
app.use(parser.json())

mon.connect('mongodb://practice:practice@ds119930.mlab.com:19930/advanced-express-practice')
mon.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to MongoDB')
});

//Use the Routes
app.use(require("./router/commentRoute"))
app.use(require("./router/contactRoute"))
app.use(require("./router/productRoute"))
app.use(require("./router/vehicleRoute"))

app.listen(3001, () => console.log('Listening on port 3001!'))