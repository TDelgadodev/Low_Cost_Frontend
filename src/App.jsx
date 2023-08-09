import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout'
import { AppRoutes } from './routes'
import { CartProvider } from './context/cartProvider'
import { ProductsProvider } from './context/productProvider'
import { ModalProvider } from './context/modalProvider'
import { ToastContainer } from 'react-toastify';
import { CategoriesProvider } from './context/CategoriesProvider'
import { BrandsProvider } from './context/BrandsProvider'
import { AuthProvider } from "./context/authProvider";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <CartProvider>
            <BrandsProvider>
              <CategoriesProvider>
                <MainLayout>
                  <ProductsProvider>
                    <AppRoutes />
                  </ProductsProvider>
                </MainLayout>
              </CategoriesProvider>
            </BrandsProvider>
          </CartProvider>
          <ToastContainer position="bottom-left" reverseOrder={false} />
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App;
