const Schema = mongoose.Schema;

let productsSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('product', schema);