import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { CompletedPurchase } from "../pages/CompletedPurchase";
import Search from "../pages/Search";
import { Detail } from "../pages/Detail";
import { Profile } from "../pages/Profile";
import useAuth from "../hooks/useAuth";
import { GetCodeResetMain } from "../pages/GetCodeReset/GetCodeReset";
import { Dashboard } from "../pages/Dashboard";
import { TableUserDash } from "../components/TableUsersDash";
import { TableProductsDash } from "../components/TableProductsDash";
import { AddProductDash } from "../components/AddProductDash";
import PurchaseAccepted from "../components/PurchaseAccepted";
import PurchaseDenied from "../components/PurchaseDenied";
import { EditProductDash } from "../components/EditProductDash";
import DeleteProduct from "../components/DeleteProduct";
import SearchDash from "../components/SearchDash";
import { ShowProductsListByCategory } from "../components/FilteredProductsCategory";
import EditPriceDash from "../components/EditPriceDash";

export const AppRoutes = () => {
  const { user } = useAuth();
  const isAdmin = user && user.rolId === 1;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/*" element={<Search />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/get-code" element={<GetCodeResetMain />} />
      <Route path="/purchase-accepted" element={<PurchaseAccepted />} />
      <Route path="/purchase-denied" element={<PurchaseDenied />} />

      {/* Rutas protegidas */}
      <Route path="/login" element={user ? (<Navigate to="/" />) : (<Login />)} />
      <Route path="/profile/*" element={user ? (<Profile />) : (<Navigate to="/login" />)} />
      <Route path="/finish-buying" element={user ? (<CompletedPurchase />) : (<Navigate to="/login" />)} />

      {/* Rutas de admin protegidas */}
      <Route path="/dashboard/*" element={isAdmin ? (<Dashboard />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/search/*" element={isAdmin ? (<SearchDash />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/users" element={isAdmin ? (<TableUserDash />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/products" element={isAdmin ? (<TableProductsDash />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/filterProducts/:category" element={isAdmin ? (<ShowProductsListByCategory />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/edit-price" element={isAdmin ? (<EditPriceDash />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/products/create" element={isAdmin ? (<AddProductDash />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/products/edit/:id" element={isAdmin ? (<EditProductDash />) : (<Navigate to="/" />)} />
      <Route path="/dashboard/delete-product/:id" element={isAdmin ? (<DeleteProduct />) : (<Navigate to="/" />)} />
    </Routes>
  );
};