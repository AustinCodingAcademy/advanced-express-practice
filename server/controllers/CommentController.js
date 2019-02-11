var Comment = require("../models/CommentModel");
var queryHelper = require("../queryhelpers/QueryHelper");
var numberOfComments = 0;



exports.list = function list(request, response) {
    queryHelper.getRecords(Comment, (result) => {
        numberOfComments = result.length;
        return response.json(result);
    });
}

exports.show = function show(request, response) {
    queryHelper.getRecordById(Comment, parseInt(request.params.id), (result) =>  {
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
    let tempBody = request.body;
    tempBody["_id"] = numberOfComments + 1;
    let tempRecord = new Comment(tempBody);
    tempRecord.save();
    exports.list;
    return response.json(tempRecord);
}
