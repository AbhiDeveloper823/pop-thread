import axios from 'axios'

export const listAllBlogs = async()=>{
    return await axios.get('http://localhost:4000/blogs/all')
}

export const listBlogs = async(authtoken)=>{
    return await axios.get('http://localhost:4000/blog', {
        headers:{
            authtoken
        }
    })
}

export const readBlog = async(slug)=>{
    return await axios.get(`http://localhost:4000/blog/${slug}`)
}

export const createBlog = async(authtoken, title, imgUrl, description)=>{
    return await axios.post('http://localhost:4000/blog', {title, imgUrl, description}, {
        headers:{
            authtoken
        }
    })
}

export const updateBlog = async(authtoken, title, imgUrl, description, slug)=>{
    return await axios.put(`http://localhost:4000/blog/update/${slug}`, {title, imgUrl, description}, {
        headers:{
            authtoken
        }
    })
}


export const deleteBlog = async(authtoken,slug)=>{
    return await axios.delete(`http://localhost:4000/blog/${slug}`, {
        headers:{
            authtoken
        }
    })
}


