const express = require('express')
const router = express.Router()

let {listSubs, readSub, createSub, updateSub, removeSub} = require('../controllers/sub')
const { authCheck, sellerCheck } = require('../middlewares/auth')

router.get('/sub', listSubs)
router.get('/sub/:slug', readSub)
router.post('/sub', authCheck, sellerCheck, createSub)
router.put('/sub/:slug', authCheck, sellerCheck, updateSub)
router.delete('/sub/:slug', authCheck, sellerCheck, removeSub)

module.exports = router