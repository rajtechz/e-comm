import React, { useEffect, useState } from "react";
const selectedProduct = {
  name: "Stylish Jacket ",
  price: 120,
  originalPrice: 150,
  discription: "This is stylish jacket perfact for any occcasion",
  brand: "KD-Fashion",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=5",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=6",
      altText: "Stylish Jacket",
    },
  ],
};
function ProductDetails() {
 const [mainProduct, setMainProduct] =useState("")

 useEffect(()=>{
 if(selectedProduct?.images.length<0){
  setMainProduct(selectedProduct?.images[0]?.url)
 }

 },[selectedProduct])

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct?.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="h-20 w-20 object-cover rounded-lg cursor-pointer border"
                onClick={()=>setMainProduct(image?.url)}
              />
            ))}
          </div>
          {/* Main image */}
          <div className="md:w-1/2 ">
            <div className="mb-4">
              <img
                src={mainProduct}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct?.images.map((image, index) => (
              <img
                key={index}
                src={image?.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="h-20 w-20 object-cover rounded-lg cursor-pointer border"
                onClick={()=>setMainProduct(image?.url)}
              />
            ))}
          </div>
          {/* Right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="md:text-3xl text-2xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-red-600 mb-1 line-through ">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-black-500 mb-2">
              $ {selectedProduct.price}
            </p>
            <p className=" text-gray-600 mb-2">{selectedProduct.discription}</p>
            <div className="mb-4">
              <p className="text-gray-700">Colors:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border cursor-pointer"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
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
                  <button className="px-4 py-2 rounded border cursor-pointer">{size}</button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2 ">
                <button className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="cursor-pointer px-2 py-1 bg-gray-200 rounded text-lg ">
                  +
                </button>
              </div>
            </div>
            <div>
              <button className="bg-black text-white py-2 px-6 rounded w-full mb-4 cursor-pointer">
                ADD TO CART
              </button>
            </div>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristrics:</h3>
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
      </div>
    </div>
  );
}

export default ProductDetails;
