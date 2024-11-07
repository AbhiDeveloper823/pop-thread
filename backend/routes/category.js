const express = require('express')
const router = express.Router()

let {listCategories, readCategory, createCategory, updateCategory, removeCategory} = require('../controllers/category')
const { authCheck, sellerCheck } = require('../middlewares/auth')

router.get('/category', listCategories)
router.get('/category/:slug', readCategory)
router.post('/category', authCheck, sellerCheck, createCategory)
router.put('/category/:slug', authCheck, sellerCheck, updateCategory)
router.delete('/category/:slug', authCheck, sellerCheck, removeCategory)

module.exports = router