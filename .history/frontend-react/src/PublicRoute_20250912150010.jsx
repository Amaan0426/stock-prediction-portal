// so in this PrivateRount.jsx file we will navigate the user based on login status 
import React, {Children, useContext} from 'react'
import AuthContext from './AuthProvider'
import { Navigate } from 'react-router-dom'


const // so in this PrivateRount.jsx file we will navigate the user based on login status 
import React, {Children, useContext} from 'react'
import AuthContext from './AuthProvider'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ?(
    children
  ) : (
    <Navigate to = "/login" />
    )

}

export default PrivateRoute
 = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ?(
    children
  ) : (
    <Navigate to = "/login" />
    )

}

export default PrivateRoute
