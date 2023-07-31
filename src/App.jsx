import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout'
import { AppRoutes } from './routes'
import { CartProvider } from './context/cartProvider'
import { ProductsProvider } from './context/productProvider'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <MainLayout>
          <ProductsProvider>
            <AppRoutes />
          </ProductsProvider>
        </MainLayout>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
