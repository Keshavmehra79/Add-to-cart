import React from 'react'
import flat from "../optimized-images/flat.webp"
import womensjuti from "../optimized-images/womens-juti.webp"
import moccasin from "../optimized-images/Moccasin.webp"
import westernwomens from "../optimized-images/western-womens.webp"
import womensstlyes from "../optimized-images/black-womens-juti.webp"
import { useDispatch } from 'react-redux'
import { addtoCart } from './cartSlice'

function Womens() {
  const dispatch=useDispatch()
  
  const products=[
     { id:1,
          name: "Premium Denim Flat",
          description:
            "A stylish and comfortable denim flat designed for a modern womens wear everyday look.",
          price: 1499,
          image: flat,
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
             {id:7,
                  name: "Premium Black Womens moccasin",
                  description:
                    "Soft, comfortable and stylish moccasin perfect for casual and streetwear looks.",
                  price: 1199,
                  image: moccasin,
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
                    {id:12,
                          name:"Luxury western juti for womens",
                          description:
                          'Western best moduling juti for womens wear fit with common and casual dress',
                                price:699,
                          image:womensstlyes,
                          qnty:1
                    
                        }
  ]
  return (<>
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

export default Womens