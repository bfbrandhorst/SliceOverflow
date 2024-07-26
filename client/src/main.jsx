import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import LoginSignup from './pages/LoginSignup.jsx' 
import CartCheckout from './pages/CartCheckout.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home/>
      }, {
        path: '/Menu',
        element: 'Menu'
      }, {
        path: '/LoginSignup',
        element: 'Login or Signup'
      }, {
        path: '/CartCheckout',
        element: 'Checkout'
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
