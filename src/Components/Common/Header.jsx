import React from "react";
import TopBar from "../Layout/Topbar";
import Navbar from "./Navbar";
function Header() {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <TopBar />
      {/* Navbar */}
      <Navbar />
      {/* Cart Drawer */}
    </header>
  );
}

export default Header;
