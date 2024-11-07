import React,{useState, useEffect} from 'react'
import { auth } from '../../firebase'
import {useNavigate} from 'react-router-dom'

const RegisterComplete = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{
        setEmail(window.localStorage.getItem('email'))
    }, [])

    const handleSubmit = async()=>{
        setLoading(true)
        try{
            const result = await auth.signInWithEmailLink(email, window.location.href)
            if(result.user.emailVerified){
                window.localStorage.removeItem('email')
                let user = auth.currentUser
                await user.updatePassword(password)
                const idTokenResult = await user.getIdTokenResult()

                navigate('/main')
            }else{
                console.log("email not verified...Try again!!")
            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <>
            <p>Register Complete!</p>

            <input type='text' placeholder='Email' disabled value={email}/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={handleSubmit}>{loading ? "LOADING..." : "SUBMIT"}</button>
        </>
    )
}

export default RegisterComplete