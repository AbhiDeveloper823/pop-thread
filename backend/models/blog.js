const mongoose = require('mongoose')

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
    images:Array
}, {timestamps:true})

module.exports = mongoose.model('Blog', blogSchema)