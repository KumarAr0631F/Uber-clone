import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const {user, setUser} = useContext(UserDataContext)

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
        return <div>Loading...</div>
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper