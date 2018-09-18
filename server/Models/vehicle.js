let mongoose = require ("mongoose");
 const schema = new mongoose.schema ({
     year:{
         required: true,
         type: string,
     },
     make:{
         required: true,
         type: string,
     },
     model: {
         required: true,
         type: string,
     },
    });
    module.exports=
    mongoose.model ("vehicle",schema);
