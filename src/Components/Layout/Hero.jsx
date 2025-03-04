import React from "react";
import hero from "../../assets/assets/hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <img
        src={hero}
        alt="Vacation Ready"
        className="w-full h-[600px] md:h-[650px] lg:h-[750px] object-cover"
      />
      
      {/* Custom transparent black background using bg-[rgba()] */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center">
        <div className="text-center text-white p-6">
          {/* Bright and visible text */}
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-4 drop-shadow-lg">
            Vacation <br />
            Ready
          </h1>
          <p className="text-sm tracking-tight md:text-lg mb-6 drop-shadow-lg">
            Explore our vacation-ready outfits with worldwide shipping.
          </p>

          {/* Improved button styling */}
          <Link
            to="/shop"
            className="text-black bg-white px-6 py-2 rounded-sm text-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
