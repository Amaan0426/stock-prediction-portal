import React, {useState, useContext, createContext} from 'react'


//create the context
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    //read the token from local storage
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken') //!!NOT PROVIDE WHOLE ACCESS TOKEN. IF THERE IS ACCESS TOKEN THEN TRUE OTHERWISE FALSE
    )
  return (
    <>
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children} THESE  CHILDREN ARE NOTHING BUT THE WHOLE APP COMPONENT. CHILDRENMEANS ALL THE 
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
