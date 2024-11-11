import React from 'react'
import './Loader.css'

const Loader = ()=>{
    const loader_arr = ['https://i.pinimg.com/originals/cc/8c/cb/cc8ccb63cdafbcb58bac75db749ab500.gif',
        'https://i.pinimg.com/originals/e6/74/28/e674289b49268d870db622d60bf9f243.gif',
        'https://i.pinimg.com/originals/78/8a/2c/788a2c46a9c5c4b669f337c8205b1b99.gif',
        'https://i.pinimg.com/originals/bd/6a/b8/bd6ab8e930f4be5dd3d580ef642e8e05.gif'
    ]

    return(
        <>
            <div className='loader d-flex flex-column align-items-center justify-content-center'>
                <img className='img-fluid' src={loader_arr[Math.floor(Math.random() * loader_arr.length)]}/>
                <p style={{color:'rgb(2,248,252)', letterSpacing:'1.2px'}}>Loading... Groove Till Then!!</p>
            </div>
        </>
    )
}

export default Loader