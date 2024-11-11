import React from 'react'
import './DashMenu.css'
import {useNavigate} from 'react-router-dom'
const DashMenu = ({active_class})=>{
    let x = document.querySelector(`.${active_class}`)
    if(x){
        x.classList.add('active')
    }
    
    const navigate = useNavigate()

    return(
        <>
                    <div className='col-2 dash-menu pt-3 d-flex flex-column'>
                        <div className='d-flex mb-3 orders pl-3 pt-4' onClick={()=>navigate('/dashboard/orders')}>
                            <i className='fa fa-archive mr-4'></i>
                            <p>Orders</p>
                        </div>

                        <div className='d-flex mb-3 products pl-3 pt-4' onClick={()=>navigate('/dashboard/products')}>
                            <i className='fa fa-th mr-4'></i>
                            <p>Products</p>
                        </div>

                        <div className='d-flex mb-3 category  pl-3 pt-4' onClick={()=>navigate('/dashboard/categories')}>
                            <i className='fa fa-square-o  mr-4'></i>
                            <p>Category</p>
                        </div>

                        <div className='d-flex mb-3 subs  pl-3 pt-4'  onClick={()=>navigate('/dashboard/subs')}>
                            <i className='fa fa-clone mr-4'></i>
                            <p>Sub Category</p>
                        </div>

                        <div className='d-flex mb-3 blogs  pl-3 pt-4'  onClick={()=>navigate('/dashboard/blogs')}>
                            <i className='fa fa-book mr-4'></i>
                            <p>Blogs</p>
                        </div>
                    </div>
        </>
    )
}

export default DashMenu