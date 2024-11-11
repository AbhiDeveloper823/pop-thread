const express = require('express')
const router = express.Router()

const {listProducts, listProductsCount, createProduct, readProduct, updateProduct, removeProduct, listProductsBySeller, rateProduct, avgRating, getProductOnCategory, getProductOnSub, getProductsOnPrice, getMaxProductAmount} = require('../controllers/product')

const {authCheck, sellerCheck} = require('../middlewares/auth')

router.get('/product', listProducts)
router.get('/product-count',authCheck ,listProductsCount)
router.get('/product/:slug', readProduct)
router.post('/product', authCheck, sellerCheck, createProduct)
router.put('/product/:slug', authCheck, sellerCheck, updateProduct)
router.delete('/product/:slug', authCheck, sellerCheck, removeProduct)

//SELLER
router.get('/seller/products', authCheck, sellerCheck, listProductsBySeller)

//RATE
router.post('/product/rate/:id', authCheck, rateProduct)
router.get(`/product/rate/avg/:slug`, avgRating)

//FILTERS
router.get('/product/filter/category/:id', getProductOnCategory)
router.get('/product/filter/sub/:id', getProductOnSub)
router.post('/product/filter/price', getProductsOnPrice)

router.get('/product/max/price', getMaxProductAmount)

module.exports = router