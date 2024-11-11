const user = require('../models/user')
const User = require('../models/user')

exports.createOrUpdateUser = async(req, res)=>{
    let {email} = req.user

    await User.findOneAndUpdate({email}, {email}, {new:true}).then(async(result)=>{
        if(result){
            res.status(200).json(result)
        }else{
            let newUser = await new User({email}).save()
            res.status(200).json(newUser)
        }
    }).catch((err)=>{
        res.status(400).json(err)
    })
}
