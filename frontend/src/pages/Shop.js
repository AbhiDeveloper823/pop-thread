import React, {useState} from 'react'
import './Shop.css'
import Navbar from '../components/Navbar'
import { Checkbox, Slider, ConfigProvider } from 'antd'


const Shop = ()=>{
    const [filterCategory, setFiltercategory] = useState([])
    const [filterSub, setFilterSub] = useState([])
    const [filterPrice, setFilterPrice] = useState([0,0])

    const handleCategoryChange = (e)=>{
        if(e.target.checked){
            filterCategory.push(e.target.value)
        }else{
            if(filterCategory){
                filterCategory.map((i)=>{
                    if(i == e.target.value){
                        let j = filterCategory.indexOf(i)
                        filterCategory.splice(j,1)
                    }
                })
            }
        }

        console.log(filterCategory)
    }

    const handlePriceChange = (val)=>{
       setFilterPrice(val)
    }

    const handleSubChange = (e)=>{
        if(e.target.checked){
            filterSub.push(e.target.value)
        }else{
            if(filterSub){
                filterSub.map((i)=>{
                    if(i == e.target.value){
                        let j = filterSub.indexOf(i)
                        filterSub.splice(j,1)
                    }
                })
            }
        }
    }

    

    return(
        <>
            <Navbar fixed={true}/>
            <div className='container-fluid my-5 pt-5 text-white'>
                <div className='row'>
                    <div className='col-3 px-5'>
                        <div className='filters'>
                            <div className='filter-category mb-5'>
                                <p className='fiter-title'>Product Categories</p>
                                <div className='d-flex flex-column'>
                                    <Checkbox onChange={handleCategoryChange} value='1' className='mb-2 text-white'>Option 1</Checkbox>
                                    <Checkbox onChange={handleCategoryChange} value='2' className='mb-2 text-white'>Option 2</Checkbox>
                                    <Checkbox onChange={handleCategoryChange} value='3' className='mb-2 text-white'>Option 3</Checkbox>
                                    <Checkbox onChange={handleCategoryChange} value='4' className='mb-2 text-white'>Option 4</Checkbox>
                                    <Checkbox onChange={handleCategoryChange} value='5' className='mb-2 text-white'>Option 5</Checkbox>
                                    <Checkbox onChange={handleCategoryChange} value='6' className='mb-2 text-white'>Option 6</Checkbox>
                                    <Checkbox onChange={handleCategoryChange} value='7' className='mb-2 text-white'>Option 7</Checkbox>
                                </div>
                            </div>

                            <div className='filter-by-price mb-5'>
                                <p className='fiter-title'>Filter By Price</p>

                                <ConfigProvider
                                    theme={
                                        {
                                            components:{
                                                Slider:{
                                                    railBg:'rgba(255,255,255,1)',
                                                    railHoverBg:'rgba(255,255,255,1)',
                                                    railSize:2
                                                }
                                            }
                                        }
                                    }
                                >

                                    <Slider range onChange={handlePriceChange} value={filterPrice} max={5000}></Slider>
                                </ConfigProvider>
                            </div>

                            <div className='filter-category mb-5'>
                                <p className='fiter-title'>Product Sub Categories</p>
                                <div className='d-flex flex-column'>
                                    <Checkbox onChange={handleSubChange} value='1' className='mb-2 text-white'>Option 1</Checkbox>
                                    <Checkbox onChange={handleSubChange} value='2' className='mb-2 text-white'>Option 2</Checkbox>
                                    <Checkbox onChange={handleSubChange} value='3' className='mb-2 text-white'>Option 3</Checkbox>
                                    <Checkbox onChange={handleSubChange} value='4' className='mb-2 text-white'>Option 4</Checkbox>
                                    <Checkbox onChange={handleSubChange} value='5' className='mb-2 text-white'>Option 5</Checkbox>
                                    <Checkbox onChange={handleSubChange} value='6' className='mb-2 text-white'>Option 6</Checkbox>
                                    <Checkbox onChange={handleSubChange} value='7' className='mb-2 text-white'>Option 7</Checkbox>
                                </div>
                            </div>


                        </div>
                        
                    </div>

                    <div className='col-9 products'>
                        <div className='row'>
                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card' >
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-3 mb-5'>
                                <div className='shop-product-card'>
                                    <div className='shop-product-img'> 
                                        <img src='https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='img-fluid'/>
                                        <div className='d-flex flex-column shop-product-icons'>
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
                                        <p className='shop-product-title'>DRE's Hoodie</p>
                                        <p className='shop-product-cost'>$ 200</p>            
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop