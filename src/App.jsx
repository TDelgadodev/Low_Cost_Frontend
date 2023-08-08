import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout'
import { AppRoutes } from './routes'
import { CartProvider } from './context/cartProvider'
import { ProductsProvider } from './context/productProvider'
import { ModalProvider } from './context/modalProvider'
import { ToastContainer } from 'react-toastify';
import { CategoriesProvider } from './context/CategoriesProvider'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <ModalProvider>
        <CartProvider>
          <CategoriesProvider>
            <MainLayout>
              <ProductsProvider>
                <AppRoutes />
              </ProductsProvider>
            </MainLayout>
          </CategoriesProvider>
        </CartProvider>
      </ModalProvider>
      <ToastContainer position="bottom-left" reverseOrder={false} />
    </BrowserRouter>
  )
}

export default App
