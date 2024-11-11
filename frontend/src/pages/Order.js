import React, {useEffect, useState} from 'react'
import './Order.css'
import { getUserOrder } from '../functions/order'
import { useSelector } from 'react-redux'
import {Modal} from 'antd'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

const Order = ()=>{
    const [orders, setOrders] = useState([])
    const [isOrderInfoModalOpen, setIsOrderModalInfoOpen] = useState(false)
    const [modalData, setModalData] = useState('')
    const {user}=  useSelector((state)=>state)
    const navigate = useNavigate()

    const loadOrders = ()=>{
        getUserOrder(user.token).then((res)=>{
            if(res.data == null){
                setOrders([])
            }else{
                setOrders(res.data)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleOrderInfo = (data)=>{
        setModalData(data)
        setIsOrderModalInfoOpen(true)
    }

    useEffect(()=>{
        loadOrders()
    }, [])
    return(
        <>
            {(orders.length>0) ? <>
                <section className='order'>
                <div className='container py-5 text-white'>
                    {orders && orders.map((f)=>{
                        return(
                            <>
                                <div className='single-order mb-4 d-flex justify-content-between px-3 py-2 align-items-center' onClick={()=>handleOrderInfo(f)}>
                                    <div>{f.paymentIntent.order_id}</div>
                                    <div>{f.deliveryStatus}</div>
                                    <div>{f.paymentIntent.amount}</div>
                                </div>

                                <Modal open={isOrderInfoModalOpen} onCancel={()=>setIsOrderModalInfoOpen(false)} footer={false}>
                                    {modalData ? <>
                                        <p><span className='highlight'>Order Id : </span> {modalData && modalData.paymentIntent.order_id}</p>
                                        <table className='table'>
                                            <thead className='thead-dark'>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Quantity</th>
                                                    <th>Size</th>
                                                    <th>Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {modalData.products.map((i)=>{
                                                    return(
                                                        <>
                                                        <tr onClick={()=>navigate(`/product/${i.product.slug}`)}>
                                                            <td>{i.product.title}</td>
                                                            <td>{i.count}</td>
                                                            <td>{i.size}</td>
                                                            <td>{i.product.cost * i.count}</td>
                                                        </tr>
                                                        </>
                                                    )
                                                })}
                                            </tbody>
                                                
                                        </table>
                                        <hr/>

                                        <p><span className='highlight'>Delivery Status : </span> {modalData.deliveryStatus}</p>
                                        <p><span className='highlight'>Payment Status : </span> {modalData.paymentStatus}</p>
                                        <p><span className='highlight'>Payment Mode : </span> {modalData.paymentIntent.payment_method}</p>
                                        <p><span className='highlight'>Total Amount: </span> {modalData.paymentIntent.amount}</p>

                                    </> : <>
                                    </>}
                                </Modal>
                            </>
                        )
                    })}
                </div>
            </section>
            </> : <>
                    <Loader/>
             </>}


            

        </>
    )
}

export default Order