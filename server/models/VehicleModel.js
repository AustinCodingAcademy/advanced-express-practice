let mongoose=require("mongoose");

const schema= new mongoose.Schema({
    year: {
        type: Number
    },
    make: {
        type: String
    },
    model:{
        type: String
    }
});

module.exports=mongoose.model("Vehicle", schema);