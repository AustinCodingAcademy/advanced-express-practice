import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: "String"
    },
    description: {
        required: true,
        type: "String"
    },
    imgUrl: {
        type: "String"
    },
    price: {
        type: "String"
    },
    category: {
        required: true,
        type: "String"
    },
    reviews: {
        type: "Array"
    }
});

export default mongoose.model("Product", schema);