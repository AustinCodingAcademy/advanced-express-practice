const Schema = mongoose.Schema;

let commentsSchema = new Schema({
    body: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('comment', schema);