import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import './Login.css'
import {auth, googleAuthProvider} from '../../firebase'
import {Modal, message} from 'antd'
import {useNavigate} from 'react-router-dom'
import { createOrUpdateUser } from '../../functions/auth'
import { toast } from 'react-toastify'

const Login = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [regEmail, setRegEmail] = useState('')
    const [email, setEmail] = useState('mishraabhinav710@gmail.com')
    const [password, setPassword] = useState('anshu11')
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleLogin = async() =>{
        setLoading(true)
        try{
            await auth.signInWithEmailAndPassword(email, password).then(async(res)=>{
                const idTokenResult = await res.user.getIdTokenResult()
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
                

            }).catch((err)=>{
                setLoading(false)
                setEmail('')
                setPassword('')

            })
        }catch(err){
            setLoading(false)
            setEmail('')
            setPassword('')
        }
    }

    const handleRegistration = async()=>{
        const config = {
            url: 'http://localhost:3000/registerComplete',
            handleCodeInApp:true
        }
        await auth.sendSignInLinkToEmail(regEmail, config)
        window.localStorage.setItem('email', regEmail)

        setRegEmail("")
        toast.info(`Registration link is sent to ${regEmail}.`)
        setIsModalOpen(false)

    }

    const handleGoogleLogin =async()=>{
        await auth.signInWithPopup(googleAuthProvider).then(async(result)=>{
            const idTokenResult = await result.user.getIdTokenResult()

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
        })
    }

    return(
        <>
            <section className="login-page">
                
                    <div className='row'>
                        

                        <div className='col-3 px-4 d-flex flex-column justify-content-center align-items-center justify-content-center'>
                            <img className='img-fluid logo' src='media/logo1.png'/>
                            <input type='text' className='login-input' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <input type='password' className='login-input' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <button className='login-btn mb-3' onClick={handleLogin}>{loading ? 'Loading..' : 'Submit'}</button>
                            <button className='login-btn google-login-btn mb-3' onClick={handleGoogleLogin}>Google Login</button>
                            <p className='reg-link text-white text-right' onClick={()=>setIsModalOpen(true)}> Don't have an account? </p>
                            <Modal  open={isModalOpen} footer={false} onCancel={()=>setIsModalOpen(false)}>
                                <p className='modal-title mt-3'>REGISTRATION</p>
                                <input type='text' placeholder='Enter your email' className='modal-input mt-3 pl-3' value={regEmail} onChange={(e)=>setRegEmail(e.target.value)}/>
                                <button className='modal-button mt-4 py-2' onClick={handleRegistration}> Submit </button>
                            </Modal>
                        </div>

                        <div className='col-9 d-flex flex-column align-items-center justify-content-center'> 
                            <video autoPlay muted src='media/v7.mp4' loop id="myVideo"></video>
                        </div>
                    </div>
                
            </section>
        </>
    )
}

export default Login