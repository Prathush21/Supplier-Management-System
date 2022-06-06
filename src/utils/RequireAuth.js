import {Navigate} from 'react-router-dom';
import { useAuth } from './auth';

export const RequireAuth = ({children}) => {
    const auth = useAuth()

    if (!auth.user) {
        if (!sessionStorage.getItem("user")) {
            return <Navigate to='/' />
        }else{
            let value = {
                username : sessionStorage.getItem("user"),
                role : sessionStorage.getItem("role")
            }
            auth.setAttribute(value);
            console.log(sessionStorage.getItem("user"),sessionStorage.getItem("role"));
            console.log(auth.user, auth.role);
        }
        
    }

    console.log(sessionStorage.getItem("user"),sessionStorage.getItem("role"));
    console.log(auth.user, auth.role);



    return children

}