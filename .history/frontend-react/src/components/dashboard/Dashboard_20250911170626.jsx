import React, {useEffect} from 'react'
import axios from 'axios'



const Dashboard = () => {

    const access

    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/v1/protected-view/',{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                })

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
