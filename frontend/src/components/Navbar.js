import React, {useEffect, useState} from 'react'
import './Navbar.css'
import {Link , useNavigate} from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'
import {Drawer} from 'antd'
import ProfileModal from './ProfileModal'
import firebase  from 'firebase/compat/app'
import { toast } from 'react-toastify'

const Navbar = ()=>{
    const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false)
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
    const {user} = useSelector((state)=>state)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleUser = ()=>{
        setIsUserDrawerOpen(true)
        dispatch({
            type:"USER_DRAWER",
            payload:true
        })
    }

    const handleClose = ()=>{
        setIsProfileModalOpen(false)
    }


    const handleLogout = ()=>{
        firebase.auth().signOut()
        toast.success('Thank You for visiting us!!')

        dispatch({
            type:"LOG_OUT",
            payload:null
        })
        setIsUserDrawerOpen(false)

        navigate('/')
    }
    return(
        <>
        <nav class="navbar navbar-expand-lg text-white px-4 fixed-top">
            <img src='logo2.png' onClick={()=>navigate('/')} className='navbar-brand py-2'/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                   <li className='nav-item'>
                        <Link className='nav-link active'  to='/'>Home</Link>
                   </li>

                   <li className='nav-item'>
                        <Link className='nav-link' to='/shop'>Shop</Link>
                   </li>

                   <li className='nav-item'>
                        <Link className='nav-link' to='/blogs'>Blogs</Link>
                   </li>

                   <li className='nav-item'>
                        <Link className='nav-link' to='/trends'>Trends</Link>
                   </li>


                </ul>
                {user ? 
                    <>
                        <button className='nav-btn px-4 py-2' onClick={()=>navigate('/cart')}><i className='fa fa-shopping-cart'></i></button>
                        <button className='nav-btn px-4 py-2 ml-3' onClick={handleUser}><i className='fa fa-user'></i></button>
                    </> : 
                    
                    <>
                        <button className='nav-btn px-4 py-2' onClick={()=>navigate('/login')}>Login</button>
                    </>
                }
                
            </div>
        </nav>

        {/*PROFILE DRAWER*/}
        <Drawer className={'drawer-profile'} open={isUserDrawerOpen} onClose={()=>setIsUserDrawerOpen(false)}  closable={false}>
            <div className='d-flex mb-3 profile pl-3 pt-4' onClick={()=>setIsProfileModalOpen(true)}>
                <i className='fa fa-user mr-4'></i>
                <p>Profile</p>
            </div>
            <div className='d-flex mb-3 cart pl-3 pt-4' onClick={()=>navigate('/cart')}>
                <i className='fa fa-shopping-cart mr-4'></i>
                <p>Cart</p>
            </div>
            <div className='d-flex mb-3 orders pl-3 pt-4' onClick={()=>navigate('/order')}>
                <i className='fa fa-archive mr-4'></i>
                <p>Orders</p>
            </div>
            {user && user.role == "seller" ? 
                <>
                    <div className='d-flex mb-3 orders pl-3 pt-4' onClick={()=>navigate('/dashboard/products')}>
                        <i className='fa fa-area-chart mr-4'></i>
                        <p>Dashboard</p>
                    </div>
                </> : 
                <>
                </>
            }

            {user ? <>
                <button className='logout w-100 px-3 py-2 mt-3' onClick={handleLogout}>
                Logout
                </button>
            </> : <></>}
            
        </Drawer>

        <ProfileModal isProfileModalOpen={isProfileModalOpen} handleClose={handleClose}/>
        
        </>
    )

    

}



export default Navbar