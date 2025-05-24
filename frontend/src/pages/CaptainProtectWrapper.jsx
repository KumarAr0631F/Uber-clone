import React, { useState } from 'react'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import Lottie from 'lottie-react'
import Loading from '../Loading.json'

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!token) {
            navigate('/captain-login')
        }
    }
    , [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((Response) => {
        if(Response.status === 200) {
            setCaptain(Response.data.captain)
            setIsLoading(false)
        }
    }).catch((error) => {   
        console.log(error)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })

    if(isLoading) { 
        return <div className='h-screen w-full flex items-center justify-center'>
            <Lottie animationData={Loading}/>
        </div>
    }

    return (
        <>
        {children}
        </>
    )
}

export default CaptainProtectWrapper;