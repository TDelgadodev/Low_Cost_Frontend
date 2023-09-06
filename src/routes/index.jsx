import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CompletedPurchase } from "../pages/CompletedPurchase";
import Search from "../pages/Search";
import { Detail } from "../pages/Detail";
import { Profile } from "../pages/Profile";
import ProtectedRoutes from "./protectedRoutes";
import useAuth from "../hooks/useAuth";
import { GetCodeResetMain } from "../pages/GetCodeReset/GetCodeReset";
import { Dashboard } from "../pages/Dashboard";


export const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/*" element={<Search />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        element={<ProtectedRoutes canActive={user} redirectPath="/login" />}
      >
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
      <Route path="/get-code" element={<GetCodeResetMain />} />
      <Route path="/finish-buying" element={<CompletedPurchase />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};