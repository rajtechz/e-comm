import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
import ShortOptions from "../Components/Products/ShortOptions";

function CollectionPage() {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggalSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProduct = [
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
      setProducts(fetchProduct);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button  */}
      <button
        onClick={toggalSidebar}
        className="lg:hidden border p-2 flex justify-center items-center cursor-pointer"
      >
        <FaFilter className="mr-2" />
        Filters
      </button>

      {/* Filter sidebar  */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All collection</h2>

        {/* Short options */}
        <ShortOptions/>
      </div>
    </div>
  );
}

export default CollectionPage;
