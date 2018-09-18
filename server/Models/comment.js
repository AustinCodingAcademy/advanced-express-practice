let mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    body:{
        required: true,
        type: string,
    }.

module.exports= mongoose.model ("comment",schema);