import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App';
import Error from './Pages/ErrorPage/Error';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Sign_Up from './Pages/Sign_Up/Sign_Up';
import AddToCart from './Pages/AddToCart/AddToCart';
import WishList from './Pages/Wishlist/WishList';
import Billing_Details from './Pages/Billing_Details/Billing_Details';
import Product_Details from './Pages/Product_Details_Page/Product_Details';
import Log_In from './Pages/Log_In/Log_In';
import My_Accout from "./Pages/My_Account/My_Accout"


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/sign-up',
        element: <Sign_Up />
      }
      ,
      {
        path: '/add-to-cart',
        element: <AddToCart />
      },
      {
        path: '/wishlist',
        element: <WishList />
      },
      {
        path: '/billing-details',
        element: <Billing_Details />
      },
      {
        path: '/my-account',
        element: <My_Accout />
      }
      ,
      {
        path: '/Products/:details',
        element: <Product_Details />
      },{
        path: "/log-in",
        element: <Log_In />

      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
