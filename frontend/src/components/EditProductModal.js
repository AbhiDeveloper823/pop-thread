import { Modal } from "antd";
import React, {useState, useEffect} from "react";
import { listSubs} from "../functions/sub";
import { listCatgeories } from "../functions/category";
import { useSelector } from "react-redux";
import { editProduct, getProductInfo } from "../functions/product";
import { toast } from "react-toastify";

const EditProductModal = ({isEditProductModalOpen, handleModalClose, slug})=>{
    const {user} = useSelector((state)=>state)
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

    useEffect(()=>{
        if(slug){
            getProductInfo(slug).then((res)=>{
                setTitle(res.data.title)
                setShort(res.data.short_desc)
                setCatChoice(res.data.category._id)
                setSubChoice(res.data.sub._id)
                setDesc(res.data.desc)
                setImgurl(res.data.imgUrl)
                setCost(res.data.cost)
                setQty(res.data.countInStock)
            }).catch((err)=>{
                console.log(err)
            })
            
        }

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

     }, [slug])

     const handleCatChange = (e)=>{
        setCatChoice(e.target.value)
    }
    
    const handleEdit = ()=>{
        let edited = {
            title, 
            short,
            desc,
            imgUrl,
            cost,
            qty,
            catChoice,
            subChoice
        }
        editProduct(user.token, edited, slug).then((res)=>{
            toast.success('Product successfully edited!!')
            setLoading(false)
            
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <Modal open={isEditProductModalOpen} onCancel={handleModalClose} footer={false}>
                <p className='product-modal-title'>EDIT PRODUCT</p>
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
                    <button onClick={handleEdit} className='create-product py-3'>{loading ? 'Loading...' : 'Edit Product'}</button>
                </div>
        </Modal>
        </>
    )
}

export default EditProductModal