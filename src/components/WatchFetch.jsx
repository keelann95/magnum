/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct

const WatchFetch = ({ selectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [menwatches, setMen] = useState([]);
  const [wmenwatches, setwmen] = useState([]);

  useEffect(() => {
    fetchCategory("https://dummyjson.com/products/categories")
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const menwatchesCategory = fetchedCategories.find(
          (category) => category.slug === "mens-watches"
        );
        if (menwatchesCategory) return fetch(menwatchesCategory.url);
        else return Promise.resolve(new Response(JSON.stringify([])));
      })
      .then((response) => response.json())
      .then((data) => setMen(data.products || []))
      .catch((error) => console.error(error));
  }, [selectCategory]);

  useEffect(() => {
    fetchCategory()
      .then((fetchedCategories) => {
        setCategories(fetchedCategories);
        const wmenwatchesCategory = fetchedCategories.find(
          (category) => category.slug === "womens-watches"
        );
        if (wmenwatchesCategory) return fetch(wmenwatchesCategory.url);
        else return Promise.resolve(new Response(JSON.stringify([])));
      })
      .then((response) => response.json())
      .then((data) => setwmen(data.products || []))
      .catch((error) => console.error(error));
  }, [selectCategory]);

  return (
    <div className="p-4 bg-white text-red-600">
      {/* Header */}
      <div className="text-2xl font-semibold mb-8 border-b-2 border-red-600 pb-2">
        Watches Collection
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Men's Watches Section */}
        <div>
          <div className="text-xl font-semibold mb-4">Men's Watches</div>
          {menwatches.map((menwatch, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg p-2 bg-white shadow-lg mb-4"
            >
              <img
                src={menwatch.thumbnail}
                alt={menwatch.name || 'Men\'s Watch'}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <div className="text-red-600 font-semibold">{menwatch.name || 'Men\'s Watch'}</div>
            </div>
          ))}
        </div>

        {/* Women's Watches Section */}
        <div>
          <div className="text-xl font-semibold mb-4">Women's Watches</div>
          {wmenwatches.map((wmenwatch, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-lg p-2 bg-white shadow-lg mb-4"
            >
              <img
                src={wmenwatch.thumbnail}
                alt={wmenwatch.name || 'Women\'s Watch'}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <div className="text-red-600 font-semibold">{wmenwatch.name || 'Women\'s Watch'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchFetch;
