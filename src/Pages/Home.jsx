import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best seller section  */}
      <h4 className="text-3xl text-center mb-4 font-bold">Best Seller</h4>
      <ProductDetails/>
    </div>
  );
}

export default Home;
