import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import Footer from './Footer'
import mycart from "../images/cart.png"
function Layout() {
    const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (<>
    {/* navbar */}
 <nav className="w-full bg-white shadow-md border-b border-gray-200 px-6 py-4 flex items-center justify-between ">

  {/* Logo */}
  <div className="text-2xl font-bold text-gray-900">
    Shop<span className="text-blue-600">Kart</span>
  </div>

  {/* Navigation Links */}
  <div className="flex items-center gap-8">
    <Link
      to="home"
      className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
    >
      Home
    </Link>

    <Link
      to="mens"
      className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
    >
      Men's
    </Link>

    <Link
      to="womens"
      className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
    >
      Women's
    </Link>

    <Link
      to="contact"
      className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
    >
      Contact
    </Link>

       <div className="relative cursor-pointer">

          <img
            src={mycart}
            alt="Shopping Cart"
            className="w-15 h-10 object-contain"
          />

          {/* Count Badge */}
          {cartCount > 0 && (
            <span className="
              absolute
              -top-2
              -right-2
              bg-red-500
              text-white
              text-xs
              font-bold
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
            ">
              {cartCount}
            </span>
          )}

        </div>
  </div>

  {/* Search */}
  <div className="flex items-center">
    <input
      type="text"
      placeholder="Search your items..."
      className="w-64 px-4 py-2 border border-gray-300 rounded-l-lg outline-none  transition"
    />

    <button
      className="px-5 py-2 bg-blue-400 text-white font-medium rounded-r-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
    >
      Search
    </button>
  </div>

</nav>
            
            {/* Header */}
     
  <Outlet/>


  <footer>
    <Footer/>
  </footer>
  </>
  )
}

export default Layout