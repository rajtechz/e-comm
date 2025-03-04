import React, { useEffect, useState } from "react";
import TopBar from "../Layout/Topbar";
import Navbar from "./Navbar";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      //  className="border-b border-gray-200"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
      ${isScrolled ? "bg-white shadow-md " : "bg-white"}`}
    >
      {/* Topbar */}
      <TopBar />
      {/* Navbar */}
      <Navbar />
      {/* Cart Drawer */}
    </header>
  );
}

export default Header;
