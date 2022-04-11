const mongoose = require("mongoose");



const ProductSchema = mongoose.Schema({

    title: {type: String},

    desc: {type: String, required: true},

    img:{type: String, required:true},

    categories:{type:Array},

    size:{type: Array},

    brand: {type:String},

    color: {type: Array},

    price:{type:Number, required:true},

    inStock:{type:Boolean, default:true},


    ratings:[


        {


            star: Number,

            name:{type:String},

            comment:{type:String},

            postedBy:{type:String}
        }
    ]

},

{timestamps: true}

);


ProductSchema.index({'$**': 'text'});

module.exports = mongoose.model("Product", ProductSchema);