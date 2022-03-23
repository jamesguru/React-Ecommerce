const mongoose = require("mongoose");



const OrderSchema = mongoose.Schema({

    name: {type: String , required:true},

    products: {type:Array, required:true},

    total: {type: Number, required: true},

    address:{type:String, required:true},

    phone:{type:Number,required:true},

    status: {type:String, default:"pending"}

    
},

{timestamps: true}

);

module.exports = mongoose.model("Order", OrderSchema);