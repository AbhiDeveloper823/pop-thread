import React from 'react'
import firebase  from 'firebase/compat/app'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Main = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = ()=>{
        firebase.auth().signOut()

        dispatch({
            type:"LOG_OUT",
            payload:null
        })

        navigate('/')
        
    }
    return(
        <>
            <p>MAIN PAGE!!</p>
            <button onClick={handleLogOut}> Log Out </button>
        </>
    )
}

export default Main