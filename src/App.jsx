import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout'
import { AppRoutes } from './routes'

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes/>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
