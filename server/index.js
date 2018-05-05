const express = require("express");
const parser = require("body-parser");

const app = express()
app.use(parser.json())


//Use the Routes
app.use(require("./router/commentRoute"))
app.use(require("./router/contactRoute"))
app.use(require("./router/productRoute"))
app.use(require("./router/vehicleRoute"))

app.listen(3002, () => console.log('Listening on port 3002!'))