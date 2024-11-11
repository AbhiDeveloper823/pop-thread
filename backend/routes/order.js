const express = require('express')
const router = express.Router()

//middlewares
const {authCheck, sellerCheck} = require('../middlewares/auth')
//controllers
const {createOrder, createOrderWithCOD, listAllOrders, readOrder, updateOrder, listUserOrder, listOrderOnCriteria, cancelOrder, listOrderBySeller} = require('../controllers/order')

//routes
router.post('/orders', authCheck, listAllOrders)
router.get('/seller/orders', authCheck, sellerCheck, listOrderBySeller)
router.get('/user/orders', authCheck, listUserOrder)
router.post('/orders/criteria', authCheck, sellerCheck, listOrderOnCriteria)
router.get('/order/:id', authCheck, readOrder)
router.put('/order/update/:id', authCheck, sellerCheck, updateOrder)
router.post('/order',authCheck, createOrder)
router.post('/order/cod', authCheck, createOrderWithCOD)
router.delete('/order/:id/cancel', authCheck, cancelOrder)

module.exports = router