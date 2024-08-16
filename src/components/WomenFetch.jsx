/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct

const WomenFetch = ({ selectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [bags, setBags] = useState([]);
  const [dresses, setDresses] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [jewellery, setJewellery] = useState([]);
  const [tops, setTops] = useState([]);

  useEffect(() => {
    // Fetch categories
    fetchCategory()
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);

        // Helper function to fetch category data
        const fetchCategoryData = (slug, setter) => {
          const category = fetchedCategories.find((cat) => cat.slug === slug);
          if (category) {
            return fetch(category.url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
              .then((data) => setter(data.products || []))
              .catch((error) => console.error(`Error fetching ${slug}:`, error));
          } else {
            console.warn(`${slug} category not found.`);
            setter([]);
          }
        };

        // Fetch data for each category
        fetchCategoryData("womens-bags", setBags);
        fetchCategoryData("womens-dresses", setDresses);
        fetchCategoryData("womens-shoes", setShoes);
        fetchCategoryData("womens-jewellery", setJewellery);
        fetchCategoryData("tops", setTops);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, [selectCategory]);

  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <div className="text-2xl font-bold text-red-600 mb-8">
        Women's Collection
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Bags */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Bags</h3>
          {bags.map((bag, index) => (
            <div key={index} className="border border-red-500 rounded-lg p-2 bg-white shadow-md mb-4">
              <img src={bag.thumbnail} alt={`Bag ${index}`} className="w-full h-40 object-cover rounded" />
            </div>
          ))}
        </div>

        {/* Dresses */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Dresses</h3>
          {dresses.map((dress, index) => (
            <div key={index} className="border border-red-500 rounded-lg p-2 bg-white shadow-md mb-4">
              <img src={dress.thumbnail} alt={`Dress ${index}`} className="w-full h-40 object-cover rounded" />
            </div>
          ))}
        </div>

        {/* Shoes */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Shoes</h3>
          {shoes.map((shoe, index) => (
            <div key={index} className="border border-red-500 rounded-lg p-2 bg-white shadow-md mb-4">
              <img src={shoe.thumbnail} alt={`Shoe ${index}`} className="w-full h-40 object-cover rounded" />
            </div>
          ))}
        </div>

        {/* Jewellery */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Jewellery</h3>
          {jewellery.map((jewel, index) => (
            <div key={index} className="border border-red-500 rounded-lg p-2 bg-white shadow-md mb-4">
              <img src={jewel.thumbnail} alt={`Jewellery ${index}`} className="w-full h-40 object-cover rounded" />
            </div>
          ))}
        </div>

        {/* Tops */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Tops</h3>
          {tops.map((top, index) => (
            <div key={index} className="border border-red-500 rounded-lg p-2 bg-white shadow-md mb-4">
              <img src={top.thumbnail} alt={`Top ${index}`} className="w-full h-40 object-cover rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenFetch;
