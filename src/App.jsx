import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout";
import { AppRoutes } from "./routes";
import { CartProvider } from "./context/cartProvider";
import { ProductsProvider } from "./context/productProvider";
import { ModalProvider } from "./context/modalProvider";
import { ToastContainer } from "react-toastify";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { BrandsProvider } from "./context/BrandsProvider";
import { AuthProvider } from "./context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { RecoveryProvider } from "./context/recoveryProvider";
import { AdminProvider } from "./context/AdminProvider";

function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <AuthProvider>
          <ModalProvider>
            <CartProvider>
              <BrandsProvider>
                <RecoveryProvider>
                  <CategoriesProvider>
                    <ProductsProvider>
                      <MainLayout>
                        <AppRoutes />
                      </MainLayout>
                    </ProductsProvider>
                  </CategoriesProvider>
                </RecoveryProvider>
              </BrandsProvider>
            </CartProvider>
            <ToastContainer position="bottom-left" reverseOrder={false} />
          </ModalProvider>
        </AuthProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
