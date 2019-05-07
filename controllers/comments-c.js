let comments = require('../comments');

exports.list =( req, res )=>{
    return res.json(comments);
}

exports.show =(req, res)=>{
    let id = Number(req.params.id);
    let comment = comments.find( element => element._id === id );
    return res.json(comment);
}

exports.create =( req, res )=>{
    let addComment = req.body;
    //let largest = comments.reduce((prevNum, currNum)=>{return (currNum._id > prevNum._id) ?currNum._id : prevNum._id})
    addComment._id = comments[comments.length - 1]._id + 1;
    comments.push(addComment);
    return res.json(comments);
}