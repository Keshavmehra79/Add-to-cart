import React, { useEffect, useState } from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'
import mycart from "../optimized-images/cart.webp"
import { useSelector } from 'react-redux'

function Navbar() {
  let cart=useSelector((state)=>state.myreducer.cart)
   let length=cart.length;

   const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() === "") return;

    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

      return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-200 px-6 py-4 flex items-center justify-between  ">

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
      to="goback"
      className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
    >
      Contact
    </Link>

       <div className="relative cursor-pointer">

          <img
            src={mycart}
            alt="Shopping Cart"
            className="w-15 h-10 object-contain"
          onClick={()=>{navigate("/mycart")}}/>

          {/* Count Badge */}
          {length > 0 && (
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
              {length}
            </span>
          )}

        </div>
  </div>

  {/* Search */}
  <div className="flex items-center">
    {/* Search */}
        <div className="flex">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search products..."
            className="w-64 px-4 py-2 border border-gray-300
                       rounded-l-lg outline-none
                       focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-5 py-2
                       rounded-r-lg hover:bg-blue-700
                       transition"
          >
            Search
          </button>

        </div>
  </div>

</nav>
  )
}

export default Navbar