import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
function TopBar() {
  return (
    <>
      {/* Topbar */}
      <div className="bg-[#fb7185] text-white ">
        <div className="container mx-auto flex justify-between  items-center py-3">
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm text-center flex-grow">
            <span> We ship wordwide - Fast and reliable shipping!</span>
          </div>
          <div className="text-sm hidden  md:block ">
            <a href="tel:+1234567890" className="hover:text-gray-300">
              +1 (1234) 567890
            </a>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default TopBar;
