import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
  imgUrl: String,
  year: String,
  make: String,
  model: String,
  price: String,
  km: String,
  miles: String,
  fuel: String,
  city: String,
  isNew: Boolean
});

export default mongoose.model("Vehicles", vehicleSchema);

/*
{
    "_id": 1,
    "imgUrl": "./featured-img-1.jpg",
    "year": "2004",
    "make": "HONDA",
    "model": "Accord",
    "price": "$7456.40",
    "km": 34720,
    "miles": 10615,
    "fuel": "Gas",
    "city": "Colca",
    "isNew": false
  }
*/
