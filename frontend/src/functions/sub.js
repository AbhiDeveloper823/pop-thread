import axios from 'axios'

export const listSubs = async()=>{
    return await axios.get('http://localhost:4000/sub')
}

export const readSub = async(slug)=>{
    return await axios.get(`http://localhost:4000/sub/${slug}`)
}


// export const listSubsOnCategory = async(cat)=>{
//     return await axios.get('http://localhost:4000/sub', {cat})
// }

export const createSub = async(authtoken, name)=>{
    return await axios.post(`http://localhost:4000/sub`,{name}, {
        headers:{
            authtoken
        }
    })
}

export const updateSub = async(authtoken, name, slug)=>{
    return await axios.put(`http://localhost:4000/sub/${slug}`,{name}, {
        headers:{
            authtoken
        }
    })
}

export const deleteSub = async(authtoken,slug)=>{
    return await axios.delete(`http://localhost:4000/sub/${slug}`, {
        headers:{
            authtoken
        }
    })
}