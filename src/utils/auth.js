import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const login = ({ user, password }) =>
    new Promise((resolve, reject) => {
      if (user && password) {
        const data = {
          email: user,
          password: password,
        };

        const url = "http://localhost:8087/user/login";
        axios.defaults.withCredentials = true;
        axios
          .post(url, data, { withCredentials: true })
          .then((res) => {
            if (res.request.status === 200 || res.request.status === 201) {
              setRole(res.data.role);
              setUser(user);
              setAlertShow(false);
              setAlertMessage('');
              resolve(user);
            } else {
              reject(res.data.message);
            }
          })
          .catch((err) => {
            switch (err.request.status) {
              case 400:
                setAlertMessage(err.response.data.message);
                setAlertShow(true);
                break;
              case 401:
                setAlertMessage(err.response.data.message);
                setAlertShow(true);
                break;
              case 500:
                setAlertMessage("Server Error!");
                setAlertShow(true);
                break;
              case 501:
                setAlertMessage("Server Error!");
                setAlertShow(true);
                break;
              case 502:
                setAlertMessage("Server Error!");
                setAlertShow(true);
                break;
              default:
                break;
            }
            reject(err);
          });
      }
    });

  const logout = () => {
    axios.get("http://localhost:8087/user/logout");
    setUser(null);
    setRole(null);
  };

  const setAlert = (msg) => {
      setAlertMessage(msg)
      setAlertShow(true)
  }

  return (
    <AuthContext.Provider
      value={{ user, role, alertMessage, alertShow, login, logout, setAlert }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
