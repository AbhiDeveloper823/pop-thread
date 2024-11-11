import React,{useState, useEffect} from 'react'
import { auth } from '../../firebase'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createOrUpdateUser } from '../../functions/auth'
import { toast } from 'react-toastify'

const RegisterComplete = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
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
                await createOrUpdateUser(idTokenResult.token).then((result)=>{
                    dispatch({
                        type:'LOGGED_IN_USER',
                        payload:{
                            email,
                            token:idTokenResult.token,
                            role:result.data.role
                        }
                    })
    
                    setLoading(false)
                    navigate('/')
                    setEmail('')
                    setPassword('')

                    toast.success(`Welcome ${email}`)
                }).catch((err)=>{
                    console.log(err)
                })
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