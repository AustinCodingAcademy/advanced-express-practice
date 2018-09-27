let mongoose = require("mongoose");

// can put schema here
// better organization to split if going to re-use schema for multiple models
// just use let schema = require("../schemas/Person");

const schema = new mongoose.Schema({
    year: {
        required: true,
        type: String
    },
    make: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("Vehicle", schema);