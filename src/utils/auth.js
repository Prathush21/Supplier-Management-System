import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const [role, setRole] = useState(null)

    const login = ({user,password}) => {
        if(user && password){
            setUser(user)
            setPassword(password)
            setRole('Admin')
        }

    }

    const logout = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}