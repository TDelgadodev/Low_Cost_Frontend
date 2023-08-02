import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout'
import { AppRoutes } from './routes'
import { CartProvider } from './context/cartProvider'
import { ProductsProvider } from './context/productProvider'
import { ModalProvider } from './context/modalProvider'

function App() {

  return (
    <BrowserRouter>
      <ModalProvider>
        <CartProvider>
          <MainLayout>
            <ProductsProvider>
              <AppRoutes />
            </ProductsProvider>
          </MainLayout>
        </CartProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App
