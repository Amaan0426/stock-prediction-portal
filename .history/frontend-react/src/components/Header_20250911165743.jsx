import React, {useContext} from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('accessToken') //remove the accessToken from local storage
    localStorage.removeItem('refreshToken') //remove the refreshToken from local storage
    setIsLoggedIn(false)
    navigate('/login')
  } 
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start d-flex justify-content-between'>
        <Link className='navbar-brand text-light' to = "/">Stock Prediction</Link>

        <div>
          {isLoggedIn ? (
            <>
                <button className='btn btn-danger' onClick={handleLogout} >Logout</button>
                
          ) : (
            <>
              <Button text = 'Login' class="btn-outline-info" url ="/login"/>
              &nbsp;
              <Button text = 'Register' class="btn-info" url="/register" />   
            </>
          )}
        </div>
      </nav>

    </>
  )
}

export default Header
