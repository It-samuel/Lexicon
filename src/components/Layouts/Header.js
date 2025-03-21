import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";
import { useCart } from "../../Context";


export const Header = () => {
  const {cartList} = useCart();
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if (darkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])

  return (
    <header className="border-b-2">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex "
            href="https://flowbite.com"
            clLinkssName="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ml-3 dark:text-white ">
              Lexicon
            </span>
          </Link>
          <div className="flex items-center ">
            <span  onClick={() => {
    setDarkMode(!darkMode);
    console.log("Dark Mode:", !darkMode);
  }} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>     
            <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi bi-search"></span>     
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
            </Link>
            {dropdown && (token ?  <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}             
            <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span> 
               
          </div>
        </div>
      </nav>

      {searchSection && <Search />}
      
    </header>
    
  );
};
