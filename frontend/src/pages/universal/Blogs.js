import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import { listAllBlogs } from '../../functions/blog'
import Loader from '../../components/Loader'
import './Home.css'

const Blogs = ()=>{
    const [blogs, setBlogs] = useState([])

    const loadAllBlogs = ()=>{
        listAllBlogs().then((res)=>{
            console.log(res.data)
            setBlogs(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        loadAllBlogs()
    }, [])
    return(
        <>
            <Navbar/>
            <div className='container mt-5 pt-5 mb-3'>
                <div className='row pt-3 justify-content-center'>
                    {blogs ? <>
                        {blogs && blogs.map((f)=>{
                            return(
                                <>
                                <div className='col-12 col-md-4 mb-5 mt-2'>
                                    <div className='blog-card' data-aos="fade-up" data-aos-duration="700">
                                        <div className='blog-img'> 
                                            <img src={f.imgUrl} className='img-fluid'/>
                                        </div>

                                        <div className='blog-content py-3 px-2'>
                                            <p className='blog-title' style={{color:'rgb(2,248,252)'}}>{f.title}</p>
                                            <p className='blog-desc'>{f.description.slice(0, 250)} </p>
                                            <div className='d-flex justify-content-between text-white'>
                                                <p>{f.createdAt.split('T')[0]}</p>
                                                <p>{f.postedBy.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </> : <>
                        <Loader/>
                    </>}                    
                </div>
            </div>
        </>
    )
}

export default Blogs