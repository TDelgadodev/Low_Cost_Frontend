import { useState, createContext } from "react";
import PropTypes from "prop-types";
import { loginAuthService, profileUserService } from "../services/auth.service";
import jwtDecode from "jwt-decode";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);

  const handleAlert = (error) => {
    setAlert(error.message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const login = async (info) => {
    try {
      const { token } = await loginAuthService(info);
      sessionStorage.setItem('LowCostToken',token)
      const decodedToken = token ? jwtDecode(token) : null;
      setUser(decodedToken.user)
    } catch (error) {
      handleAlert(error);
    }
  };

  const profile = async (token) => {
    try {
      const response = await profileUserService(token);
      return response
    } catch (error) {
      handleAlert(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
    alert,
    profile,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
