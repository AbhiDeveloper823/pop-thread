import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Main from './pages/Main'
import RegisterComplete from './pages/auth/registerComplete'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Blogs from './pages/Blogs'
import Trends from './pages/Trends'
import Product from './pages/Product'
import { auth } from './firebase'
import { createOrUpdateUser } from './functions/auth'

const App = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged(async(res)=>{
            if(res){
                let idToken = res._delegate.accessToken
                await createOrUpdateUser(idToken).then((result)=>{
                    let {email} = result.data
                    dispatch({
                        type:'LOGGED_IN_USER',
                        payload:{
                            email,
                            token:idToken
                        }
                    })
                    navigate('/')
                }).catch((err)=>{
                    console.log(err)
                })
            }
        })
    }, [])
    return(
        <>

  
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/main' element={<Main/>}></Route>
                    <Route path='/registerComplete' element={<RegisterComplete/>}></Route>
                    <Route path='/shop' element={<Shop/>}></Route>
                    <Route path='/blogs' element={<Blogs/>}></Route>
                    <Route path='/trends' element={<Trends/>}></Route>
                    <Route path='/:id' element={<Product/>}></Route>
                </Routes>
     
        </>
    )
}

export default App