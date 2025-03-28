import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket ",
  price: 120,
  originalPrice: 150,
  discription: "This is stylish jacket perfect for any occasion",
  brand: "KD-Fashion",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["red", "black"],
  images: [
    {
      url: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",

      altText: "Stylish Jacket",
    },
    {
      url: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",

      altText: "Stylish Jacket",
    },
  ],
};
const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
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
        url: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
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
        url: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
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
        url: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        altText: "Stylish Jacket",
      },
    ],
  },
];
function ProductDetails() {
  const [mainImage, setMainImage] = useState(selectedProduct?.images[0]?.url);
  const [selectesSize, setSelectedSize] = useState("");
  const [selectesColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleAddToCart = () => {
    if (!selectesSize || !selectesColor) {
      toast.error("Please select size and color before add to cart", {
        duration: 1000,
        style: { backgroundColor: "#ef4444", color: "white" },
      });
      return;
    }
    setIsButtonDisable(true);
    setTimeout(() => {
      toast.success("Product is added to cart", {
        duration: 1000,
        style: {
          backgroundColor: "#22c55e",
          color: "white",
        },
      });
      setIsButtonDisable(false);
    }, 500);
  };
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Thumbnails for desktop */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct?.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`h-20 w-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-2 border-black"
                    : "border border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Thumbnails for mobile */}
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {selectedProduct?.images.map((image, index) => (
              <img
                key={index}
                src={image?.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`h-20 w-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-2 border-black"
                    : "border border-gray-300"
                }`}
                onClick={() => setMainImage(image?.url)}
              />
            ))}
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="md:text-3xl text-2xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-red-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-black-500 mb-2">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-2">{selectedProduct.discription}</p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700">Colors:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectesColor === color
                        ? "border-4 border-red-300"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border cursor-pointer ${
                      selectesSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                  onClick={() => handleQuantityChange("minus")}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="cursor-pointer px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={() => handleQuantityChange("plus")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div>
              <button
                onClick={handleAddToCart}
                disabled={isButtonDisable}
                className={`bg-black text-white py-2 px-6 rounded w-full mb-4 cursor-pointer ${
                  isButtonDisable
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-900"
                }`}
              >
                {isButtonDisable ? "Adding..." : "ADD TO CART"}
              </button>
            </div>

            {/* Product Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td>{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td>{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl m-4 text-center font-medium">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
