const express = require('express');
const router = express.Router();

const {authCheck} = require('../middlewares/auth');
const {userCart, listUserCart,removeUserCart, productInCartCheck, removeProductUserCart} = require('../controllers/cart')


//CART
router.get('/user/cart/list', authCheck, listUserCart);
router.post('/user/cart', authCheck, userCart);
router.delete('/user/cart/remove', authCheck, removeUserCart)
router.get('/user/product/cart/check/:id', authCheck, productInCartCheck)

router.put('/user/cart/product/remove/:id', authCheck, removeProductUserCart)


module.exports = router;