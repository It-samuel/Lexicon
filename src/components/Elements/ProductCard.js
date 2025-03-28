import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Ratings } from "./Ratings";
import { useCart } from "../../Context";

 
export const ProductCard = ({products}) => {
  const { cartList, addToCart, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false);
  const {id, name, overview, poster, price, rating, best_seller} = products

 

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === products.id);

    if(productInCart){
        setInCart(true);
    } else {
        setInCart(false);
    }

}, [cartList, products.id]);

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
          Best Seller
        </span>}
        <img className="rounded-t-lg w-full h-64" src={poster} alt="poster" />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
          <div className="flex items-center my-2">
              <Ratings rating={rating}/>
                
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
                { !inCart && <button onClick={() => addToCart(products)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${products.in_stock ? "" : "cursor-not-allowed"}`} disabled={ products.in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> }  
                { inCart && <button onClick={() => removeFromCart(products)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${products.in_stock ? "" : "cursor-not-allowed"}`} disabled={ products.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> } 
            </p>
        </Link>
      </div>
    </div>
  );
};
