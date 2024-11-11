const Product = require('../models/product')
const slugify = require('slugify');
const User = require('../models/user');

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
        let product = await Product.findOne({slug}).populate('category').populate('sub').populate('ratings.postedBy').exec()
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(400).json({'error': 'Unable To get the information of the related Products!!'})
    }
}

exports.createProduct = async(req, res)=>{
    try {
        let {title} = req.body.data
        req.body.data.slug = slugify(title)
        let u = await User.findOne({email:req.user.email}).exec()
        req.body.data.seller = u._id
        let newProduct = await new Product(req.body.data).save()
        res.status(200).json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(400).json({'error': 'Unable to create the new Product!!'})
    }
}

exports.updateProduct = async(req, res)=>{
    try {
        let {slug} = req.params
        let {title} = req.body.data
        req.body.slug = slugify(title)
        let updated = await Product.findOneAndUpdate({slug}, req.body.data, {new:true}).exec()
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


//SELLER 
exports.listProductsBySeller = async(req, res)=>{
    try{
        let {email} = req.user
        let u = await User.findOne({email}).exec()

        await Product.find({'seller':u._id}).then((result)=>{
            res.status(200).json(result)
        }).catch((err)=>{
            res.status(400).json({'err':err.message})
        })
    }catch(err){
        res.status(400).json({'err':err.message})
    }
}

//RATING
exports.rateProduct = async(req, res)=>{
    let {star, comment} = req.body
    let product = await Product.findById(req.params.id).exec()
    let user = await User.findOne({email:req.user.email}).exec()

    let existingRateObj = product.ratings.find((ele)=>(ele.postedBy).toString() === (user._id).toString())

    if(existingRateObj === undefined){
        let newRate = await Product.findByIdAndUpdate(req.params.id, {
            $push:{ratings:{star, postedBy:user._id, comment}}
        }, {new:true}).exec()
        res.status(200).json(newRate)
    }else{
        let updateRate = await Product.updateOne(
            {ratings: {$elemMatch:existingRateObj}},
            {$set:{'ratings.$.star':star, 'ratings.$.comment':comment}},
            {new:true}
        )
        res.status(200).json(updateRate)
    }

}

exports.avgRating = async(req, res)=>{
    try{
        let {slug} = req.params
        let count = 0
        await Product.findOne({slug}).then((result)=>{
            result.ratings.map((f)=>{
                count += f.star
            })
            let avg = count / (result.ratings.length)

            res.status(200).json({'avg':avg})
        }).catch((err)=>{
            res.status(400).json({'err':err.message})
        })
    }catch(err){
        res.status(400).json({'err':err.message})
    }
}

//FILTERS
exports.getProductOnCategory = async(req, res)=>{
    try{
        let {id} = req.params
        let products = await Product.find({category:id}).exec()
        res.status(200).json(products)
    }catch(err){
        console.log(err)
        res.status(400).json({'err':err.message})
    }
}

exports.getProductOnSub= async(req, res)=>{
    try{
        let {id} = req.params
        let products = await Product.find({sub:id}).exec()
        res.status(200).json(products)
    }catch(err){
        console.log(err)
        res.status(400).json({'err':err.message})
    }
}

exports.getProductsOnPrice = async(req, res)=>{
    try{
        let {price} = req.body
        let products = await Product.find({cost : {$lt:price[1], $gt:price[0]}}).populate('sub').populate('category').exec()
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({'err':err.message})
    }
    
}

exports.getMaxProductAmount = async(req, res)=>{
    try{
        let max = 0
        await Product.find({}).then((result)=>{
            result.map((f)=>{
                if(f.cost > max){
                    max = f.cost
                }
            })
        })

        res.status(200).json(max)
    }catch(err){
        res.status(400).json({'err':err.message})
    }
}