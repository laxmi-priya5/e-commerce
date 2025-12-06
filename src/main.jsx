import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Components/Cart.jsx'
import { CartProvider } from './Context/cartContext.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Productpage from './Components/Productpage.jsx'
import Wish from './Components/Wish'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
   
  },
  {
      path:'/cart',
      element:<Cart/>
  },
  {
      path:'/wish',
      element:<Wish/>
  },
  {
    path:'/product/:id',
    element:<Productpage/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={appRouter}/>
   </CartProvider> 
  </StrictMode>
)
