import axios from 'axios'

export const listProducts = async()=>{
    return await axios.get('http://localhost:4000/product')
}

export const listProductsBySellers = async(authtoken)=>{
    return await axios.get('http://localhost:4000/seller/products', {
        headers:{
            authtoken
        }
    })
}

export const  getProductInfo = async(slug)=>{
    return await axios.get(`http://localhost:4000/product/${slug}`)
}


export const  createProduct = async(authtoken, data)=>{
    return await axios.post('http://localhost:4000/product',{data}, {
        headers:{
            authtoken
        }
    })
}

export const  editProduct = async(authtoken, data, slug)=>{
    return await axios.put(`http://localhost:4000/product/${slug}`,{data}, {
        headers:{
            authtoken
        }
    })
}

export const  deleteProduct = async(authtoken,id)=>{
    return await axios.delete(`http://localhost:4000/product/${id}`,{
        headers:{
            authtoken
        }
    })
}

export const  rateProduct = async(authtoken, star, comment, slug)=>{
    return await axios.post(`http://localhost:4000/product/rate/${slug}`,{star, comment}, {
        headers:{
            authtoken
        }
    })
}

export const  getProductAvgRate = async(slug)=>{
    return await axios.get(`http://localhost:4000/product/rate/avg/${slug}`)
}

//FILTER

export const  getProductOnCategory = async(id)=>{
    return await axios.get(`http://localhost:4000/product/filter/category/${id}`)
}

export const  getProductOnSub= async(id)=>{
    return await axios.get(`http://localhost:4000/product/filter/sub/${id}`)
}

export const  getProductOnPrice= async(price)=>{
    return await axios.post(`http://localhost:4000/product/filter/price`, {price})
}

export const  getMaxProductPrice= async(id)=>{
    return await axios.get(`http://localhost:4000/product/max/price`)
}







