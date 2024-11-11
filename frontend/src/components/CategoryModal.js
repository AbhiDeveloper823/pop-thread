import { Modal } from "antd";
import React, {useState} from "react";

const CategoryModal = ({modalOpen, handleClose, title, slug})=>{
    const [name, setName] = useState('')
    return(
        <>
        <Modal open={modalOpen} onCancel={handleClose} footer={false}>
            <p>{title}</p>
            <div className="d-flex flex-column mt-3">
                <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                {slug ? <>
                    <button className="btn btn-primary mt-4">Edit</button>
                </> :<>
                    <button className="btn btn-primary mt-4">Submit</button>
                </>}
                
            </div>
        </Modal>
        </>
    )
}

export default CategoryModal