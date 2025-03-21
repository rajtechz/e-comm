import React, { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-[#fb7185]">
            KD-Styles
          </Link>
        </div>
        {/* Center Navigation Links  */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/men"
            className="text-gray-700 text-sm hover:text-black font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/men"
            className="text-gray-700 text-sm hover:text-black font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/men"
            className="text-gray-700 text-sm hover:text-black font-medium uppercase"
          >
            Top wear
          </Link>
          <Link
            to="/men"
            className="text-gray-700 text-sm hover:text-black font-medium uppercase"
          >
            Bottom wear
          </Link>
        </div>
        {/* Right icons  */}

        <div className="flex item-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            className="relative hover:text-black cursor-pointer"
            onClick={toggleCartDrawer}
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-1">
              5
            </span>
          </button>
          {/* Search Icon */}
          <div className="overflow-hidden ">
            <Searchbar />
          </div>
          <button
            onClick={toggleNavDrawer}
            className="md:hidden cursor-pointer"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div
        className={`fixed left-0 top-0 w-3/4 sm:w-3/4 h-screen bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <button
              onClick={toggleNavDrawer}
              className="cursor-pointer absolute right-4 bg-gray-200 p-1 rounded-full"
            >
              <IoMdClose className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <nav className="space-y-4">
              <Link
                to="#"
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-black"
              >
                Men
              </Link>
              <Link
                to="#"
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-black"
              >
                Women
              </Link>
              <Link
                to="#"
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-black"
              >
                Top Wear
              </Link>
              <Link
                to="#"
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-black"
              >
                Bottom Wear
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
