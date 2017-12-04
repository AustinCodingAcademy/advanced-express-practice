/*

// put in server/index

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;


// put in server/models/cat
var Cat = mongoose.model('Cat', { name: String });

// put in controllers
// put in create function
var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

*/
