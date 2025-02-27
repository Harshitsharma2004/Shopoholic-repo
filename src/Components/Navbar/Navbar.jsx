import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
const menuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
const dropdownLinks=[
    {
        id:1,
        name:"Trending Products",
        link:"/#"
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#"
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#"
    },
]
const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and links section */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl text-primary font-semibold tracking-widest uppercase sm:text-3xl"
            >
              ShopHolic
            </a>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* dropdown links  */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                        {
                          dropdownLinks.map((data,index)=>(
                            <li key={data.id}>
                                <a
                                className="text-gray-500  dark:hover:text-white duration-200 inline-block p-2 w-full hover:bg-primary/20 rounded-md font-semibold"
                                href={data.link}>{data.name}</a>
                            </li>
                          ))  
                        }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar section */}
            <div className="relative group hidden sm:block border-none">
              <input
                type="text"
                placeholder="Search"
                className="search-bar rounded-full dark:border-gray-600 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-primary focus:border-primary duration-200 text-white"
              />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200" />
            </div>
            {/* order-button section  */}
            <button className="relative p-3 ">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
