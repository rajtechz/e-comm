import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function FilterSidebar() {
  const [searchParems, setSearchParams] = useSearchParams();
  const [filter, setFilter] = React.useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: "",
    brand: [],
    minPrice: 0,
    maxPrice: 100,

  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Tops Wear", "Bottm Wear"];
  const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Pink", , "Orange"];
  const materials = ["Cotton", "Polyester", "Wool", "Silk", "Denim", "Leather", "Linen", "Rayon", "Nylon"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour", "New Balance", "Asics", "Skechers", "Fila"];
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL", "Free Size",];
  const genders = ["Men", "Women"]
  useEffect(() => {
    const params = Object.fromEntries([...searchParems]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material || "",
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? parseInt(params.minPrice) : 0,
      maxPrice: params.maxPrice ? parseInt(params.maxPrice) : 100,

    });
    setPriceRange([params.minPrice ? parseInt(params.minPrice) : 0, params.maxPrice ? parseInt(params.maxPrice) : 100]);

  }, [searchParems]);
  return (
    <div className='p-4 '>
      {/* categories filter */}
      <div className="mb-6">
        <label className='black text-gray-600 font-medium mb-4'>Category</label>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              name="category"
              value={category}
              checked={filter.category === category}
              onChange={(e) => {
                setFilter({ ...filter, category: e.target.value });
                setSearchParams({ ...filter, category: e.target.value });
              }}
            />
            <label htmlFor={category} className="ml-2 text-gray-700">{category}</label>
          </div>
        ))}
      </div>
      {/* gender filter */}
      <div className="mb-6">
        <label className='black text-gray-600 font-medium mb-4'>Category</label>
        {genders.map((gender, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={gender}
              name="gender"
              value={gender}
              checked={filter.gender === gender}
              onChange={(e) => {
                setFilter({ ...filter, gender: e.target.value });
                setSearchParams({ ...filter, gender: e.target.value });
              }}
            />
            <label htmlFor={gender} className="ml-2 text-gray-700">{gender}</label>
          </div>
        ))}
      </div>

      {/* color filter */}
      {/* color filter */}
      <div className="mb-6">
        <label className="black text-gray-600 font-medium mb-4">Color</label>
        <div className="grid grid-cols-2 gap-5">
          {colors.map((color, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition duration-300 ease-in-out hover:scale-105"
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* size filter */}
      <div className="mb-6">
        <label className='black text-gray-600 font-medium mb-4'>Size</label>
        {sizes.map((size, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={size}
              name="size"
              value={size}
              checked={filter.size.includes(size)}
              onChange={(e) => {
                const newSize = e.target.checked ? [...filter.size, e.target.value] : filter.size.filter(s => s !== e.target.value);
                setFilter({ ...filter, size: newSize });
                setSearchParams({ ...filter, size: newSize });
              }}
            />
            <label htmlFor={size} className="ml-2 text-gray-700">{size}</label>
          </div>
        ))}
      </div>
      {/* material filter */}
      <div className="mb-6">
        <label className='black text-gray-600 font-medium mb-4'>Material</label>
        {materials.map((material, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={material}
              name="material"
              value={material}
              checked={filter.material === material}
              onChange={(e) => {
                setFilter({ ...filter, material: e.target.value });
                setSearchParams({ ...filter, material: e.target.value });
              }}
            />
            <label htmlFor={material} className="ml-2 text-gray-700">{material}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterSidebar
