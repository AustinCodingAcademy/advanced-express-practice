const Cat = require('../models/commentsModel')


var silence = new Cat({
    name: 'Silence',
    age: 13,
    outdoor: true
});
console.log(silence.name); // 'Silence'

silence.save(function (err) {
    if (err) return console.error(err);
});

Cat.find({age: 13}, function (err, cats) {
    if (err) return console.error(err);
    console.log(cats);
})

Cat.find(function (err, cats) {
    if (err) return console.error(err);
    console.log(cats);
})