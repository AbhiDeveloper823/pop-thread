import React, {useState, useEffect} from 'react'
import './Shop.css'
import Navbar from '../../components/Navbar'
import { Checkbox,Radio, Slider, ConfigProvider } from 'antd'
import {getProductOnCategory, getProductOnPrice, getProductOnSub, listProducts, getMaxProductPrice } from '../../functions/product'
import {useNavigate} from 'react-router-dom'
import { listCatgeories } from '../../functions/category'
import { listSubs } from '../../functions/sub'
import StarRatings from 'react-star-ratings'
import Loader from '../../components/Loader'


const Shop = ()=>{
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [subs, setSubs] = useState([])

    const [filterCategory, setFilterCategory] = useState('')
    const [filterSub, setFilterSub] = useState([])
    const [filterPrice, setFilterPrice] = useState([0,0])
    const [maxPrice, setMaxPrice] = useState(100)

    const loadProducts = ()=>{
        listProducts().then((res)=>{
            setProducts(res.data)
            
        }).catch((err)=>{
            console.log(err)
        })
    }

    const loadCategories = ()=>{
        listCatgeories().then((res)=>{
            setCategories(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const loadSubs = ()=>{
        listSubs().then((res)=>{
            console.log(res.data)
            setSubs(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        loadProducts()
        loadCategories()
        loadSubs()
        setFilterCategory('')
        setFilterSub('')
        setFilterPrice(0)

        getMaxProductPrice().then((res)=>{
            setMaxPrice(res.data)
        })
    }, [])

    //FILTERSSS

    const handleCategoryChange = (e)=>{
        setFilterSub('')
        setFilterPrice([0,0])
        setFilterCategory(e.target.value)
        getProductOnCategory(e.target.value).then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handlePriceChange = (val)=>{
       setFilterPrice(val)
       setFilterCategory('')
       setFilterSub('')
       getProductOnPrice(val).then((res)=>{
        setProducts(res.data)
       }).catch((err)=>{
        console.log(err)
       })
    }

    const handleSubChange = (e)=>{
        setFilterCategory('')
        setFilterPrice([0,0])
        setFilterSub(e.target.value)
        getProductOnSub(e.target.value).then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleRemoveFilters = ()=>{
        setFilterCategory('')
        setFilterSub('')
        setFilterPrice([0,0])
        loadProducts()
    }
    

    return(
        <>
            <Navbar fixed={true}/>
            {products ? <> 
                <div className='container-fluid my-5 pt-5 text-white'>
                <div className='row'>
                    <div className='col-3 px-5'>
                        <div className='filters'>
                            <div className='filter-menu-head d-flex justify-content-between align-items-center mb-4'>
                                <div className='title'>FILTERS</div>
                                <button className='remove-filters-btn' onClick={handleRemoveFilters}><i className='fa fa-refresh'></i></button>
                            </div>
                            <div className='filter-category mb-5'>
                                <p className='filter-title'>Filter By Category</p>
                                <div className='d-flex flex-column'>
                                    <Radio.Group value={filterCategory} onChange={handleCategoryChange}>
                                        {categories && categories.map((f)=>{
                                            return(
                                                <>
                                                    <Radio className='mb-2 text-white' value={f._id}>{f.name}</Radio><br/>
                                                </>
                                            )
                                        })}
                                    </Radio.Group>
                                    
                                </div>
                            </div>

                            <div className='filter-by-price mb-5'>
                                <p className='filter-title'>Filter By Price</p>

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

                                    <Slider range onChange={handlePriceChange} value={filterPrice} max={maxPrice + 10}></Slider>
                                </ConfigProvider>
                            </div>

                            <div className='filter-category mb-5'>
                                <p className='filter-title'>Filter By Sub Category</p>
                                <div className='d-flex flex-column'>
                                    <Radio.Group value={filterSub} onChange={handleSubChange}>
                                    {subs && subs.map((f)=>{
                                        return(
                                            <>
                                                <Radio className='mb-2 text-white' value={f._id}>{f.name}</Radio><br/>
                                            </>
                                        )
                                    })}
                                    </Radio.Group>
                                    
                                </div>
                            </div>


                        </div>
                        
                    </div>

                    <div className='col-9 products' data-aos={'fade-right'} data-aos-duration="800">
                    {products.length > 0 ? <>
                        <div className='row'>
                            {products && products.map((data)=>{

                                return(
                                    <>
                                        <div className='col-12 col-md-3 mb-5'>
                                            <div className='shop-product-card' onClick={()=>navigate(`/product/${data.slug}`)}>
                                                <div className='shop-product-img'> 
                                                    <img src={data.imgUrl} className='img-fluid'/>
                                                    <div className='d-flex flex-column shop-product-icons'>
                                                        <i className='fa fa-heart mb-3'></i>
                                                        <i className='fa fa-shopping-cart'></i>
                                                    </div>
                                                </div>

                                                <div className='card-content pl-3 pt-3'>
                                                    <StarRatings numberOfStars={5} rating={4} starDimension='12px' starSpacing='1.2px' starRatedColor='rgb(2,248,252)'></StarRatings>
                                                    <p className='shop-product-title'>{data.title}</p>
                                                    <p className='shop-product-cost'>$ {data.cost}</p>            
                                                </div>
                                            </div>
                                        </div>
                    
                                    </>)
                            })}
                        </div>
                        </> : <>
                                <div className='d-flex align-items-center justify-content-center mx-auto'>
                                    <div style={{color:'rgb(2,248,252)'}}>Sorry...But No Products!!</div>
                                </div>
                        </>
                    }        
                    </div>
                </div>
            </div>
            </> : <>
                <Loader/>
            </>}
        </>
    )
}

export default Shop