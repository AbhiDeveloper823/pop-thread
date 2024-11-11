import React, {useState, useEffect} from 'react'
import {Modal} from 'antd'
import './ProfileModal.css'
import {useSelector} from 'react-redux'
import { getUserInfo, updateUserInfo } from '../functions/user'

const ProfileModal = ({isProfileModalOpen, handleClose})=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [dob, setDOB]=  useState('')
    const [loading, setLoading] = useState(false)
    const {user} = useSelector((state)=>state)

    const getUserDetail = async()=>{
        await getUserInfo(user.token).then((res)=>{
            let {email, name, dob, address, phone} = res.data
            setEmail(email)
            setName(name)
            setDOB(dob)
            setPhone(phone)
            setAddress(address)
        }).catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        if(user){
            getUserDetail()
        }
    }, [user])

    const handleSubmit = async()=>{
        setLoading(true)
        let data = {
            name, phone, address, dob
        }
        await updateUserInfo(user.token, data).then((res)=>{
            setLoading(false)
            alert(res.data.success)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <Modal open={isProfileModalOpen} onCancel={handleClose} footer={false}>
            <p className='profile-modal-title'>PROFILE</p>
            <div className='profile-input d-flex flex-column'>
                <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type='text' disabled placeholder="Email" value={email} />
                <input type='text' placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input type='text' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <input type='date' placeholder='DOB' value={dob} onChange={(e)=>setDOB(e.target.value)}/>
                <button className='submit-btn-profile-modal mt-4 py-2 mx-auto' onClick={handleSubmit}>{loading ? 'Loading...' : 'Submit'}</button>
            </div>
        </Modal>
        </>
    )
}

export default ProfileModal