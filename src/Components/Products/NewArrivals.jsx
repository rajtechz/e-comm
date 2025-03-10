import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewArrivals() {
  const scrollRef = useRef(null);
  const [isDragging, setisdragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=1",
        altTex: "Stylish Jacket",
      },
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=2",
        altTex: "Stylish Jacket",
      },
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=3",
        altTex: "Stylish Jacket",
      },
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=4",
        altTex: "Stylish Jacket",
      },
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=5",
        altTex: "Stylish Jacket",
      },
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=6",
        altTex: "Stylish Jacket",
      },
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=7",
        altTex: "Stylish Jacket",
      },
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: {
        url: "https://picsum.photos/500/500?random=8",
        altTex: "Stylish Jacket",
      },
    },
  ];
  const handleMouseDown = (e) => {
    setisdragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUpOrLeave = () => {
    setisdragging(false);
  };

  const scroll = (direction) => {
    const scrollAmmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmmount, behavior : "smooth" });
  };

  //   updateScrollButton
  const updateScrollButton = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offset: scrollRef.current.offsetLeft,
    });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
    }
  });
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto mb-10 relative text-center">
        <h2 className="text-3xl mb-4 font-bold">Explore New Arrivals</h2>
        <p className="text-lg mb-10 text-gray-600">
          Discover the latest styles straight off the runway freshly added to
          keep your wardrobe on the cutting edge of fashion
        </p>
        {/* scroll button  */}

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border cursor-pointer ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border cursor-pointer ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* scrollable content */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images?.url}
              alt={product.images?.altTex || product?.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="to-black">
                <h4 className="font-medium"> {product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
