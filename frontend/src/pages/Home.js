import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Home.css'
import Navbar from '../components/Navbar'

const Home = () =>{
    const navigate = useNavigate()
    return(
        <>
            <Navbar/>
            <section className='home'>
                <div className='banner mt-5'></div>
                <div className='container my-5'>
                    <div className='featured-products mb-5'>
                        <p className='home-title'>Featured Products</p>
                        <div className='row pt-3'>
                            <div className='col-12 col-md-3'>
                                <div className='product-card'  onClick={()=>navigate('/1')}>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='trending-products mb-5'>
                        <p className='home-title'>Trending Products</p>
                        <div className='row pt-3'>
                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='promo'>
                    <video autoPlay muted loop src='media/v7.mp4'></video>
                </div>

                <div className='container my-5'>

                <div className='new-arrival-products mb-5'>
                        <p className='home-title'>New Arrivals</p>
                        <div className='row pt-3'>
                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='product-card'>
                                    <div className='product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column product-icons'>
                                            <i className='fa fa-heart mb-3'></i>
                                            <i className='fa fa-shopping-cart'></i>
                                        </div>
                                    </div>

                                    <div className='card-content pl-3 pt-3'>
                                        <div className='ratings d-flex mb-3'>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                            <i className='fa fa-star mr-2'></i>
                                        </div>
                                        <p className='product-title'>DRE's Hoodie</p>
                                        <p className='product-cost'>$ 200</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='blogs mb-5'>
                        <p className='home-title'>Our Latest News</p>
                        <div className='row pt-3'>
                            <div className='col-12 col-md-3'>
                                <div className='blog-card'>
                                    <div className='blog-img'> 
                                        <img src='https://images.pexels.com/photos/18020480/pexels-photo-18020480/free-photo-of-a-woman-in-a-green-dress-and-boots-sitting-on-a-wooden-bench.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' className='img-fluid'/>
                                    </div>

                                    <div className='blog-content py-3 px-2'>
                                        <p className='blog-title'>TITLE</p>
                                        <p className='blog-desc'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3'>
                                <div className='blog-card'>
                                    <div className='blog-img'> 
                                        <img src='https://images.pexels.com/photos/18020480/pexels-photo-18020480/free-photo-of-a-woman-in-a-green-dress-and-boots-sitting-on-a-wooden-bench.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' className='img-fluid'/>
                                    </div>

                                    <div className='blog-content py-3 px-2'>
                                        <p className='blog-title'>TITLE</p>
                                        <p className='blog-desc'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </p>
                                    </div>
                                </div>
                            </div>


                            <div className='col-12 col-md-3'>
                                <div className='blog-card'>
                                    <div className='blog-img'> 
                                        <img src='https://images.pexels.com/photos/18020480/pexels-photo-18020480/free-photo-of-a-woman-in-a-green-dress-and-boots-sitting-on-a-wooden-bench.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' className='img-fluid'/>
                                    </div>

                                    <div className='blog-content py-3 px-2'>
                                        <p className='blog-title'>TITLE</p>
                                        <p className='blog-desc'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </p>
                                    </div>
                                </div>
                            </div>



                            <div className='col-12 col-md-3'>
                                <div className='blog-card'>
                                    <div className='blog-img'> 
                                        <img src='https://images.pexels.com/photos/18020480/pexels-photo-18020480/free-photo-of-a-woman-in-a-green-dress-and-boots-sitting-on-a-wooden-bench.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' className='img-fluid'/>
                                    </div>

                                    <div className='blog-content py-3 px-2'>
                                        <p className='blog-title'>TITLE</p>
                                        <p className='blog-desc'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, </p>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                    
                </div>

                <div className='container-fluid'>
                    <div className='row mt-4'>
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

                <div className='our-services container my-5 py-3'>
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
            
        </>
    )
}

export default Home