import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient.js";

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import LoginSignup from './pages/LoginSignup.jsx' 
import CartCheckout from './pages/CartCheckout.jsx'
import "./index.css" 


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {  path: '/loginSignup',
        element: <LoginSignup />
      }, 
      {
        path: '/cartCheckout',
        element: <CartCheckout />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
