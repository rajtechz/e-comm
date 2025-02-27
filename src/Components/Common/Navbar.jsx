import React from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
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
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-1">5</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
