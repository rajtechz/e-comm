import React, { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
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
          <button className="md:hidden cursor-pointer">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    </>
  );
}

export default Navbar;
