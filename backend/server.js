const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config()


//DATABASE CONFIGURATION
mongoose.connect(`mongodb+srv://abhi:${process.env.DB_PASS}@cluster0.ddjzu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`, {
}).then(()=>{
    console.log('DATABASE CONNECTED!!')
}).catch((err)=>{
    console.log('DATABASE NOT CONNECTED!!')
})

//MIDDLEWARES
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({limit:'50mb'}))

fs.readdirSync('./routes').map((f)=>{
    if(f[0] != "."){
        app.use(require(`./routes/${f}`))
    }
})

   

app.get('/', (req, res)=>{
    res.send("WELCOME MASTER!!")
})

app.listen(4000, (err)=>{
    if(err){
        console.log("SERVER CANNOT BE STARTED!!")
    }else{
        console.log("SERVER STARTED!!")
    }
})