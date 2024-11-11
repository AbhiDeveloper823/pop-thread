const user = require('../models/user')
const Blog = require('../models/blog')
const slugify = require('slugify')

//PAGINATION
exports.listAllBlogs = async(req, res)=>{
    let blogs = await Blog.find({}).populate('postedBy').sort({'createdAt': -1}).exec()
    res.status(200).json(blogs)
}

// exports.listBlog = async(req, res)=>{
//     let {sort,order,page} = req.body
//     let currentPage = page || 1
//     let perPage = 3

//     let blogs = await Blog.find({})
//     .skip((currentPage - 1) * perPage)
//     .sort([[sort, order]])
//     .limit(perPage)
//     .exec()

//     res.status(200).json(blogs)
// }

exports.listBlogCount = async(req, res)=>{
    try {
        let count = await Blog.find({}).estimatedDocumentCount().exec()
        res.status(200).json(count)
    } catch (error) {
        res.status(400).json({'error':error.message})
    }
}

exports.readBlog = async(req, res)=>{
    try{
        let {slug} = req.params
        let blog = await Blog.findOne({slug}).exec()
        res.status(200).json(blog)
    }catch(err){
        res.status(400).json({'error': 'Unable to get The blog!!'})
    }
}

exports.createBlog = async(req, res)=>{
    try{
        let {title} = req.body
        let {email} = req.user
        req.body.slug = slugify(title)
        let {_id} = await user.findOne({email}).exec()
        req.body.postedBy = _id
        let newBlog = await new Blog(req.body).save()
        res.status(200).json(newBlog)
    }catch(err){
        console.log(err)
        res.status(400).json({'error':'Unable to create the blog...Try Again!!'})
    }
}

exports.updateBlog = async(req, res)=>{
    try{
        let {slug} = req.params
        let {title} = req.body
        req.body.slug = slugify(title)
        
        let updated = await Blog.findOneAndUpdate({slug}, req.body, {new:true}).exec()
        res.status(200).json(updated)
    }catch(err){
        res.status(400).json({'error': 'Unable to update the blog!!'})
    }
}

exports.removeBlog = async(req, res)=>{
    try{
        let {slug} = req.params
        let removed = await Blog.deleteOne({slug}).exec()
        res.status(200).json({'success': 'Blog is succesfully removed!!'})
    }catch(err){
        res.status(400).json({'error': 'Blog is not removed!!'})
    }
}

exports.listBlogByAuthor = async(req, res)=>{
    try{
        let {email} = req.user
        let {_id} = await user.findOne({email}).exec()

        let blogs = await Blog.find({'postedBy': _id}).exec()
        res.status(200).json(blogs)
    }catch(err){
        res.status(400).json({'err':err.message})
    }
}