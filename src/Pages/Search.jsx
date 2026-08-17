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
import { useNavigate,Link } from 'react-router-dom'
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
function Search() {
 const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";


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
  
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const dispatch=useDispatch()

  

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">

      {/* Heading */}

      <div className="max-w-7xl mx-auto mb-10">

        <p className="text-gray-500">
          Search results for
        </p>

        <h1 className="text-3xl font-bold text-gray-900">
          "{query}"
        </h1>

      </div>

      {/* Products */}

      {filteredProducts.length > 0 ? (

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden
                         shadow-sm hover:shadow-xl
                         transition duration-300"
            >

              <div className="h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">

                <h2 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-xl font-bold">
                    ₹{product.price}
                  </span>

                  <button
                  onClick={()=>{dispatch(addtoCart(product))}}
                    className="bg-blue-600 text-white
                               px-4 py-2 rounded-lg
                               hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        /* No Result */

        <div className="min-h-[50vh] flex items-center justify-center">

          <div className="text-center">

            <div className="text-6xl mb-5">
              🔍
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-3">
              We couldn't find any product matching "{query}".
            </p>

            <button
              onClick={() => window.history.back()}
              className="mt-6 bg-blue-600 text-white
                         px-6 py-3 rounded-lg
                         hover:bg-blue-700"
            >
              ← Go Back
            </button>

          </div>

        </div>

      )}

    </section>
  );
}
  

export default Search