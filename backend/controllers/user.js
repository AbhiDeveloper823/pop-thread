const user = require('../models/user')
const User = require('../models/user')

exports.getUser = async(req, res)=>{
    let {email} = req.user
    await User.findOne({email}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json({'error':err.message})
    })
}

exports.updateUser = async(req, res)=>{
    try{
        let {email} = req.user
        let {name, address, dob, phone} = req.body.data
        await user.findOneAndUpdate({email}, {name, address, dob, phone}, {new:true}).then((result)=>{
            res.status(200).json({'success':'USER INFO UPDATED SUCCESSFULLY!!'})
        }).catch((err)=>{
            res.status(400).json({'err':'User info cannot be updated!!'})
        })

    }catch(err){
        res.status(400).json({'err':err.message})
    }
}