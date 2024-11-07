const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        index:true
    }

}, {timestamps:true})

module.exports = mongoose.model('Category', categorySchema)