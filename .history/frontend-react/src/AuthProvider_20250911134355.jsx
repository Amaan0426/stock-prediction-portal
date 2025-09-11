import React, {useState, useContext, createContext} from 'react'


//create the context
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    

    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    
    </>
  )
}

export default AuthProvider
