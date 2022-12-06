import { createContext, useEffect, useState } from 'react'
// import authService from '../services/auth.service'

const AuthContext = createContext()

function AuthProviderWrapper(props) {



    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }


    return (
        <AuthContext.Provider value={{ storeToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }