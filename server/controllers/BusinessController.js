let business = require('../models/BusinessModel');
//get request

exports.list =  function list(request, response) {
    return response.json(business);
   }
   exports.show = function show(request, response) {
        business.find({}, (err, bus)=>{
        return response.json(bus);
    })
   }


  // for people to add listings 
   exports.create =  function create(request, response) {
    const temp = request.body
    temp["_id"] = business.length +1;
    business.push(temp);
    return response.json(temp);
   }
 
