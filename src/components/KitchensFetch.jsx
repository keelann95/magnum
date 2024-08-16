/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct

const KitchensFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [kitchens, setKitchens] = useState([]);

	useEffect(() => {
		// Fetch categories
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				const kitchenCategory = fetchedCategories.find(
					(category) => category.slug === "kitchen-accessories"
				);
				if (kitchenCategory) {
					console.log("Kitchens Category URL:", kitchenCategory.url);
					return fetch(kitchenCategory.url);
				} else {
					console.warn("Kitchens category not found.");
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
				console.log(data);
				setKitchens(data.products || []);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	return (
		<div className="p-4 bg-white text-red-600">
			{/* Header */}
			<div className="text-2xl font-semibold mb-8 border-b-2 border-red-600 pb-2">
				Kitchen Accessories
			</div>

			{/* Kitchens Section */}
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
				{kitchens.map((kitchen, index) => (
					<div
						key={index}
						className="border border-red-600 rounded-lg p-4 bg-white shadow-lg"
					>
						<img
							src={kitchen.thumbnail}
							alt={kitchen.name || 'Kitchen Accessory'}
							className="w-full h-40 object-cover mb-2 rounded"
						/>
						<div className="text-red-600 font-semibold">
							{kitchen.name || 'Kitchen Accessory'}
						</div>
						<p className="text-gray-700">{kitchen.price || 'Price not available'}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default KitchensFetch;
