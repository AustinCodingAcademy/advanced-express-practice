var Contact = require("../models/ContactModel");
var queryHelper = require("../queryhelpers/QueryHelper");
var numberOfContacts = 0;



exports.list = function list(request, response) {
    queryHelper.getRecords(Contact, (result) => {
        numberOfContacts = result.length;
        return response.json(result);
    });
}

exports.show = function show(request, response) {
    queryHelper.getRecordById(Contact, parseInt(request.params.id), (result) =>  {
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
    let tempBody = request.body;
    tempBody["_id"] = numberOfContacts + 1;
    let tempRecord = new Contact(tempBody);
    tempRecord.save();
    exports.list;
    return response.json(tempRecord);
}
