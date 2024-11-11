import React, {useState, useEffect} from 'react'
import DashMenu from '../../components/DashMenu'
import { createCatgeory, deleteCatgeory, listCatgeories, readCategory, updateCategory } from '../../functions/category'
import {Modal} from 'antd'
import { useSelector } from 'react-redux'

const DashCategory = ()=>{
    const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false)
    const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false)
    const [categories, setCategories] = useState([])
    const [newName, setNewName] = useState('')
    const [editName, setEditName] = useState('')
    const {user} = useSelector((state)=>state)

    const loadCategory = ()=>{
        listCatgeories().then((res)=>{
            setCategories(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        loadCategory()
    }, [])

    const handleCreateCategory = ()=>[
        createCatgeory(user.token, newName).then((res)=>{
            setIsCreateCategoryModalOpen(false)
            loadCategory()
            setNewName('')
        }).catch((err)=>{
            console.log(err)
        })
    ]

    const handleEditClick = (slug)=>{
        setIsEditCategoryModalOpen(true)
        readCategory(slug).then((res)=>{
            setEditName(res.data.name)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleEditSubmit = (slug)=>{
        updateCategory(user.token, slug, editName).then((res)=>{
            setIsEditCategoryModalOpen(false)
            setEditName('')
            loadCategory()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleCategoryDelete = (slug)=>{
        deleteCatgeory(user.token, slug).then((res)=>{
            loadCategory()
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
            <section className='dashboard '> 
                <div className='row container-fluid'>
                    <DashMenu active_class={'category'}/>
                    <div className='col-10 py-5 px-5'>
                        <div className='dash-head d-flex justify-content-between align-items-center mb-5'>
                            <p className='dash-title'>CATEGORIES</p>
                            <button className='dash-btn px-4 py-2' onClick={()=>setIsCreateCategoryModalOpen(true)}>Add Category</button>
                        </div>

                        {categories && categories.length>0 ? <>
                            <div className='dash-product-list d-flex flex-column text-white'>
                            {categories && categories.map((data)=>{

                                return(
                                    <>
                                        <div className='dash-single-product mb-4 d-flex justify-content-between align-items-center px-4 py-2'>
                                            <div>{data.name}</div>
                                            <div className='d-flex'>
                                                <i className='fa fa-pencil mr-3' onClick={()=>handleEditClick(data.slug)}></i>
                                                <i className='fa fa-trash' onClick={()=>handleCategoryDelete(data.slug)}></i>
                                            </div>
                                        </div>

                                        <Modal open={isEditCategoryModalOpen} onCancel={()=>setIsEditCategoryModalOpen(false)} footer={false}>
                                            <p>EDIT CATEGORY</p>
                                            <div className="d-flex flex-column mt-3">
                                                <input placeholder="Name" value={editName} onChange={(e)=>setEditName(e.target.value)}/>
                                                <button className="btn btn-primary mt-4" onClick={()=>handleEditSubmit(data.slug)}>Submit</button>
                                            </div>
                                        </Modal>
                                    
                                    </>
                                )
                            })}

                        </div>
                         </> : <>
                         <p className='text-center' style={{color:'rgb(2,248,252)'}}>NO CATEGORY....CREATE NEW ONESSS..!!</p>
                         </>}

                        
                        
                    </div>
                </div>
            </section>

            {/*CREATE CATEGORY MODAL*/}
            <Modal open={isCreateCategoryModalOpen} onCancel={()=>setIsCreateCategoryModalOpen(false)} footer={false}>
                <p>NEW CATEGORY</p>
                <div className="d-flex flex-column mt-3">
                    <input placeholder="Name" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                    <button className="btn btn-primary mt-4" onClick={handleCreateCategory}>Submit</button>
                </div>
            </Modal>

            {/*EDIT CATEGORY MODAL*/}
            
        
        </>
    )
}

export default DashCategory