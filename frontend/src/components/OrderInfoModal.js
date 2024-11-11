import { Modal } from 'antd'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { updateStatus } from '../functions/order'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const OrderInfoModal = ({isOrderInfoModalOpen, handleClose , data})=>{
    const [deliveryStatus, setDeliveryStatus] = useState('')
    const {user} = useSelector((state)=>state)
    const navigate = useNavigate()
    const options = ['Not Proccessed', 'Proccessing', 'Out for Delivery', 'Delivered', 'Cancelled']

    useEffect(()=>{
        if(data){
            setDeliveryStatus(data.deliveryStatus)
        }
    }, [])

    const handleStatusChange = (e, id)=>{
        setDeliveryStatus(e.target.value)
        updateStatus(user.token, id, e.target.value).then(()=>{
            toast.success(`Delivery Status Updated!!`)
        })
    }
    return(
        <>
        <Modal open={isOrderInfoModalOpen} onCancel={handleClose} >
        {data ? <>
        
        <p><span className='highlight'>Order Id : </span> {data && data.paymentIntent.order_id}</p>
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
                    {data.products.map((i)=>{
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

                <select value={deliveryStatus} onChange={(e)=>handleStatusChange(e, data._id)}>
                    {options.map((g)=>{
                        return(
                            <>
                                <option value={g}>{g}</option>
                            </>
                        )
                    })}
                </select>
                <p><span className='highlight'>Payment Status : </span> {data.paymentStatus}</p>
                <p><span className='highlight'>Payment Mode : </span> {data.paymentIntent.payment_method}</p>
                <p><span className='highlight'>Total Amount: </span> {data.paymentIntent.amount}</p>
                <p><span className='highlight'>Address: </span> {data.orderedBy.address}</p>

                </> : <></>}

        </Modal>
        </>
    )
}

export default OrderInfoModal