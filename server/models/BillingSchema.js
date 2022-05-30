const mongoose = require('mongoose');

const justSchema = new mongoose.Schema({
    bill_no:{
        type: 'Number',
        required: true
    },
    name:{
        type: 'String',
        required: true
    },
    phone_no:{
        type:'Number',
        required: true
    },
    car_name:{
        type:'String',
        required: true
    },
    car_modal:{
        type:'String',
        required: true
    },
    car_specification:{
        type:'String',
        required: true
    },
})

module.exports = mongoose.model('BillingData',justSchema)