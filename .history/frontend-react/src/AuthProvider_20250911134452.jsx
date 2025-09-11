import React, {useState, useContext, createContext} from 'react'


//create the context
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    //read the token from local storage


    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('accessToken') ? true : false
    )
  return (
    <>
    
    </>
  )
}

export default AuthProvider
