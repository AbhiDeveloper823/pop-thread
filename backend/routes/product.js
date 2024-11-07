const express = require('express')
const router = express.Router()

const {listProducts, listProductsCount, createProduct, readProduct, updateProduct, removeProduct} = require('../controllers/product')

const {authCheck, sellerCheck} = require('../middlewares/auth')

router.get('/product', listProducts)
router.get('/product-count',authCheck ,listProductsCount)
router.get('/product/:slug', readProduct)
router.post('/product', authCheck, sellerCheck, createProduct)
router.put('/product/:slug', authCheck, sellerCheck, updateProduct)
router.delete('/product/:slug', authCheck, sellerCheck, removeProduct)

module.exports = router