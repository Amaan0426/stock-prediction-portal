import React, {useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstance'



const Dashboard = () => {

    const accessToken = localStorage.getItem('accessToken')

    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const response = await axiosInstance.get('/protected-view/',{
                    headers: {
                        Authorization: `Bearer ${accessToken}` //include the access token in the Authorization header
                    }
                })
                console.log('Protected data:', response.data)

            }catch(error){
                console.error('Error fetching protected data:', error)
            }
        }
        fetchProtectedData()
    }, [])

  return (
    <>
       <h1 className='text-light'>Dashboard</h1>`    
    </>
  )
}

export default Dashboard
