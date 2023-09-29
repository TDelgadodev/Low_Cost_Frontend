import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  loginAuthService,
  profileUserService,
  registerAuthService,
} from "../services/auth.service";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("LowCostToken");

    if (storedToken) {
      const decodedToken = jwtDecode(storedToken);

      if (decodedToken && decodedToken.user) {
        setUser(decodedToken.user);
      }
    }
  }, []);

  const handleAlert = (error) => {
    setAlert(error.message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const register = async (info) => {
    try {
      await registerAuthService(info);
    } catch (error) {
      handleAlert(error);
    }
  };

  const login = async (info) => {
    try {
      const { token } = await loginAuthService(info);
      localStorage.setItem("LowCostToken", token);
      const decodedToken = token ? jwtDecode(token) : null;

      if (token && decodedToken && decodedToken.user) {
        setUser(decodedToken.user);
        setAlert(null);
        toast.success("Inicio de sesión exitoso");
        navigate("/");
      } else {
        handleAlert({ message: "Error en el inicio de sesión." });
      }
    } catch (error) {
      handleAlert(error);
    }
  };

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("LowCostToken");
      if (!token) {
        return null;
      }
      const userId = user.id;
      const response = await profileUserService(userId, token);
      setUserProfile(response);
    } catch (error) {
      handleAlert(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("LowCostToken");
    setUser(null);
  };

  const contextValue = {
    user,
    userProfile,
    register,
    login,
    logout,
    alert,
    getProfile,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
