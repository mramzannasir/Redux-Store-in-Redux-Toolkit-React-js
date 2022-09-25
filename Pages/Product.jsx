import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import {useDispatch} from 'react-redux'


const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      
    };
    fetchProducts();
  }, []);


  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product))
  };
  
  return (
    <>
      <div className="px-8">
        <h1 className="lg:text-2xl font-medium my-4 ">Products</h1>
        <div className="wraper grid grid-cols-1 md:grid md:grid-cols-3 lg:grid-cols-4 lg:grid  gap-8 items-center">
          {products.map((products, index) => (
            <>
              <div
                className="dumy flex flex-col border-2 shadow hover:shadow-xl duration-300 rounded-md p-6 cursor-pointer justify-center "
                key={index}
              >
                <img className="h-44" src={products.image} alt="" />

                <h1 className="text-sm font-semibold my-2 ">
                  {products.title}
                </h1>
                <p className="text-base text-gray-700">${products.price}/-</p>
                <button
                  onClick={() => handleAdd(products)}
                  className="px-4 py-2 rounded-md text-white hover:bg-slate-700 duration-300 bg-slate-500 cursor-pointer my-1"
                >
                  Add to Cart
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
