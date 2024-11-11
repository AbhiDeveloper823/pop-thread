import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { getUserOrder } from "../functions/order";
import { useSelector } from "react-redux";
import './OrderModal.css'

const OrderModal = ({isOrderModalOpen, handleOrderModalClose})=>{
    const [orders, setOrders] = useState([])
    const {user} = useSelector((state)=>state)

    useEffect(()=>{
        getUserOrder(user.token).then((res)=>{
            console.log(res)
            setOrders(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    } , [])

    return(
        <>
        <Modal open={isOrderModalOpen} onCancel={handleOrderModalClose} footer={false} >
            <p className="order-modal-title">Your Orders</p>
            {orders && orders.map((f)=>{
                return(
                    <>
                    <div className="single-order px-3 py-2 mb-3  d-flex align-item-center justify-content-between">
                        <div>{f.paymentIntent.order_id}</div>
                        <div>{f.deliveryStatus}</div>
                    </div>
                    </>
                )
                
            })}
        </Modal>
        </>
    )
}

export default OrderModal