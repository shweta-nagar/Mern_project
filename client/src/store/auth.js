import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeToken = (severtoken) => {
    localStorage.setItem("token", severtoken);
    setToken(severtoken);
  };

  //tracking the logout functionality

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  const isLoggedIn = !!token;
  console.log("Login", isLoggedIn);

  return (
    <AuthContext.Provider value={{ storeToken, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
