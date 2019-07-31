const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/advanced-express-practice',{useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

