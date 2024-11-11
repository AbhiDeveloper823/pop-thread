const Cart = require('../models/cart')
const User = require('../models/user')
const Product = require('../models/product')

exports.userCart = async(req, res)=>{
    try {
        let products = []
        let {cart} = req.body

        let user  = await User.findOne({email : req.user.email}).exec()
        let existingCartofUser = await Cart.findOne({orderedBy:user._id}).exec()
        console.log("EXISTING CART>>>",existingCartofUser)
        if(existingCartofUser){
            products = existingCartofUser.products
            await Cart.deleteOne({orderedBy:user._id}).exec()
        }

        let object = {}
        object.product = cart[0].id;
        object.count = cart[0].count;
        object.size = cart[0].size
        let {cost} = await Product.findById(cart[0].id).select('cost').exec()
        object.price = cost
        products.push(object)

        let cartTotal = 0
        for(i=0; i<products.length; i++){
            cartTotal = cartTotal + products[i].price * products[i].count
        }

        let newCart = await new Cart({
            products:products,
            totalAmount:cartTotal,
            orderedBy:user._id
        }).save()

        console.log("New Cart>>", newCart)
        res.status(200).json({'success':'true'})
    } catch (error) {
        console.log(error)
        res.status(400).json({'error':'Some Error'})
    }
}

exports.listUserCart = async(req, res)=>{
    try {
        let user  = await User.findOne({email : req.user.email}).exec()
        let cart = await Cart.findOne({orderedBy:user._id}).populate('products.product').populate('products.product.category').populate('products.product.sub').exec()
        res.status(200).json(cart)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.removeProductUserCart = async(req, res)=>{
    try{
        let {id} = req.params
        let {_id} = await User.findOne({email:req.user.email}).exec()
        let cart = await Cart.findOne({orderedBy:_id}).exec()

        cart.products.map(async(f)=>{
            if(f.product._id == id){
                await Cart.findOneAndUpdate({orderedBy:_id},{$pull :{products:id}}, {new:true}).save()
            }
        })

        console.log('USER CART>>', cart)
    }catch(err){
        console.log(err)
        res.status(400).json(error.message)
    }
}

exports.removeUserCart = async(req, res)=>{
    try {
        let user = await User.findOne({email:req.user.email}).exec()
        let cart  = await Cart.deleteOne({orderedBy:user._id}).exec()
        res.status(200).json({'success':'Your cart is successfully emptied!!'})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.productInCartCheck = async(req, res)=>{
    try{
        let {id} = req.params
        let {email} = req.user
        let exists = false
        let count = 0

        let {_id} = await User.findOne({email}).exec()
        let cart = await Cart.findOne({orderedBy:_id}).exec()

        if(cart){
            if(cart.products){
                cart.products.map((i)=>{
                    if(i.product == id){
                        exists = true
                        count = i.count
                    }
                })
            }
        }
        
        res.status(200).json({exists, count})
    }catch(err){
        console.log(err)
        res.status(400).json({'err':err.message})
    }
}