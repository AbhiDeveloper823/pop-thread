import React, { useState, useEffect } from 'react'
import DashMenu from '../../components/DashMenu'
import { getSellerOrders } from '../../functions/order'
import {useSelector} from 'react-redux'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import OrderInfoModal from '../../components/OrderInfoModal'

const DashOrders = ()=>{
    const [orders, setOrders] = useState([])

    const [isOrderInfoModalOpen, setIsOrderInfoModalOpen] = useState(false)
    const {user} = useSelector((state)=>state)

    const [modalData, setModalData] = useState('')

    const loadOrders = ()=>{
        getSellerOrders(user.token).then((res)=>{
            setOrders(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        loadOrders()
    }, [])

    const handleOrderInfo = (data)=>{
        setIsOrderInfoModalOpen(true)
    }

    const handleClose = (e)=>{
        setIsOrderInfoModalOpen(false)
        loadOrders()
    }

    console.log(modalData)
    return(
        <>
            <section className='dashboard '> 
                <div className='row container-fluid'>
                    <DashMenu active_class={'orders'}/>
                    <div className='col-10 py-5 px-5'>
                        <div className='dash-head d-flex justify-content-between align-items-center mb-5'>
                            <p className='dash-title'>ORDERS</p>
                        </div>

                        {orders && orders.length > 0 ? <>
                            <div className='dash-product-list d-flex flex-column text-white'>
                        {orders && orders.map((f)=>{
                        return(
                            <>
                                <div className='single-order mb-4 d-flex justify-content-between px-3 py-2 align-items-center' onClick={()=>handleOrderInfo(f)}>
                                    <div>{f.paymentIntent.order_id}</div>
                                    <div>{f.deliveryStatus}</div>
                                    <div>{f.paymentIntent.amount}</div>
                                </div>
                                <OrderInfoModal isOrderInfoModalOpen={isOrderInfoModalOpen} handleClose={handleClose} data={f}/>
                                
                            </>
                        )
                        })}

                        </div>
                        </> : <>
                            <p className='text-center' style={{color:'rgb(2,248,252)'}}>You'll get your first order soon..!</p>
                        </>}


                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashOrders