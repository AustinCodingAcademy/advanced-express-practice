const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vehiclesSchema = new Schema({
    year: {
        required: true,
        type: number
    },
    make: {
        required: true,
        type: string
    },
    model: {
        required: true,
        type: string
    }
});