import React from 'react'
import Navbar from '../components/Navbar'

const Trends = ()=>{
    return(
        <>
            <Navbar/>
            <div className='container-fluid mt-5 pt-5 mb-3'>
                <div className='row'>
                    <div className='col-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src='media/p1.jpg' className='img-fluid mb-4'/>
                        <img src='media/p3.jpg' className='img-fluid mb-4'/>
                        <img src='media/p4.jpg' className='img-fluid mb-4'/>
                    </div>

                    <div className='col-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src='media/p4.jpg' className='img-fluid mb-4'/>
                        <img src='media/p1.jpg' className='img-fluid mb-4'/>
                        <img src='media/p5.jpg' className='img-fluid mb-4'/>
                    </div>


                    <div className='col-4 d-flex flex-column align-items-center '>
                        <img src='media/p2.jpg' className='img-fluid mb-4'/>
                        <img src='media/p5.jpg' className='img-fluid mb-4'/>
                        <img src='media/p6.jpg' className='img-fluid mb-4'/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Trends