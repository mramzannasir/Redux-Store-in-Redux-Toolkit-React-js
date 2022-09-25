import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {

const items = useSelector((state)=> state.cart);


  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto md:mx-0 flex flex-wrap md:px-8 pt-5 flex-col md:flex-row items-center justify-between">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            Logo
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900 ">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="mr-5 hover:text-gray-900 ">
              <Link to={"/Product"}>Product</Link>
            </div>
            <div className="mr-5 hover:text-gray-900 ">
              {" "}
              <Link to={"/Cart"}>Cart</Link>
            </div>
          </nav>
          <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <p className="text-sm font-semibold cursor-pointediv">
              Cart-item: {items.length}
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
