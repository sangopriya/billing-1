const mongoose = require('mongoose')

const addCarTypeAmount = new mongoose.Schema({
  
    carSpecify : {
        type: 'String',
        required : true,
    },
    carCategory : {
        type: 'String',
        required : true,
    },
    carType : {
        type: 'String',
        required : true,
    },
    amount : {
        type: 'Number',
        required :true
    }

})
module.exports = mongoose.model('addAmount' , addCarTypeAmount)