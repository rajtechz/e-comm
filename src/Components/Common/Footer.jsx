import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiMetalBar } from "react-icons/gi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-sm mt-2">
            Be the first to hear about new products, exclusive events, and
            online offers.
          </p>
          <p className="text-sm font-semibold mt-2">
            Sign up and get 10% off your first order.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <form action="" className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all shadow-sm bg-gray-50 hover:bg-white focus:bg-white"
              />
              <button className="px-5 py-3 bg-gray-600 text-white font-medium rounded-r-md hover:bg-gray-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold">Shop</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/mens-top-wear" className="hover:underline">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="/womens-top-wear" className="hover:underline">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="/mens-bottom-wear" className="hover:underline">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="/womens-bottom-wear" className="hover:underline">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:underline">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-3 flex gap-4">
            <a href="#" className="text-xl hover:text-gray-500">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-xl hover:text-gray-500">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-xl hover:text-gray-500">
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm mt-4 font-semibold">Call Us</p>
          <p className="text-lg font-bold flex items-center gap-2">
            <FiPhoneCall /> 0123-456-789
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        © 2025, Your Company. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
