import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function CartDrawer({ drawerOpen, toggleCartDrawer }) {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer} className="cursor-pointer">
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      {/* Card content with scrollable area  */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl mb-4 font-semibold">Your Cart </h2>
        {/* Component for Cart Content */}
      </div>
      <div className="p-4 bg-white sticky bottom-0">
        <button className=" w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-center tracking-tighter text-sm text-gray-500 mt-2">Shipping, taxes,and discount codes calculated at checkout </p>
      </div>
    </div>
  );
}

export default CartDrawer;
