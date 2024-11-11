const User = require('../models/user')
const Cart = require('../models/cart')
const Order = require('../models/order')
const Product = require('../models/product')
const uniqid = require('uniqid')
const user = require('../models/user')

exports.createOrder  = async(req, res)=>{
    try {
        const {razorResponse} = req.body
        const user = await User.findOne({email:req.user.email}).exec()
        const cart = await Cart.findOne({orderedBy:user._id}).exec()
        let newOrder = await new Order({
                products:cart.products,
                paymentStatus:'Paid',
                orderedBy:user._id,
                paymentIntent:razorResponse,
            }).save()

        let bulkOption = cart.products.map((item)=>{
            return {
                updateOne:{
                    filter:{_id:item.product._id},
                    update: {$inc: {quantity: -item.count, sold: +item.count}}
                }
            }
        })
        let productUpdate = await Product.bulkWrite(bulkOption, {})
        res.status(200).json(newOrder)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

//CREATE ORDER WITH COD
exports.createOrderWithCOD = async(req, res)=>{
    try {
        // const {coupon} = req.body
        const user = await User.findOne({email:req.user.email}).exec()
        const cart = await Cart.findOne({orderedBy:user._id}).exec()
        let finalAmount = cart.totalAmount
        // if(coupon){
        //     finalAmount = cart.totalAmountAfterDiscount * 100
        // }else{
        //     finalAmount = cart.totalAmount * 100
        // }
        let paymentIntent = {
            amount:finalAmount,
            payment_method:'Cash On Delivery',
            order_id:uniqid('popthreads-'),
            orderId:this.order_id
        }
        let newOrder = await new Order({
            products:cart.products,
            paymentStatus:'Cash On Delivery',
            orderedBy:user._id,
            paymentIntent
        }).save()
        let bulkOption = cart.products.map((item)=>{
            return {
                updateOne:{
                    filter:{_id:item.product._id},
                    update: {$inc: {countInStock: -item.count, sold: +item.count}}
                }
            }
        })
        let productUpdate = await Product.bulkWrite(bulkOption, {})
        res.status(200).json(newOrder)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.listOrderBySeller = async(req, res)=>{
    try{
        let orders = []
        let {email} = req.user
        let {_id} = await User.findOne({email}).exec()
        await Order.find({}).populate('products.product').populate('orderedBy').then((result)=>{
            result.map((f)=>{
                f.products.map((i)=>{
                    if(i.product.seller = _id){
                        orders.push(f)
                    }
                })
            })
            
        })

        res.status(200).json(orders)
    }catch(err){
        res.status(400).json(err.message)
    }
}

exports.listAllOrders = async(req, res)=>{
    try {
        let {sort} = req.body
        const orders = await Order.find({}).sort({'createdAt':sort}).populate('orderedBy').populate('products.product').exec()
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
exports.listOrderOnCriteria = async(req, res)=>{
    try {
        let {deliveryStatus} = req.body
        let orders = await Order.find({deliveryStatus}).sort({createdAt:'-1'}).populate('orderedBy').populate('products.product').exec()
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
exports.listUserOrder = async(req, res)=>{
    try {
        let user = await User.findOne({email:req.user.email}).exec()
        let orders = await Order.find({orderedBy:user._id}).populate('products.product').populate('orderedBy').sort({'createdAt':-1}).exec()
        res.status(200).json(orders)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.readOrder = async(req, res)=>{
    try {
        let {id} = req.params
        const order = await Order.find({_id:id}).populate('orderedBy', 'address email').populate('products.product').exec()
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.cancelOrder = async(req, res)=>{
    try {
        let {id} = req.params
        let order = await Order.findByIdAndUpdate(id, {deliveryStatus:'Cancelled'}, {new:true}).exec()
        res.status(200).json({'success': 'Order Successfully Cancelled!!'})
    } catch (error) {
        res.status(400).json(error.message)
    }
}

exports.updateOrder = async(req, res)=>{
    try {
        let {status} = req.body
        let {id} = req.params
        let order = await Order.findByIdAndUpdate(id, {deliveryStatus:status}, {new:true}).exec()
        res.status(200).json({'success':'Delivery Status is Successfully Updated!!'})
    } catch (error) {
        res.status(400).json(error.message)
    }
}