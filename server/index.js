const express = require("express");
const parser = require("body-parser");


const commentRouter = require("./router/commentRoute")
const contactRouter = require("./router/contactRoute")
const productRouter = require("./router/productRoute")
const vehicleRouter = require("./router/vehicleRoute")

const app = express()
app.use(parser.json())

app.use(commentRouter)
app.use(contactRouter)
app.use(productRouter)
app.use(vehicleRouter)

app.listen(3002, () => console.log('Listening on port 3002!'))