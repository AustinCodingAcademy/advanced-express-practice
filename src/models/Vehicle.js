import mongoose from "mongoose";

const schema = new mongoose.Schema({
    imgUrl: {
        type: "String"
    },
    year: {
        required: true,
        type: "Number"
    },
    make: {
        required: true,
        type: "String"
    },
    model: {
        required: true,
        type: "String"
    },
    price: {
        required: true,
        type: "String"
    },
    km: {
        required: true,
        type: "Number"
    },
    miles: {
        required: true,
        type: "Number"
    },
    fuel: {
        type: "String"
    },
    city: {
        type: "String"
    }
});

export default mongoose.model("Vehicle", schema);