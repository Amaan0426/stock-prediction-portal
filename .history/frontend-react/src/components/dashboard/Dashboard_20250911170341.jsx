import React, {useEffect} from 'react'


const Dashboard = () => {

    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const responce = await axios.get('http://127.0.0.1:8000/api/v1/protected-view/')

            }catch(error){
                console.error('Error fetching protected data:', error)
            }
        }
        fetchProtectedData()
        

  return (
    <>
       <h1 className='text-light'>Dashboard</h1>`    
    </>
  )
}

export default Dashboard
