import React from 'react'
import myimg from "../optimized-images/myimg.webp"
import flat from "../optimized-images/flat.webp"
import mensneakers from "../optimized-images/mens-sneakers.webp"
import womensjuti from "../optimized-images/womens-juti.webp"
import menredshoes from "../optimized-images/men-red-shoes.webp"
import mensshoes from "../optimized-images/Mens-shoes.webp"
import mensstylish from "../optimized-images/mens-stylish.webp"
import moccasin from "../optimized-images/Moccasin.webp"
import stylesshoes from "../optimized-images/styles-shoes.webp"
import westernwomens from "../optimized-images/western-womens.webp"
import whitemens from "../optimized-images/white-mens.webp"
import whiteshoes from "../optimized-images/white-shoes-mens.webp"
import womensstlyes from "../optimized-images/black-womens-juti.webp"
import { useDispatch } from 'react-redux'
import { addtoCart } from './cartSlice'
function Home() {
const products = [
    { id:1,
      name: "Premium Denim Flat",
      description:
        "A stylish and comfortable denim flat designed for a modern womens wear everyday look.",
      price: 1499,
      image: flat,
      qnty:1
    },
    { id:2,
      name: "Classic White Sneakers",
      description:
        "Clean and versatile sneakers for men that perfectly match your casual outfits.",
      price: 1999,
      image: mensneakers,
      qnty:1

    },
    {  id:3,
      name: "Premium Black Womens juti",
      description:
        "Soft, comfortable and stylish juti perfect for casual and streetwear looks.",
      price: 1299,
      image: womensjuti,
      qnty:1

    },
    { id:4,
      name: "Classic Men red shoes",
      description:
        "Trendy shoes with a premium design to complete your everyday style.",
      price: 899,
      image: menredshoes,
      qnty:1

    },
     { id:5,
      name: "Classic Men shoes",
      description:
        "Trendy shoes with a premium design to complete your everyday style.",
      price: 999,
      image: mensshoes,
      qnty:1

    },
     {id:6,
      name: "Classic Men's stylish shoes",
      description:
        "Trendy styles shoes with a premium design to complete your everyday style.",
      price: 1299,
      image: mensstylish,
      qnty:1

    },
     {id:7,
      name: "Premium Black Womens moccasin",
      description:
        "Soft, comfortable and stylish moccasin perfect for casual and streetwear looks.",
      price: 1199,
      image: moccasin,
      qnty:1
    },
    {id:8,
      name:"Styles shoes for men's and womens",
      description:
        "Soft, comfortable and stylish shoes perfect for casual and streetwear looks ",
      price:799,
      image:stylesshoes,
      qnty:1

    },
    {id:9,
      name:"Western shoes for womens",
      description:
        "Soft, comfortable and stylish moccasin perfect for casual and streetwear looks.",
      price:799,
      image:westernwomens,
      qnty:1

    },
    {id:10,
      name:"Modern trending white mens shoes",
      description:
        "Soft, comfortable and stylish moccasin perfect for casual and streetwear looks.",
            price:899,
            image:whitemens,
      qnty:1

    },
    {id:11,
      name:"White styles shoes for mens",
      description:
      "New modeling shoes for mens wear wear your outfit with your choice ",
            price:499,
      image:whiteshoes,
      qnty:1

    },
    {id:12,
      name:"Luxury western juti for womens",
      description:
      'Western best moduling juti for womens wear fit with common and casual dress',
            price:699,
      image:womensstlyes,
      qnty:1

    }
  ];

const dispatch=useDispatch()
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
         <h2 className="text-xl font-bold text-gray-800 text-center m-10">Popular categories</h2>
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
                 ₹{product.price}
                </span>

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg
                             font-medium hover:bg-blue-700
                             transition duration-300 mt-3 cursor-pointer"
                onClick={()=>{dispatch(addtoCart(product))}}>
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