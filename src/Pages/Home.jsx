import React from 'react'
import myimg from "../images/myimg.png"
function Home() {
const products = [
    {
      id: 1,
      name: "Premium Denim Jacket",
      description:
        "A stylish and comfortable denim jacket designed for a modern everyday look.",
      price: "₹1,499",
      image: "/products/jacket.jpg",
    },
    {
      id: 2,
      name: "Classic White Sneakers",
      description:
        "Clean and versatile sneakers that perfectly match your casual outfits.",
      price: "₹1,999",
      image: "/products/shoes.jpg",
    },
    {
      id: 3,
      name: "Premium Black Hoodie",
      description:
        "Soft, comfortable and stylish hoodie perfect for casual and streetwear looks.",
      price: "₹1,299",
      image: "/products/hoodie.jpg",
    },
    {
      id: 4,
      name: "Classic Sunglasses",
      description:
        "Trendy sunglasses with a premium design to complete your everyday style.",
      price: "₹899",
      image: "/products/sunglasses.jpg",
    },
  ];

  return (<>  <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-6 py-20 flex items-center justify-between">

    {/* Left Content */}
    <div className="max-w-2xl">

      <p className="text-blue-400 font-semibold uppercase tracking-widest mb-4">
        New Collection 2026
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Upgrade Your Style.
        <span className="text-blue-500"> Define Yourself.</span>
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
        Discover premium fashion, modern styles, and everyday essentials
        carefully selected to make you look confident and feel comfortable.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer px-7 py-3 rounded-lg font-semibold transition duration-300 shadow-lg">
          Shop Now
        </button>

        <button className="border border-gray-500 hover:border-white cursor-pointer hover:bg-white hover:text-gray-900 px-7 py-3 rounded-lg font-semibold transition duration-300">
          Explore Collection
        </button>
      </div>

    </div>

    {/* Right Side */}
    <div className="hidden md:flex w-100 h-96 items-center justify-center">

      <div className="text-center">
        <div className="text-8xl mb-4 ">

          <img src={myimg} alt="img "  />
        </div>

        <p className="text-gray-400 text-lg">
          Premium Fashion
        </p>

        <p className="text-blue-400 font-semibold">
          Simple. Modern. Stylish.
        </p>
      </div>

    </div>

  </div>
</header>

                        {/* // cards */}
         <h2 className="text-xl font-bold text-gray-800">Popular Dishes</h2>
                         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm
                       hover:shadow-xl transition duration-300
                       border border-gray-100 group"
          >

            {/* Product Image */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition duration-500"
              />

              {/* Sale Badge */}
              <span className="absolute top-4 left-4 bg-red-500 text-white
                               text-xs font-semibold px-3 py-1 rounded-full">
                SALE
              </span>

            </div>

            {/* Product Details */}
            <div className="p-5">

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-400 text-sm">(4.8)</span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-900">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mt-2">
                {product.description}
              </p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-5">

                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg
                             font-medium hover:bg-blue-700
                             transition duration-300"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

                        
  </>
  )
}

export default Home