const express = require('express')
const router = express.Router()

const {createOrUpdateUser, getUser} = require('../controllers/auth')

const {authCheck, sellerCheck} = require('../middlewares/auth')

router.post('/create-or-update-user', authCheck,createOrUpdateUser)
router.get('/user', authCheck, getUser)

module.exports = router