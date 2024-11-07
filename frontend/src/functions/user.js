import axios from 'axios'

export const getUserInfo = async(authtoken)=>{
    return await axios.get(`http://localhost:4000/user` , {}, {
        headers:{
            authtoken:authtoken
        }
    })
}