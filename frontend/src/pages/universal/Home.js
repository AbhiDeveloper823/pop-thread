import React, {useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Home.css'
import { useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import { listAllBlogs } from '../../functions/blog'
import { listProducts } from '../../functions/product'

const Home = () =>{
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state)
    const [blogs, setBlogs] = useState('')
    const [featuredProduct, setFeaturedProduct] = useState('')
    const [trendingProduct, setTrendingProduct] = useState('')
    const [newArrival, setNewArrival] = useState('')

    useEffect(()=>{
        listAllBlogs().then((res)=>{
            setBlogs(res.data.slice(0, 4))
        })

        listProducts().then((res)=>{
            if(res.data.length>0){
                setFeaturedProduct(res.data.slice(0,4))
                setTrendingProduct(res.data.slice(1,5))
                setNewArrival(res.data.slice(2,6))
            }
        })

    }, [])

    return(
        <>
            <section className='home'>
                <div className='banner mt-5'>
                </div>
                <div className='container my-5'>
                    <div className='featured-products mb-5' data-aos="fade-up" data-aos-duration="700">
                        <p className='home-title'>Featured Products</p>
                        <div className='row pt-3'>
                            {featuredProduct && featuredProduct.map((f)=>{
                                return(
                                    <>
                                    <div className='col-12 col-md-3'>
                                        <div className='product-card'  onClick={()=>navigate(`/product/${f.slug}`)}>
                                            <div className='product-img'> 
                                                <img src={f.imgUrl} className='img-fluid'/>
                                                <div className='d-flex flex-column product-icons'>
                                                    <i className='fa fa-heart mb-3'></i>
                                                    <i className='fa fa-shopping-cart'></i>
                                                </div>
                                            </div>

                                            <div className='card-content pl-3 pt-3'>
                                                <p className='product-title'>{f.title}</p>
                                                <p className='product-cost'>$ {f.cost}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                    <div className='trending-products mb-5' data-aos="fade-up" data-aos-duration="700">
                        <p className='home-title'>Trending Products</p>
                        <div className='row pt-3'>
                        {trendingProduct && trendingProduct.map((f)=>{
                                return(
                                    <>
                                    <div className='col-12 col-md-3'>
                                        <div className='product-card'  onClick={()=>navigate(`/product/${f.slug}`)}>
                                            <div className='product-img'> 
                                                <img src={f.imgUrl} className='img-fluid'/>
                                                <div className='d-flex flex-column product-icons'>
                                                    <i className='fa fa-heart mb-3'></i>
                                                    <i className='fa fa-shopping-cart'></i>
                                                </div>
                                            </div>

                                            <div className='card-content pl-3 pt-3'>
                                                <p className='product-title'>{f.title}</p>
                                                <p className='product-cost'>$ {f.cost}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className='promo' data-aos="fade-up" data-aos-duration="700">
                    <video autoPlay muted loop src='media/v7.mp4'></video>
                </div>

                <div className='container my-5'>

                <div className='new-arrival-products mb-5' data-aos="fade-up" data-aos-duration="700">
                        <p className='home-title'>New Arrivals</p>
                        <div className='row pt-3'>
                        {newArrival && newArrival.map((f)=>{
                                return(
                                    <>
                                    <div className='col-12 col-md-3'>
                                        <div className='product-card'  onClick={()=>navigate(`/product/${f.slug}`)}>
                                            <div className='product-img'> 
                                                <img src={f.imgUrl} className='img-fluid'/>
                                                <div className='d-flex flex-column product-icons'>
                                                    <i className='fa fa-heart mb-3'></i>
                                                    <i className='fa fa-shopping-cart'></i>
                                                </div>
                                            </div>

                                            <div className='card-content pl-3 pt-3'>
                                                <p className='product-title'>{f.title}</p>
                                                <p className='product-cost'>$ {f.cost}</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>

                    <div className='blogs mb-5' data-aos="fade-up" data-aos-duration="700">
                        <p className='home-title'>Our Latest News</p>
                        <div className='row pt-3'>
                            {blogs && blogs.map((f)=>{
                                return(
                                    <>
                                    <div className='col-12 col-md-3'>
                                
                                            <div className='blog-card'>
                                                <div className='blog-img'> 
                                                    <img src={f.imgUrl} className='img-fluid'/>
                                                </div>

                                                <div className='blog-content py-3 px-2'>
                                                    <p className='blog-title'>{f.title}</p>
                                                    <p className='blog-desc'>{f.description.slice(0,150)}</p>
                                                </div>
                                            </div>
                                        </div>
                                                
                                    </>
                                )
                            })}
                           
                        </div>
                    </div>
                    
                </div>

                <div className='container-fluid'>
                    <div className='row mt-4' data-aos="fade-up" data-aos-duration="700"> 
                        <div className='col-6'>
                            <img src='media/p1.jpg' className='img-fluid banner-img-bottom'/>
                        </div>

                        <div className='col-6'>
                            <img src='media/p2.jpg' className='img-fluid banner-img-bottom'/>
                        </div>

                        <div className='col-4'>
                            <img src='media/p3.jpg' className='img-fluid banner-img-bottom'/>
                        </div>
                        <div className='col-4'>
                            <img src='media/p4.jpg' className='img-fluid banner-img-bottom'/>
                        </div>
                        <div className='col-4'>
                            <img src='media/p5.jpg' className='img-fluid banner-img-bottom'/>
                        </div>
                        
                    </div>
                </div>

                <div className='our-services container my-5 py-3' data-aos="fade-up" data-aos-duration="700">
                    <div className='row'>
                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <i className='fa fa-truck'></i>
                            <div className='ml-4 our-service-body'>
                                <p className='title'>Free Shipping</p>
                                <p className='desc'>Get timely delivery of your product.</p>
                            </div>
                        </div>

                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <i className='fa fa-money'></i>
                            <div className='ml-4 our-service-body'>
                                <p className='title'>Value for money</p>
                                <p className='desc'>Get timely delivery of your product.</p>
                            </div>
                        </div>

                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <i className='fa fa-phone-square'></i>
                            <div className='ml-4 our-service-body'>
                                <p className='title'>Customer Support</p>
                                <p className='desc'>Get timely delivery of your product.</p>
                            </div>
                        </div>

                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <i className='fa fa-shopping-bag'></i>
                            <div className='ml-4 our-service-body'>
                                <p className='title'>Return Policy</p>
                                <p className='desc'>Get timely delivery of your product.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
            
        </>
    )
}

export default Home