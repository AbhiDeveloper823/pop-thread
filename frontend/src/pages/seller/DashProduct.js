import React, {useState, useEffect} from 'react'
import './DashProduct.css' 
import DashMenu from '../../components/DashMenu'
import {Modal} from 'antd'
import { createProduct, deleteProduct, getProductInfo, listProductsBySellers } from '../../functions/product'
import {useSelector} from 'react-redux'
import { listCatgeories } from '../../functions/category'
import {useNavigate} from 'react-router-dom'
import EditProductModal from '../../components/EditProductModal'
import { listSubs } from '../../functions/sub'

const DashProduct = ()=>{
    const navigate = useNavigate()
    const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useState(false)
    const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false)

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [short, setShort] = useState('')
    const [desc, setDesc] = useState('')
    const [imgUrl, setImgurl] = useState('')
    const [cost ,setCost] = useState(0)
    const [qty, setQty] = useState(0)
    const [catChoice, setCatChoice] = useState(1)
    const [subChoice, setSubChoice] = useState(1)
    const [cat, setCat] = useState([])
    const [sub, setSub] = useState([])

    const {user} = useSelector((state)=>state)

    const loadProducts = ()=>{
        listProductsBySellers(user.token).then((res)=>{
            setProducts(res.data)
           }).catch((err)=>{
            console.log(err)
           })
    }

    useEffect(()=>{
       listCatgeories().then((res)=>{
        setCat(res.data)
       }).catch((err)=>{
        console.log(err)
       }) 

       listSubs().then((res)=>{
        setSub(res.data)

        }).catch((err)=>{
            console.log(err)
        })

       loadProducts()
       
    }, [])

    const handleCatChange = (e)=>{
        setCatChoice(e.target.value)
    }

    const handleCreate = async()=>{
        let data = {
            title,
            desc,
            'short_desc':short,
            cost,
            countInStock:qty,
            imgUrl,
            category:catChoice,
            sub:subChoice
        }

        await createProduct(user.token, data).then((res)=>{
            setTitle('')
            setShort('')
            setDesc('')
            setImgurl('')
            setCost(0)
            setQty(0)
            setCatChoice(1)
            setSubChoice(1)

            setIsCreateProductModalOpen(false)
            loadProducts()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleEdit = (slug)=>{
        setIsEditProductModalOpen(true)
        let localSlug = localStorage.getItem('local_slug')

        if(localSlug){
            localStorage.removeItem('local_slug')
        }

        localStorage.setItem('local_slug', slug)

        console.log(localStorage.getItem('local_slug'))
         
    }

    const handleModalClose = ()=>{
        setIsEditProductModalOpen(false)
        loadProducts()
    }

    const handleProductDelete = (slug)=>{
        deleteProduct(user.token, slug).then((res)=>{
            loadProducts()
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
            <section className='dashboard '> 
                <div className='row container-fluid'>
                    <DashMenu active_class={'products'}/>
                    <div className='col-10 py-5 px-5'>
                        <div className='dash-head d-flex justify-content-between align-items-center mb-5'>
                            <p className='dash-title'>PRODUCTS</p>
                            <button className='dash-btn px-4 py-2' onClick={()=>setIsCreateProductModalOpen(true)}>Add Product</button>
                        </div>

                        {products && products.length>0 ? <>
                            <div className='dash-product-list d-flex flex-column text-white'>
                            {products && products.map((data)=>{

                                return(
                                    <>
                                        <div className='dash-single-product mb-4 d-flex justify-content-between align-items-center px-4 py-2'>
                                            <div>{data.title}</div>
                                            <div>{data.cost}</div>
                                            <div>{data.countInStock}</div>
                                            <div className='d-flex'>
                                                <i className='fa fa-eye mr-3' onClick={()=>navigate(`/product/${data.slug}`)}></i>
                                                <i className='fa fa-pencil mr-3' onClick={()=>handleEdit(data.slug)}></i>
                                                <i className='fa fa-trash' onClick={()=>handleProductDelete(data.slug)}></i>
                                            </div>
                                        </div>
                                    
                                    </>
                                )
                            })}

                        </div>
                        </> : <>
                            <p className='text-center' style={{color:'rgb(2,248,252)'}}>NO PRODUCTS....CREATE NEW ONESSS..!!</p>
                        </>}

                        

                    </div>
                </div>
            </section>
            <EditProductModal isEditProductModalOpen={isEditProductModalOpen} handleModalClose={handleModalClose} slug={localStorage.getItem('local_slug')}/>

            {/*CREATE PRODUCT MODAL*/}
            <Modal open={isCreateProductModalOpen} onCancel={()=>setIsCreateProductModalOpen(false)} footer={false}>
                <p className='product-modal-title'>NEW PRODUCT</p>
                <div className='product-form d-flex flex-column'>
                    <input placeholder='Title' className='mb-3 pl-3 py-2' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <input placeholder='Short Description' className='mb-3 pl-3 py-2' value={short} onChange={(e)=>setShort(e.target.value)}/>
                    <input placeholder='Product Image URL' className='mb-3 pl-3 py-2' value={imgUrl} onChange={(e)=>setImgurl(e.target.value)}/>
                    <textarea style={{height:'100px'}} placeholder='Description' className='mb-3 pl-3 py-2' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
                    <select placeholder="Category" value={catChoice} onChange={handleCatChange} className='mb-3 pl-3 py-2'>
                        <option value={1}>Category</option>
                        {cat && cat.map((i)=>{
                            return(
                                <> 
                                    <option value={i._id}>{i.name}</option>
                                </>
                            )
                        })}
                    </select>
                    <select placeholder="Sub-Category" value={subChoice} onChange={(e)=>setSubChoice(e.target.value)} className='mb-3 pl-3 py-2'>
                        <option value={1}>Sub Category</option>
                        {sub && sub.map((i)=>{
                            return(
                                <> 
                                    <option value={i._id}>{i.name}</option>
                                </>
                            )
                        })}
                    </select>
                    <input placeholder='Cost' type='number' className='mb-3 pl-3 py-2' value={cost} onChange={(e)=>setCost(e.target.value)}/>
                    <input placeholder='Quantity' type='number' className='mb-3 pl-3 py-2' value={qty} onChange={(e)=>setQty(e.target.value)}/>
                    <button onClick={handleCreate} className='create-product py-3'>{loading ? 'Loading...' : 'Create Product'}</button>
                </div>
            </Modal>
            
            
        </>
    )
}

export default DashProduct