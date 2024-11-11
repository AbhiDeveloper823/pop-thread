import axios from 'axios'

export const addToCart = async(authtoken, cart)=>{
    return await axios.post(`http://localhost:4000/user/cart`, {cart},{
        headers:{
            authtoken
        }
    })
}

export const productInCartCheck = async(authtoken, id)=>{
    return await axios.get(`http://localhost:4000/user/product/cart/check/${id}`,{
        headers:{
            authtoken
        }
    })
}

export const getUserCart = async(authtoken)=>{
    return await axios.get(`http://localhost:4000/user/cart/list`, {
        headers:{
            authtoken
        }
    })
}

export const removeUserCart = async(authtoken)=>{
    return await axios.delete(`http://localhost:4000/user/cart/remove`,{
        headers:{
            authtoken
        }
    })
}
