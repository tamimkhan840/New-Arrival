import { Outlet } from "react-router-dom"
import Header from "../Pages/Header/Header"
import Footer from "../Pages/Footer/Footer"

function Layout() {
  return (
    <div>

      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout