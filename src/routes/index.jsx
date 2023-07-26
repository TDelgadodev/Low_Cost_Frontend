import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
