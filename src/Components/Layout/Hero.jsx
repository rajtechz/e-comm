import React from "react";
import hero from "../../assets/assets/hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      <img
        src={hero}
        alt="Vacation Ready"
        className="w-full h-[100vh] object-cover object-top sm:object-center"
        style={{ maxHeight: "100vh", minHeight: "400px" }}
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-4 drop-shadow-lg">
            Vacation <br />
            Ready
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 drop-shadow-lg">
            Explore our vacation-ready outfits with worldwide shipping.
          </p>

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
