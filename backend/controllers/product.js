const Product = require('../models/product')
const slugify = require('slugify')

exports.listProducts = async(req, res)=>{
    try {
        let products;
        if(req.query.count){
            let count = Number(req.query.count)
            products = await Product.find({}).limit(count).sort({'createdAt':-1}).exec()
        }else{
            products = await Product.find({}).exec()
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({'error': 'Unable To Get All The Products!'})
    }
}



exports.listProductsCount = async(req, res)=>{
    try{
        let count = await Product.find({}).estimatedDocumentCount().exec()
        res.status(200).json(count)
    }catch(err){
        res.status(400).json(err.message)

    }
}

exports.readProduct = async(req, res)=>{
    try {
        let {slug} = req.params
        let product = await Product.findOne({slug}).populate('category').populate('subs').populate('ratings.postedBy', 'address').exec()
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({'error': 'Unable To get the information of the related Products!!'})
    }
}

exports.createProduct = async(req, res)=>{
    try {
        let {title} = req.body
        req.body.slug = slugify(title)
        let newProduct = await new Product(req.body).save()
        res.status(200).json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(400).json({'error': 'Unable to create the new Product!!'})
    }
}

exports.updateProduct = async(req, res)=>{
    try {
        let {slug} = req.params
        let {title} = req.body
        req.body.slug = slugify(title)
        let updated = await Product.findOneAndUpdate({slug}, req.body, {new:true}).exec()
        res.status(200).json(updated)
    } catch (error) {
        res.status(400).json({'error': 'Product was not updated....Try Again!!'})
    }
}

exports.removeProduct = async(req, res)=>{
    try {
        let {slug} = req.params
        let deleted = await Product.deleteOne({slug}).exec()
        res.status(200).json({'success': `${slug} is successfully deleted!!`})
    } catch (error) {
        res.status(400).json({'error': `${slug} was not deleted...Try Again!!`})
    }
}

// exports.listRelatedProduct = async(req, res)=>{
//     let {productId} = req.params
//     let product = await Product.findById(productId).exec()
//     let related = await Product.find({
//         _id:{$ne:productId},
//         category:product.category
//     }).exec()
//     res.status(200).json(related)
// }
