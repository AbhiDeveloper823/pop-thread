import React, {useEffect ,useState} from 'react'
import {useSelector} from 'react-redux'
import { getUserCart, removeProductCart, removeUserCart } from '../functions/cart'
import './Cart.css'
import { createOrderWithCOD } from '../functions/order'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = ()=>{
    const [data, setData] = useState('')
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state)

    const loadCart = ()=>{
        getUserCart(user.token).then((res)=>{
            if(res.data != null){
                setData(res.data)
            }else{
                setData('')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        loadCart()
    }, [])  

    const handleEmptyCart = ()=>{
        removeUserCart(user.token).then((res)=>{
            loadCart()
            toast.success('Your cart is successfully emptied!!')
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handlePlaceOrder = ()=>{
        createOrderWithCOD(user.token).then((res)=>{
            toast.success('Your Order is successfully placed...Thank You for shopping with us!')
            handleEmptyCart()
            navigate('/')
        }).catch((err)=>{
            toast.error(`Order can't be placed...Try Again!!`)
        })
    }

    return(
        <>
        <section className='user-cart'>
            <div className='container-fluid py-5'>
            <div className='row'>

                {data ? <>
                    <div className='col-8 '>
                        <div className='cart-info-container d-flex flex-column'>
                            {data && data.products && data.products.map((f)=>{
                                return(
                                    <>
                                        <div className='single-cart-product align-items-center text-white d-flex justify-content-between mb-4 py-3 px-4'>
                                            <img src={f.product.imgUrl} className='img-fluid'/>
                                            
                                                <p>{f.product.title}</p>
                                                <p>Cost: {f.product.cost}</p>
                                                <p>Qty: {f.count}</p>
                                                <p>Total Cost : {f.count * f.product.cost}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        
                        
                    </div>
                    <div className='col-4'>
                        <div className='cart-checkout-bill text-center py-5 px-4' >
                            <p className='title'>Your Bag</p>
                            {data && data.products && data.products.map((f)=>{
                                return(
                                    <>
                                        <div className='d-flex justify-content-between'>
                                            <p>{f.product.title}</p>
                                            <p>{f.product.cost * f.count}</p>
                                        </div>
                                    </>
                                )
                            })}
                            <div className='d-flex justify-content-between my-3'>
                                <p>Total Amount</p>
                                {data && data.totalAmount}
                            </div>

                            <button className='checkout-bt mb-3 px-4 py-2' onClick={handlePlaceOrder}>Place Order</button> <br/>
                            <button className='cart-bill-btn px-4 py-2' onClick={handleEmptyCart}>Empty Cart</button>
                            
                        </div>
                    </div>
                </> : <>
                        
                        <div className='text-center mx-auto'>
                            <img className='img-fluid' src='https://i.pinimg.com/originals/4f/fc/f4/4ffcf4d171f1e18b79f251b3d4cebeca.gif'/>
                            <p className='cont-shop-text'>No product in your cart...!</p>
                            <button className='cont-shop-btn px-4 py-3' onClick={()=>navigate('/shop')}>Continue To Shop</button>
                        </div>
                </>}
                
                
            </div>
            </div>
        </section>
        
        </>
    )
}

export default Cart