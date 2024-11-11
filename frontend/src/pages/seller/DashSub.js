import React, {useState, useEffect} from 'react'
import DashMenu from '../../components/DashMenu'
import { createSub, deleteSub, listSubs, readSub, updateSub } from '../../functions/sub'
import { listCatgeories } from '../../functions/category'
import {useSelector} from 'react-redux'
import {Modal} from 'antd'

const DashSub = ()=>{
    const {user} = useSelector((state)=>state)

    const [isCreateSubCatModalOpen, setIsCreateSubCatModalOpen] = useState(false)
    const [newName, setNewName] = useState('')
    const [newCat, setNewCat] = useState(1)
    const [isEditSubCatModalOpen, setIsEditSubCatModalOpen] = useState(false)
    const [editName, setEditName] = useState('')
    const [editCat, setEditCat] = useState(1)
    // const [categories, setCategories] = useState([])
    const [subs, setSubs] = useState([])

    const loadSub = ()=>{
        listSubs().then((res)=>{
            setSubs(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    useEffect(()=>{
        loadSub()

        // listCatgeories().then((res)=>{
        //     setCategories(res.data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }, [])

    const handleEditClick = (slug)=>{
        setIsEditSubCatModalOpen(true)
        readSub(slug).then((res)=>{
            setEditName(res.data.name)
            setEditCat(res.data.category)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleEditSubmit = (slug)=>{
        updateSub(user.token, editName, editCat, slug).then((res)=>{
            alert('SUb is updated successfully!!')
            setIsEditSubCatModalOpen(false)
            loadSub()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleSubDelete = (slug)=>{
        deleteSub(user.token, slug).then((res)=>{
            alert('SUB DELETED SUCCESSFULLY!')
            loadSub()
        }).catch((err)=>{
            alert('SUB CANNOT BE DELETED!!')
        })
    }

    const handleCreateSub = ()=>{
        createSub(user.token, newName, newCat).then((res)=>{
            alert('New Sub Category Created!!')
            setIsCreateSubCatModalOpen(false)
            loadSub()
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <section className='dashboard '> 
                <div className='row container-fluid'>
                    <DashMenu active_class={'subs'}/>
                    <div className='col-10 py-5 px-5'>
                        <div className='dash-head d-flex justify-content-between align-items-center mb-5'>
                            <p className='dash-title'>SUB CATEGORIES</p>
                            <button className='dash-btn px-4 py-2' onClick={()=>setIsCreateSubCatModalOpen(true)}>Add Sub Category</button>
                        </div>
                        {subs && subs.length >0 ? <>
                            <div className='dash-product-list d-flex flex-column text-white'>
                            {subs && subs.map((data)=>{

                                return(
                                    <>
                                        <div className='dash-single-product mb-4 d-flex justify-content-between align-items-center px-4 py-2'>
                                            <div>{data.name}</div>
                                            <div className='d-flex'>
                                                <i className='fa fa-pencil mr-3' onClick={()=>handleEditClick(data.slug)}></i>
                                                <i className='fa fa-trash' onClick={()=>handleSubDelete(data.slug)}></i>
                                            </div>
                                        </div>
                                        {/*EDIT Sub-Category MODAL*/}
                                        <Modal open={isEditSubCatModalOpen} onCancel={()=>setIsEditSubCatModalOpen(false)} footer={false}>
                                            <p>EDIT SUB CATEGORY</p>
                                            <div className="d-flex flex-column mt-3">
                                                <input placeholder="Name" value={editName} onChange={(e)=>setEditName(e.target.value)}/>
                                                {/* <select value={editCat} onChange={(e)=>setEditCat(e.target.value)}>
                                                    {categories && categories.map((f)=>{
                                                        return(
                                                            <>
                                                                <option value={f._id}>{f.name}</option>
                                                            </>
                                                        )
                                                    })}
                                                </select> */}
                                                <button className="btn btn-primary mt-4" onClick={()=>handleEditSubmit(data.slug)}>Submit</button>
                                            </div>
                                        </Modal>
                                    
                                    </>
                                )
                            })}

                        </div>
                        </> : <>
                            <p className='text-center' style={{color:'rgb(2,248,252)'}}>NO SUB-CATEGORY....CREATE NEW ONESSS..!!</p>
                        </>}

                        
                    </div>
                </div>
            </section>

             {/*CREATE Sub-CATEGORY MODAL*/}
             <Modal open={isCreateSubCatModalOpen} onCancel={()=>setIsCreateSubCatModalOpen(false)} footer={false}>
                <p>NEW Sub Category</p>
                <div className="d-flex flex-column mt-3">
                    <input placeholder="Name" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                    {/* <select value={newCat} onChange={(e)=>setNewCat(e.target.value)}>
                        <option value={1} disabled>Category</option>
                        {categories && categories.map((f)=>{
                            return(
                                <>
                                    <option value={f._id}>{f.name}</option>
                                </>
                            )
                        })}
                    </select> */}
                    <button className="btn btn-primary mt-4" onClick={handleCreateSub}>Submit</button>
                </div>
            </Modal>


        </>
    )
}

export default DashSub