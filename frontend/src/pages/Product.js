import React,{useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Product.css'
import { Radio, ConfigProvider, InputNumber} from 'antd'
import {useSelector} from  'react-redux'

const Product = ()=>{
    const {id} = useParams()
    const {user} = useSelector((state)=>state)
    const navigate = useNavigate()

    const [size, setSize] = useState('S')
    const [count, setCount] = useState(0)
    const [key, setKey] = useState('1')


    const handleRate = ()=>{
        if (user){
            alert('RATE MODAL!!')
        }else{
            navigate('/login')
        }
    }
    return(
        <>
            <Navbar/>
            <div className='container product my-5 py-5 text-white'>
                <div className='row'>
                    <div className='col-5 d-flex align-items-center'>
                        <div className='product-img'>
                            <img src='media/p4.jpg' className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-7 d-flex align-items-center'>
                        <div className='product-info'>
                            <p className='title'>Basic Colored Sweatpants With Elastic Hems</p> 
                            <div className='product-ratings d-flex mb-3'>
                                <i className='fa fa-star mr-2'></i>
                                <i className='fa fa-star mr-2'></i>
                                <i className='fa fa-star mr-2'></i>
                                <i className='fa fa-star mr-2'></i>
                                <i className='fa fa-star mr-2'></i>
                            </div>
                            <p className='price my-4'>$ 20.00</p>
                            <p className='short-desc mb-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p className='mt-3'>Size : {size}</p>

                            <ConfigProvider
                            theme={{
                                components:{
                                    Radio:{
                                        buttonBg:'black',
                                        buttonColor:'white',
                                        buttonSolidCheckedHoverBg:'rgb(2,248,252)',
                                        buttonSolidCheckedBg:'rgba(2,248,252)',
                                        buttonSolidCheckedColor:'black'
                                    }
                                }
                            }}>
                                <Radio.Group value={size} onChange={(e)=>setSize(e.target.value)} buttonStyle='solid' size='large'>
                                    <Radio.Button value={'XS'}>XS</Radio.Button>
                                    <Radio.Button value={'S'}>S</Radio.Button>
                                    <Radio.Button value={'M'}>M</Radio.Button>
                                    <Radio.Button value={'L'}>L</Radio.Button>
                                    <Radio.Button value={'XL'}>XL</Radio.Button>
                                </Radio.Group>

                            </ConfigProvider>
                            <div className='mt-5 d-flex '>
                                <ConfigProvider theme={{
                                    components:{
                                        InputNumber:{
                                            inputFontSize:'1.2rem',
                                            paddingBlock:6
                                        }
                                    }
                                }}>
                                    <InputNumber value={count} onChange={(value)=>setCount(value)} min={0} max={10}></InputNumber>
                                </ConfigProvider>
                                <button className='cart-btn'>Add To Cart</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className='container product-desc pb-4'>
                <div className='product-desc-tab'>
                    <p className='title'>DESCRIPTION</p>
                    <p className='content'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className='container product-review py-4 mt-3 mb-5'>
                <div className='product-rev'>
                    <p className='title'>REVIEWS</p>

                    <div className='single-review mt-5 d-flex align-items-center'>
                        <img className='user-avatar' src='https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'/>
                        <div className='review-content text-white ml-5'>
                            <div className='stars d-flex'>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                            </div>
                            <p className='user-name pt-3'>John Doe</p>
                            <p className='user-comment'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    <div className='single-review mt-5 d-flex align-items-center'>
                        <img className='user-avatar' src='https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'/>
                        <div className='review-content text-white ml-5'>
                            <div className='stars d-flex'>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                            </div>
                            <p className='user-name pt-3'>John Doe</p>
                            <p className='user-comment'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    <div className='single-review mt-5 d-flex align-items-center'>
                        <img className='user-avatar' src='https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'/>
                        <div className='review-content text-white ml-5'>
                            <div className='stars d-flex'>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                                <i className='fa fa-star mr-1'></i>
                            </div>
                            <p className='user-name pt-3'>John Doe</p>
                            <p className='user-comment'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    <button className='review-btn mt-5 py-3' onClick={handleRate}>{user ? 'Rate Product' : 'Login To Rate'}</button>

                    
                </div>
            </div>
        </>
    )
}

export default Product