const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema({
    name: {
        required: true,
        type: string
    },
    description: {
        required: true,
        type: string
    }
});