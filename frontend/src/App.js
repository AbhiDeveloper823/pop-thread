import React, {useEffect} from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Home from './pages/universal/Home'
import Login from './pages/auth/Login'
import RegisterComplete from './pages/auth/registerComplete'
import Navbar from './components/Navbar'
import Shop from './pages/universal/Shop'
import Blogs from './pages/universal/Blogs'
import Trends from './pages/universal/Trends'
import Product from './pages/universal/Product'
import { auth } from './firebase'
import { createOrUpdateUser } from './functions/auth'
import DashProduct from './pages/seller/DashProduct'
import DashCategory from './pages/seller/DashCategory'
import DashSub from './pages/seller/DashSub'
import Cart from './pages/Cart'
import DashBlog from './pages/seller/DashBlogs'
import Order from './pages/Order'
import DashOrders from './pages/seller/DashOrders'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state)

    useEffect(()=>{
        AOS.init()
        auth.onAuthStateChanged(async(res)=>{
            if(res){
                let idToken = res._delegate.accessToken
                await createOrUpdateUser(idToken).then((result)=>{
                    let {email, role} = result.data
                    dispatch({
                        type:'LOGGED_IN_USER',
                        payload:{
                            email,
                            role,
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

            <Navbar/>
            <ToastContainer/>
                <Routes>
                    {user ? 
                    <>
                        {user.role == "seller" ? 
                        <>
                            <Route path='/dashboard/products' element={<DashProduct/>}></Route>
                            <Route path='/dashboard/categories' element={<DashCategory/>}></Route>
                            <Route path='/dashboard/subs' element={<DashSub/>}></Route>
                            <Route path='/dashboard/blogs' element={<DashBlog/>}></Route>
                            <Route path='/dashboard/orders' element={<DashOrders/>}></Route>
                        </> : <> 
                        </>
                        }
                    </> 
                    
                    : <>
                        <Route path='/login' element={<Login/>}></Route>
                    </>}
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/registerComplete' element={<RegisterComplete/>}></Route>
                    <Route path='/shop' element={<Shop/>}></Route>
                    <Route path='/blogs' element={<Blogs/>}></Route>
                    <Route path='/trends' element={<Trends/>}></Route>
                    <Route path='/product/:slug' element={<Product/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/order' element={<Order/>}></Route>

                </Routes>
     
        </>
    )
}

export default App