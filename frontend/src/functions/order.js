import axios from 'axios'

export const createOrderWithCOD = async(authtoken)=>{
    return await axios.post(`http://localhost:4000/order/cod`,{}, {
        headers:{
            authtoken
        }
    })
}

export const getUserOrder = async(authtoken)=>{
    return await axios.get(`http://localhost:4000/user/orders`, {
        headers:{
            authtoken
        }
    })
}

export const getSellerOrders = async(authtoken)=>{
    return await axios.get(`http://localhost:4000/seller/orders`, {
        headers:{
            authtoken
        }
    })
}

export const updateStatus = async(authtoken, id,status)=>{
    return await axios.put(`http://localhost:4000/order/update/${id}`, {status}, {
        headers:{
            authtoken
        }
    })
}


