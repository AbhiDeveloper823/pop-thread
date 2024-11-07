const Sub = require('../models/sub')
const slugify = require('slugify')

exports.listSubs = async(req, res)=>{
    try {
        let subs = await Sub.find({}).populate('category').exec()
        res.status(200).json(subs)
    } catch (error) {
        res.status(400).json({'error': 'Unable To get All The Subs!!'})
    }
}

exports.readSub = async(req, res)=>{
    try {
        let {slug} = req.params
        let sub = await Sub.findOne({slug}).exec()
        res.status(200).json(sub)
    } catch (error) {
        res.status(400).json({'err': `${slug} was not found!!`})
    }
}
exports.createSub = async(req, res)=>{
    let {name, category} = req.body
    try {
        let newSub = await new Sub({name, slug:slugify(name), category}).save()
        res.status(200).json(newSub)
    } catch (error) {
        console.log(error)
        res.status(400).json({'err':`${name} is not created!!`})
    }
}
exports.updateSub = async(req, res)=>{
    try {
        let {slug} = req.params
        let {name, category} = req.body
        let updated = await Sub.findOneAndUpdate({slug}, {name, category, slug:slugify(name)}, {new:true}).exec()
        res.status(200).json(updated)
    } catch (error) {
        res.status(400).json({'error': `${slug} was not updated!!`})
    }
}
exports.removeSub = async(req, res)=>{
    let {slug} = req.params
    try {
        await Sub.deleteOne({slug})
        res.status(200).json({'success': `${slug} is successfully deleted!!`})
    } catch (error) {
        res.status(400).json({'error':`${slug} was not deleted!!`})
    }
}

