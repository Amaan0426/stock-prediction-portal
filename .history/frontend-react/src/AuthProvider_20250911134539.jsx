import React, {useState, useContext, createContext} from 'react'


//create the context
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    //read the token from local storage


    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken') ? true : false //!!helps to convert a truthy or falsy value to a boolean value, NOT PROVIDE 
    )
  return (
    <>
    
    </>
  )
}

export default AuthProvider
