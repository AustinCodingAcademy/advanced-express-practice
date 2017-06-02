import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  review: Number,
  rating: Number,
  imgUrl: String,
  price: String,
  category: String,
  reviews: [{
    description: String,
    rating: Number
  }],
});

export default mongoose.model("Product", productSchema);

/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

"_id": 1,
"name": "Body Luxuries Sweet Lavender Hand Sanitizer",
"description": "Psychotropic drugs, not elsewhere classified",
"reviews": 46,
"rating": 2,
"imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
"price": "$95.11",
"category": "food",
"reviews": [{
  "description": "architect revolutionary deliverables",
  "rating": 2
}, {
  "description": "orchestrate dynamic schemas",
  "rating": 2
}, {
  "description": "aggregate integrated convergence",
  "rating": 4
}, {
  "description": "incubate strategic e-tailers",
  "rating": 5
}, {
  "description": "transition synergistic partnerships",
  "rating": 1
}, {
  "description": "matrix dynamic web-readiness",
  "rating": 1
}, {
  "description": "exploit impactful platforms",
  "rating": 4
}, {
  "description": "repurpose mission-critical schemas",
  "rating": 1
}, {
  "description": "iterate open-source interfaces",
  "rating": 3
}, {
  "description": "repurpose impactful interfaces",
  "rating": 1
}]
}
*/
