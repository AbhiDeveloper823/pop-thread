import axios  from 'axios'

export const getUserInfo = async(authtoken)=>{
    return await axios.get('http://localhost:4000/user',{
        headers:{
            authtoken,
        }
    })
}

export const updateUserInfo = async(authtoken, data)=>{
    return await axios.put('http://localhost:4000/user', {data}, {
        headers:{
            authtoken
        }
    })
}