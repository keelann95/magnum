import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import mainimage from '../assets/main.jpeg';
import side1 from '../assets/side1.jpeg';
import side2 from '../assets/side2.jpeg';
import side3 from '../assets/side3.jpeg';
import side from  '../assets/side.jpeg';
import { FiShoppingCart } from "react-icons/fi";

const ProductDetails = () => {
  const [categories, setCategories] = useState([])
  const [mainImage, setMainImage] = useState('mainimage');

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const sideImages = [side1, side2, side3, side];

  return (
    <>
    <div className="container mx-auto px-4 py-8 mt-9">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* First container */}
        <div className="w-full md:w-1/5">
          <div className="flex flex-row md:flex-col gap-4">
            {sideImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product view ${index + 1}`}
                className="w-[170px] h-[138px] object-cover cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Second container */}
        <div className="w-full md:w-2/5">
          <img src={mainimage} alt="Main product view" className="w-[500px] h-[600px] object-cover" />
        </div>

        {/* Third container */}
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl font-bold mb-2">Havic HV G-92 Gamepad</h2>
          <p className="text-sm text-gray-600 mb-2">
            Rating (150 reviews) | In stock
          </p>
          <h5 className="text-xl font-semibold mb-2">$ 192.00</h5>
          <p className="text-sm mb-4">
            PlayStation 5 Controller cool and pleasant you will enjoy it buy it and try
            am sure you will feel it and like it.</p>
          <hr className="mb-4" />

          <p className="mb-2">Colors:</p>
          <div className="flex gap-2 mb-4">
            <input type="radio" name="color" value="red" className="w-6 h-6 bg-red-500 rounded-full appearance-none checked:ring-2 checked:ring-red-500 checked:ring-offset-2" />
            <input type="radio" name="color" value="blue" className="w-6 h-6 bg-blue-500 rounded-full appearance-none checked:ring-2 checked:ring-blue-500 checked:ring-offset-2" />
          </div>

          <p className="mb-2">Size:</p>
          <div className="flex gap-2 mb-4">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <input
                key={size}
                type="radio"
                name="size"
                value={size}
                className="w-8 h-8 border border-gray-300 rounded-md appearance-none checked:bg-blue-500 checked:text-white flex items-center justify-center after:content-[attr(value)] after:text-xs"
              />
            ))}
          </div>

          <div className="flex items-center gap-4 mb-4">
            <button className="w-8 h-8 bg-gray-200 rounded-full">-</button>
            <input type="number" value="2" className="w-12 text-center" />
            <button className="w-8 h-8 bg-gray-200 rounded-full">+</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Buy now</button>
            <button className="w-8 h-8 bg-gray-200 rounded-full">❤️</button>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span><FiShoppingCart className='text-red-500' /></span>
                <p className="font-semibold">Free Delivery</p>
              </div>
              <a href="#" className="text-sm text-blue-500">Enter your postal code for delivery availability</a>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span>♻️</span>
                <p className="font-semibold">Return Delivery</p>
              </div>
              <p className="text-sm mb-1">Free 30 days return</p>
              <a href="#" className="text-sm text-blue-500">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;