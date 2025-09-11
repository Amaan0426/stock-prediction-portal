import React, {useEffect} from 'react'


const Dashboard = () => {

    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const responce = await axios.get('')

            }catch(error){
                console.error('Error fetching protected data:', error)
            }
        }

  return (
    <>
       <h1 className='text-light'>Dashboard</h1>`    
    </>
  )
}

export default Dashboard
