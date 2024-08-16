/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct

const MensCategories = ({ selectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetchCategory("https://dummyjson.com/products/categories")
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const shirtsCategory = fetchedCategories.find(
          (category) => category.slug === "mens-shirts"
        );
        if (shirtsCategory) return fetch(shirtsCategory.url);
        else return Promise.resolve(new Response(JSON.stringify([])));
      })
      .then((response) => response.json())
      .then((data) => setShirts(data.products || []))
      .catch((error) => console.error(error));
  }, [selectCategory]);

  useEffect(() => {
    fetchCategory()
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const shoesCategory = fetchedCategories.find(
          (category) => category.slug === "mens-shoes"
        );
        if (shoesCategory) return fetch(shoesCategory.url);
        else return Promise.resolve(new Response(JSON.stringify([])));
      })
      .then((response) => response.json())
      .then((data) => setShoes(data.products || []))
      .catch((error) => console.error(error));
  }, [selectCategory]);

  return (
    <div className="p-4 bg-white text-red-600">
      {/* Header */}
      <div className="text-2xl font-semibold mb-8 border-b-2 border-red-600 pb-2">
        Men's Categories
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Shirts Section */}
        <div>
          <div className="text-xl font-semibold mb-4">Shirts</div>
          {shirts.map((shirt, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg p-2 bg-white shadow-lg mb-4"
            >
              <img
                src={shirt.thumbnail}
                alt={shirt.name || 'Shirt'}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <div className="text-red-600 font-semibold">{shirt.name || 'Shirt'}</div>
            </div>
          ))}
        </div>

        {/* Shoes Section */}
        <div>
          <div className="text-xl font-semibold mb-4">Shoes</div>
          {shoes.map((shoe, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg p-2 bg-white shadow-lg mb-4"
            >
              <img
                src={shoe.thumbnail}
                alt={shoe.name || 'Shoe'}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <div className="text-red-600 font-semibold">{shoe.name || 'Shoe'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensCategories;
