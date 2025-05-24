import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userDataContext} from "../context/UserContext";
import Lottie from 'lottie-react';
import Loading from '../Loading.json';

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const {user, setUser} = useContext(userDataContext)

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }
    }
    , [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((Response) => {
        if(Response.status === 200) {
            setUser(Response.data.user)
            setIsLoading(false)
        }
    }).catch((error) => {   
        console.log(error)
        localStorage.removeItem('token')
        navigate('/login')
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

export default UserProtectWrapper