const express = require('express')
const router = express.Router()


//middlewares
const {authCheck, sellerCheck} = require('../middlewares/auth')
//controllers
const { readBlog, createBlog, updateBlog, removeBlog, listBlogCount, listAllBlogs } = require('../controllers/blog')

router.get('/blogs/all', listAllBlogs)
router.get('/blogs/count', listBlogCount);
router.get('/blog/:slug', readBlog);
router.post('/blog', authCheck, sellerCheck,createBlog);
router.put('/blog/update/:slug', authCheck, sellerCheck, updateBlog)
router.delete('/blog/:slug', authCheck, sellerCheck, removeBlog)

module.exports = router