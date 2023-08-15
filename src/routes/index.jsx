import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";
import { CompletedPurchase } from "../pages/CompletedPurchase";
import Search from "../pages/Search";
import { Detail } from "../pages/Detail";
import { Profile } from "../pages/Profile";
/* import ProtectedRoutes from "./protectedRoutes";
 */
export const AppRoutes = () => {
/*   const user = sessionStorage.getItem('LowCostToken')
 */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/*" element={<Search />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile />} />
    {/*   <Route element={<ProtectedRoutes canActivate={user} redirectPath="login" />}>
        <Route path="/profile" element={<Profile />} />
      </Route> */}
      <Route path="/finish-buying" element={<CompletedPurchase />} />
    </Routes>
  );
};
