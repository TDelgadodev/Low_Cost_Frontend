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
  console.log("usuario:", user)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/*" element={<Search />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/get-code" element={<GetCodeResetMain />} />
      <Route path="/purchase-accepted" element={<PurchaseAccepted />} />
      <Route path="/purchase-denied" element={<PurchaseDenied />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/search/*" element={<SearchDash />} />
      <Route path="/dashboard/users" element={<TableUserDash />} />
      <Route path="/dashboard/products" element={<TableProductsDash />} />
      <Route path="/dashboard/filterProducts" element={<ShowProductsListByCategory />} />
      <Route path="/dashboard/edit-price" element={<EditPriceDash />} />
      <Route path="/dashboard/products/create" element={<AddProductDash />} />
      <Route path="/dashboard/products/edit/:id" element={<EditProductDash />} />
      <Route path="/dashboard/delete-product/:id" element={<DeleteProduct />} />

      {/* Rutas protegidas */}
      <Route path="/login" element={user ? (<Navigate to="/" />) : (<Login />)} />
      <Route path="/profile/*" element={user ? (<Profile />) : (<Navigate to="/login" />)} />
      <Route path="/finish-buying" element={user ? (<CompletedPurchase />) : (<Navigate to="/login" />)} />
    </Routes>
  );
};