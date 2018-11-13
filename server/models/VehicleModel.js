let mongoose = require("mongoose");

//I want to code the definition of what the car looks like

const schema = new mongoose.Schema({
    year: {
        type: String
    },
    make: {
        type: String
    },
    model: {
        type: String
    }
 
});

module.exports =  mongoose.model("Vehicle", schema);