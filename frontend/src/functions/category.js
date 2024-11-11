import axios from 'axios'

export const listCatgeories = async()=>{
    return await axios.get('http://localhost:4000/category')
}

export const readCategory = async(slug)=>{
    return await axios.get(`http://localhost:4000/category/${slug}`)
}


export const createCatgeory = async(authtoken, name)=>{
    return await axios.post('http://localhost:4000/category', {name}, {
        headers:{
            authtoken
        }
    })
}

export const updateCategory = async(authtoken, slug, name)=>{
    return await axios.put(`http://localhost:4000/category/${slug}`, {name}, {
        headers:{
            authtoken
        }
    })
}

export const deleteCatgeory = async(authtoken, slug)=>{
    return await axios.delete(`http://localhost:4000/category/${slug}`, {
        headers:{
            authtoken
        }
    })
}