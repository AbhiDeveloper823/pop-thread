const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const subSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type: String,
        required:true
    },
    category:{
        type:ObjectId,
        ref:'Category'
    }
}, {timestamps: true})

module.exports = mongoose.model('Sub', subSchema)

