import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct

const BeautyFetch = ({ selectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [beauties, setBeauties] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  const [skincare, setSkincare] = useState([]);

  useEffect(() => {
    fetchCategory()
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const beautyCategory = fetchedCategories.find(
          (category) => category.slug === "beauty"
        );
        if (beautyCategory) {
          return fetch(beautyCategory.url);
        } else {
          return Promise.resolve(new Response(JSON.stringify([])));
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBeauties(data.products || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectCategory]);

  useEffect(() => {
    fetchCategory()
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const fragranceCategory = fetchedCategories.find(
          (category) => category.slug === "fragrances"
        );
        if (fragranceCategory) {
          return fetch(fragranceCategory.url);
        } else {
          return Promise.resolve(new Response(JSON.stringify([])));
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFragrances(data.products || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectCategory]);

  useEffect(() => {
    fetchCategory()
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const skincareCategory = fetchedCategories.find(
          (category) => category.slug === "skin-care"
        );
        if (skincareCategory) {
          return fetch(skincareCategory.url);
        } else {
          return Promise.resolve(new Response(JSON.stringify([])));
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSkincare(data.products || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectCategory]);

  return (
    <div className="p-4 bg-white">
      <div className="text-2xl font-bold text-red-600 mb-6">Beauty Products</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {beauties.map((beauty, index) => (
          <div key={index} className="border border-red-500 rounded-lg p-4 bg-white shadow-md">
            <img src={beauty.thumbnail} alt="Beauty Product" className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="text-center">
              <p className="text-lg font-semibold text-red-600">Value: ${beauty.price}</p>
              <div className="flex justify-center mt-2">
                <span className="text-yellow-500">★★★★☆</span>
              </div>
            </div>
          </div>
        ))}
        {fragrances.map((fragrance, index) => (
          <div key={index} className="border border-red-500 rounded-lg p-4 bg-white shadow-md">
            <img src={fragrance.thumbnail} alt="Fragrance Product" className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="text-center">
              <p className="text-lg font-semibold text-red-600">Value: ${fragrance.price}</p>
              <div className="flex justify-center mt-2">
                <span className="text-yellow-500">★★★★☆</span>
              </div>
            </div>
          </div>
        ))}
        {skincare.map((skincareItem, index) => (
          <div key={index} className="border border-red-500 rounded-lg p-4 bg-white shadow-md">
            <img src={skincareItem.thumbnail} alt="Skincare Product" className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="text-center">
              <p className="text-lg font-semibold text-red-600">Value: ${skincareItem.price}</p>
              <div className="flex justify-center mt-2">
                <span className="text-yellow-500">★★★★☆</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyFetch;
