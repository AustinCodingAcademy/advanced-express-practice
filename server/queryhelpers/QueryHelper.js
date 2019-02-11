function getRecords(SchemaToUse, done) {
    SchemaToUse.find(function(err, records) {
        if (err)
            return console.log(err);
        numberOfComments = records.length;
        done(records);    
    });
}

function getRecordById(SchemaToUse, id, done) {
    SchemaToUse.findById(id, function(err, record) {
        if (err)
            return err;
        done(record);
    });
}

module.exports.getRecords = getRecords;
module.exports.getRecordById = getRecordById;