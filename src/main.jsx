import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Sign_Up from './Pages/Sign_Up/Sign_Up.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Error from './Pages/ErrorPage/Error.jsx'
import AddToCart from './Pages/AddToCart/AddToCart.jsx'
import Log_In from './Pages/Log_In/Log_In.jsx'
import WishList from './Pages/Wishlist/WishList.jsx'
import Billing_Details from './Pages/Billing_Details/Billing_Details.jsx'
import Product_Details from './Pages/Product_Details_Page/Product_Details.jsx'
import My_Accout from './Pages/My_Account/My_Accout.jsx'


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
        path: '/log-in',
        element: <Log_In />
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
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
