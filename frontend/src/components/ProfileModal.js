import React, {useState, useEffect} from 'react'
import {Modal} from 'antd'
import './ProfileModal.css'
import {useSelector} from 'react-redux'

const ProfileModal = ({isProfileModalOpen, handleClose})=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [altAddress, setAltAddress] = useState()
    const [dob, setDOB]=  useState('')
    const {user} = useSelector((state)=>state)

    return(
        <>
        <Modal open={isProfileModalOpen} onCancel={handleClose} footer={false}>
            <p className='profile-modal-title'>PROFILE</p>
            <div className='profile-input d-flex flex-column'>
                <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type='text' placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input type='text' placeholder='Address' value={address} setAddress={(e)=>setAddress(e.target.value)}/>
                <input type='text' placeholder='Alternate Address' value={altAddress} onChange={(e)=>setAltAddress(e.target.value)}/>
                <input type='date' placeholder='DOB' value={dob} onChange={(e)=>setDOB(e.target.value)}/>
            </div>
        </Modal>
        </>
    )
}

export default ProfileModal