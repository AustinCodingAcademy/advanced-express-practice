let mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    name:{
        required: true,
        type: string
    },
    occupation:{
        type: string
    },
    avatar:{
        type: string},
    });

module.exports= mongoose.model ("contact",schema);