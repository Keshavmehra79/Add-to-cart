import React from 'react'
import mensneakers from "../optimized-images/mens-sneakers.webp"
import menredshoes from "../optimized-images/men-red-shoes.webp"
import mensshoes from "../optimized-images/Mens-shoes.webp"
import mensstylish from "../optimized-images/mens-stylish.webp"
import stylesshoes from "../optimized-images/styles-shoes.webp"
import whitemens from "../optimized-images/white-mens.webp"
import whiteshoes from "../optimized-images/white-shoes-mens.webp"
import { useDispatch } from 'react-redux'
import { addtoCart } from './cartSlice'
import { useNavigate } from 'react-router-dom'
function Mens() {
   const navigate=useNavigate()
  const dispatch=useDispatch()
  const products=[
    { id:2,
          name: "Classic White Sneakers",
          description:
            "Clean and versatile sneakers for men that perfectly match your casual outfits.",
          price: 1999,
          image: mensneakers,
          qnty:1
    
        },
        { id:4,
              name: "Classic Men red shoes",
              description:
                "Trendy shoes with a premium design to complete your everyday style.",
              price: 899,
              image: menredshoes,
              qnty:1
        
            }, { id:5,
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
            
                }, {id:8,
                      name:"Styles shoes for men's and womens",
                      description:
                        "Soft, comfortable and stylish shoes perfect for casual and streetwear looks ",
                      price:799,
                      image:stylesshoes,
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
  ]
  return (
    <>
     <h2 className="text-xl font-bold text-gray-800 text-center m-10">Popular categories</h2>
                             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gap-8">
    
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

export default Mens