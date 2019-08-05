const MongoClient = require('mongodb').MongoClient;
let db = null;

exports.connect = function (done) {
    const url = "mongodb+srv://bombdotcom:USxCBX@cluster0-jhgui.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(url, { useNewUrlParser: true })
    client.connect(getProducts);
    function getProducts(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Connected successfully to server");
        db = client.db("productDatabase");
        if (done) {
            done()
        }
    }
}

exports.getDatabase = function () {
    return db;
}