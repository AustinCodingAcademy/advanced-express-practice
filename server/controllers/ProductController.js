var Product = require("../models/ProductModel");
var queryHelper = require("../queryhelpers/QueryHelper");
var productCount = 0;


exports.list = function list(request, response) {
    queryHelper.getRecords(Product, (result) => {
        productCount = result.length;
        return response.json(result);
    });
}

exports.show = function show(request, response) {
    queryHelper.getRecordById(Product, parseInt(request.params.id), (result) =>  {
        return response.json(result);
    });
}

exports.create = function create(request, response) {  
    let tempBody = request.body;
    tempBody["_id"] = productCount + 1;
    let temp = new Product(tempBody);
    temp.save();
    exports.list;
    return response.json(temp);
}
