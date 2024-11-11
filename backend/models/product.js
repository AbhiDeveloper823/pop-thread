const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        lowercase:true,
        trim:true,
        index:true
    },
    category:{
        type:ObjectId,
        ref:'Category'
    },
    sub:{
        type:ObjectId,
        ref:'Sub'
    },
    desc:{
        type:String,
        required:true
    },
    short_desc:{
        type:String,
    },
    cost:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    imgUrl:{
        type:String
    },
    sold:{
        type:Number
    },
    seller:{
        type:ObjectId,
        ref:'User'
    },
    ratings:[
        {
            star:Number,
            comment:String,
            postedBy:{
                type:ObjectId,
                ref:'User'
            }
        }
    ]
})

module.exports = mongoose.model('Product', productSchema)