const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
    },
    postedBy:{
        type:ObjectId,
        ref:'User'
    }
}, {timestamps:true})

module.exports = mongoose.model('Blog', blogSchema)