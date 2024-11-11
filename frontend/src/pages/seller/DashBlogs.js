import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Modal} from 'antd'
import { createBlog, deleteBlog, listBlogs, readBlog, updateBlog } from '../../functions/blog'
import DashMenu from '../../components/DashMenu'

const DashBlog = ()=>{
    const [isCreateBlogModalOpen, setIsCreateBlogModalOpen] = useState(false)
    const [isEditBlogModalOpen, setIsEditBlogModalOpen] = useState(false)

    const [editTitle, setEditTitle] = useState('')
    const [editDesc, setEditDesc] = useState('')
    const [editImgUrl, setEditImgUrl] = useState('')

    const [blogs, setBlogs] = useState([])
    const {user} = useSelector((state)=>state)

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const loadBlog = ()=>{
        listBlogs(user.token).then((res)=>{
            setBlogs(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        loadBlog()
    }, [])

    const handleCreateBlog = ()=>{
        createBlog(user.token, title, imgUrl, desc).then((res)=>{
            setIsCreateBlogModalOpen(false)
            setTitle('')
            setDesc('')
            setImgUrl('')
            loadBlog()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleEditBlog = (slug)=>{
        setIsEditBlogModalOpen(true)
        readBlog(slug).then((res)=>{
            setEditDesc(res.data.description)
            setEditTitle(res.data.title)
            setEditImgUrl(res.data.imgUrl)
        })
    }

    const handleEditBlogBtn = (slug)=>{
        updateBlog(user.token, editTitle, editImgUrl, editDesc, slug).then((res)=>{
            setIsEditBlogModalOpen(false)
            setEditDesc('')
            setEditImgUrl('')
            setEditTitle('')
            loadBlog()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleBlogDelete = (slug)=>{
        deleteBlog(user.token, slug).then((res)=>{
            loadBlog()
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
            <section className='dashboard '> 
                <div className='row container-fluid'>
                    <DashMenu active_class={'blogs'}/>
                    <div className='col-10 py-5 px-5'>
                        <div className='dash-head d-flex justify-content-between align-items-center mb-5'>
                            <p className='dash-title'>BLOGS</p>
                            <button className='dash-btn px-4 py-2' onClick={()=>setIsCreateBlogModalOpen(true)}>Add New Blog</button>
                        </div>

                        {blogs && blogs.length > 0 ? <>
                            <div className='dash-product-list d-flex flex-column text-white'>
                            {blogs && blogs.map((data)=>{

                                return(
                                    <>
                                        <div className='dash-single-product mb-4 d-flex justify-content-between align-items-center px-4 py-2'>
                                            <div>{data.title}</div>
                                            <div className='d-flex'>
                                                <i className='fa fa-pencil mr-3' onClick={()=>handleEditBlog(data.slug)}></i>
                                                <i className='fa fa-trash' onClick={()=>handleBlogDelete(data.slug)}></i>
                                            </div>
                                        </div>

                                        <Modal open={isEditBlogModalOpen} onCancel={()=>setIsEditBlogModalOpen(false)} footer={false}>
                                            <p>EDIT CATEGORY</p>
                                            <div className="d-flex flex-column mt-3">
                                                <input placeholder="Title" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>
                                                <textarea className='my-3' value={editDesc} onChange={(e)=>setEditDesc(e.target.value)} placeholder='Write your content here...!!! '></textarea>
                                                <input placeholder='Image Url' value={editImgUrl} onChange={(e)=>setEditImgUrl(e.target.value)}/>
                                                <button className="btn btn-primary mt-4" onClick={()=>handleEditBlogBtn(data.slug)}>Submit</button>
                                            </div>
                                        </Modal>
                                    
                                    </>
                                )
                            })}

                            </div>
                        
                        </> : <>
                            <p className='text-center' style={{color:'rgb(2,248,252)'}}>NO BLOGS....CREATE NEW ONESSS..!!</p>
                        </>}
                        
                        
                    </div>
                </div>
            </section>

            {/*CREATE CATEGORY MODAL*/}
            <Modal open={isCreateBlogModalOpen} onCancel={()=>setIsCreateBlogModalOpen(false)} footer={false}>
                <p>NEW BLOG</p>
                <div className="d-flex flex-column mt-3">
                    <input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <textarea className='my-3' value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder='Write your content here...!!! '></textarea>
                    <input placeholder='Image Url' value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)}/>
                    <button className="btn btn-primary mt-4" onClick={handleCreateBlog}>Submit</button>
                </div>
            </Modal>

        </>
    )
}

export default DashBlog