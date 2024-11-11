const express = require('express')
const router = express.Router()

const {authCheck, sellerCheck} = require('../middlewares/auth')
const { getUser, updateUser } = require('../controllers/user')

router.get('/user', authCheck,getUser)
router.put('/user', authCheck, updateUser)

module.exports = router