import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const [role, setRole] = useState(null)

    const login = ({user,password}) => 
        new Promise((resolve, reject) => {
            if(user && password){
                const data = {
                    email: user,
                    password: password
                }
                    
                const url = 'http://localhost:8087/user/login';
                axios.defaults.withCredentials = true
                axios
                .post(url, data, {withCredentials:true})
                .then((res) => {
                    if (res.request.status === 200 || res.request.status === 201 ) {
                        console.log(res)
                        setRole(res.data.role)
                        setUser(user)
                        setPassword(password)
                        resolve(user)
                    } else{
                        reject(res.data.message)
                    }
                })
                .catch((err) => {
                    reject(err)
                    console.log(err);
                }) 
            }   
        })

    const logout = () => {
        axios.get('http://localhost:8087/user/logout')
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