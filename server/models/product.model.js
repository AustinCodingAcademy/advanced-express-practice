// * ProductModel - name, description


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description:{type: String, required:true}
    
});


module.exports = mongoose.model('Product', ProductSchema);