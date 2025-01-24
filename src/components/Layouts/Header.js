import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Lexicon
            </span>
          </a>
          <div className="flex items-center ">
            <span className="cursor-pointer text-xl text-gray-700 dark:text-black mr-5 bi bi-gear-wide-connected"></span>     
            <span className="cursor-pointer text-xl text-gray-700 dark:text-black mr-5 bi bi bi-search"></span>     
            <span className="cursor-pointer text-xl text-gray-700 dark:text-black mr-5 bi bi-cart-fill relative"></span>     
            <span className="cursor-pointer text-xl text-gray-700 dark:text-black mr-5 bi bi-person-circle"></span>     
          </div>
        </div>
      </nav>
      
    </header>
    
  );
};
