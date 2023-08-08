import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";
import { Profile } from "../pages/Profile";
import { Detail } from "../pages/Detail";
import { CompletedPurchase } from "../pages/CompletedPurchase";
import Search from "../pages/Search";
/* import { ProtectedRoutes } from "./protectedRoutes"; */

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/finish-buying" element={<CompletedPurchase />} />
    </Routes>
  );
};
