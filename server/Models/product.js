let mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
    name: {
        required: true,
        type: string,
    },
    description: {
        required: true,
        type: string,
    },
});
module.exports= mongoose.model ("product",schema);