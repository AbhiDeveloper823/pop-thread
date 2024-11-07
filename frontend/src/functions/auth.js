import axios  from 'axios'

export const createOrUpdateUser = async(authtoken)=>{
    return await axios.post('http://localhost:4000/create-or-update-user', {}, {
        headers:{
            authtoken
        }
    })
}