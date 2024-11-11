import React,{useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './Product.css'
import { Radio, ConfigProvider, InputNumber} from 'antd'
import {useSelector} from  'react-redux'
import { getProductAvgRate, getProductInfo, rateProduct } from '../../functions/product'
import {Modal} from 'antd'
import StarRatings from 'react-star-ratings'
import { addToCart, productInCartCheck } from '../../functions/cart'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'

const Product = ()=>{
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state)
    const {slug} = useParams()


    const [data, setData] = useState('')
    const [rateProductModalOpen, setRateProductModalOpen] = useState(false)

    const [size, setSize] = useState('S')
    const [count, setCount] = useState(1)
    const [key, setKey] = useState('1')
    const [avg, setAvg] = useState(0)

    const [stars, setStars] = useState(1)
    const [comment, setComment] = useState('')
    const [productInCartExists, setProductInCartExists] = useState(false)

    const handleProductInCartCheck= (id)=>{
        productInCartCheck(user.token,id).then((res)=>{
            if(res.data.exists){
                setCount(res.data.count)
                setProductInCartExists(true)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const loadProduct = ()=>{
        getProductInfo(slug).then((res)=>{
            setData(res.data)
            handleProductInCartCheck(res.data._id)
            console.log(res.data.ratings)
            if(res.data.ratings.length>0){
                getProductAvgRate(res.data.slug).then((result)=>{
                    setAvg(result.data.avg)
                }).catch((err)=>{
                    console.log(err)
                })
            }else{
                setAvg(0)
            }

            let {ratings} = res.data
            if(ratings){
                ratings.map((f)=>{
                    if(f.postedBy.email == user.email){
                        setStars(f.star)
                        setComment(f.comment)
                    }
                })
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleAddToCart = (id)=>{
        if(count > 0){
            let cartData = [{id, count, size}]
            addToCart(user.token, cartData).then((res)=>{
                toast.success('Product Added To Cart.')
                loadProduct()
            }).catch((err)=>{
                toast.error(`Product can't be added to cart...Try Again!`)
            })
        }
    }


    useEffect(()=>{
        loadProduct()
    }, [])


    const handleRate = ()=>{
        setRateProductModalOpen(true)
    }

    const submitRating = (id)=>{
        rateProduct(user.token, stars, comment, id).then((res)=>{
            setRateProductModalOpen(false)
            loadProduct()
        }).catch((err)=>{
            setRateProductModalOpen(false)
            setComment('')
            setStars(0)
            toast.error(`Your rating is not submitted...Try Again!!`)
        })
    }

    
    return(
        <>
            {data ? 
            <>
            <div>
                <div className='container product my-5 py-5 text-white'>
                    <div className='row'>
                        <div className='col-5 d-flex align-items-center'>
                            <div className='product-img'>
                                <img src={data && data.imgUrl} className='img-fluid'/>
                            </div>
                        </div>
                        <div className='col-7 d-flex align-items-center'>
                            <div className='product-info'>
                                <p className='title'>{data && data.title}</p> 
                                <StarRatings numberOfStars={5} rating={avg} starDimension='12px' starSpacing='1.2px' starRatedColor='rgb(2,248,252)'></StarRatings>
                                <p className='price my-4'>$ {data && data.cost}</p>
                                <p className='short-desc mb-3'> {data && data.short_desc} </p>
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
                                    </ConfigProvider>
                                    {user ? <>
                                        {productInCartExists ? <>
                                            <InputNumber value={count} ></InputNumber>
                                            <button className='cart-btn' onClick={()=>navigate('/cart')}>Go To Cart</button>
                                        </> : <>
                                            <InputNumber value={count} onChange={(value)=>setCount(value)} min={0} max={data && data.countInStock}></InputNumber>
                                            <button className='cart-btn' onClick={()=>handleAddToCart(data._id)}>Add To Cart</button>
                                        </>}
                                    </> : <>
                                        <button className='cart-btn' onClick={()=>navigate('/login')}>Login To Add To Cart</button>
                                    </>}
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container product-desc pb-4'>
                    <div className='product-desc-tab'>
                        <p className='title'>DESCRIPTION</p>
                        <p className='content'> {data.desc}</p>
                    </div>
                </div>

                <div className='container product-review py-4 mt-3 mb-5'>
                    <div className='product-rev'>
                        <p className='title'>REVIEWS</p>
                        
                        {data.ratings && data.ratings.map((f)=>{{
                            console.log(f)
                            return(
                                <>
                                <div className='single-review mt-5 d-flex align-items-center'>
                                    <img className='user-avatar' src='https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'/>
                                    <div className='review-content text-white ml-5'>
                                        <StarRatings rating={f.star} starRatedColor={'rgb(2,248,252)'} starEmptyColor={'rgb(180, 180, 180)'} starDimension='15px' starSpacing='2.2px'></StarRatings>
                                        <p className='user-name pt-3'>{f.postedBy.name}</p>
                                        <p className='user-comment'> {f.comment}</p>
                                    </div>
                                </div>
                                </>
                            )
                        }})}


                        <button className='review-btn mt-5 py-3' onClick={handleRate}>{user ? 'Rate Product' : 'Login To Rate'}</button>

                        
                    </div>
                </div>
            </div>
            {/*ADD NEW RATING MODAL*/}
             <Modal open={rateProductModalOpen} className='rate-product' onCancel={()=>setRateProductModalOpen(false)} footer={false}>
                <p>Rate the Product</p>
                <StarRatings starDimension='30px' starSpacing='4px' rating={stars} numberOfStars={5} starRatedColor='red' changeRating={(val)=>setStars(val)}></StarRatings> 
                <br/>

                <input placeholder='Comment' className='mt-4 pl-2 py-2' value={comment} onChange={(e)=>setComment(e.target.value)} type='text'/><br/>
                <button className='rate-btn mt-3 px-3 py-1' onClick={()=>submitRating(data._id)}>Submit</button>
             </Modal>


            </> : <>
                    <Loader/>
            </>}


            

        </>
    )
}

export default Product