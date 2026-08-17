import React from 'react'
import { Link } from 'react-router-dom'
function Gobackhome() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="text-center max-w-lg">

        {/* Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-100 
                        flex items-center justify-center">
          <span className="text-5xl">🛍️</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Nothing Here Yet
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Sorry, there is currently nothing available on this page.
          Please go back to the home page and explore our latest collection.
        </p>

        {/* Button */}
        <Link
          to="/home"
          className="inline-flex items-center gap-2 bg-gray-400 
                     text-black px-7 py-3 rounded-lg font-semibold
                     hover:bg-white transition duration-300
                     shadow-md hover:shadow-lg"
        >
          ← Go Back Home
        </Link>

      </div>

    </div>
  )
}

export default Gobackhome