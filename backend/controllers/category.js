const Category = require('../models/category')
const slugify = require('slugify')

exports.listCategories = async(req, res)=>{
    try {
        let categories = await Category.find({}).exec()
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({'err': 'Unable To get The Categories!!'});
    }
}

exports.readCategory = async(req, res)=>{
    try {
        let {slug} = req.params
        let category = await Category.findOne({slug}).exec()
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({'err':`${slug} was not found!!`})
    }
}

exports.createCategory = async(req, res)=>{
    try {
        let {name} = req.body
        let newCategory = await new Category({name, slug:slugify(name)}).save()
        res.status(200).json(newCategory)
    } catch (error) {
        res.status(400).json({'err': 'Error while creating new category!!'})
    }
}

exports.updateCategory = async(req, res)=>{
    try {
        let {slug} = req.params
        let {name} = req.body
        console.log(slug, name)
        let updated = await Category.findOneAndUpdate({slug}, {name, slug:slugify(name)}, {new:true}).exec()
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(400).json({'err':`${slug} was not updated!!`})
    }
}

exports.removeCategory = async(req, res)=>{
    try {
        let {slug} = req.params
        let t = await Category.deleteOne({slug})
        res.status(200).send(`${slug} is deleted.`)
    } catch (error) {
        res.status(400).json({'err':`Your request can't be processed.`})
    }
}

// exports.listCategoryOnSub = async(req, res)=>{
//     try{
//         let {id}= req.params
//         let subs = await Sub.find({category:id}).exec()
//         res.status(200).json(subs)
//     }catch(error){
//         res.status(400).json({'error':'Cannot Get The Subs Of the Given Category!!'})
//     }
   
// }
