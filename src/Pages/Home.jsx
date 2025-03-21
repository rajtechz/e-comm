import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";
import ProductGrid from "../Components/Products/ProductGrid";
import FeaturedCullections from "../Components/Products/FeaturedCullections";
import FeatureSection from "../Components/Products/FeatureSection";
const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 200,
    images: [
      {
        url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 300,
    images: [
      {
        url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    images: [
      {
        url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: 5,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 2",
    price: 200,
    images: [
      {
        url: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: 7,
    name: "Product 3",
    price: 300,
    images: [
      {
        url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: 8,
    name: "Product 4",
    price: 400,
    images: [
      {
        url: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
];
function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best seller section  */}
      <h4 className="text-3xl text-center mb-4 font-bold">Best Seller</h4>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Top Wear for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCullections />
      <FeatureSection />
    </div>
  );
}

export default Home;
