const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        index:true
    },
    name:{
        type:String
    },
    info:{
        type:Object
    },
    role:{
        type:String,
        default:'customer',
        enum:['seller', 'customer']
    }

}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)