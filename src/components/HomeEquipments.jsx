/** @format */

import { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty";

const HomeEquipments = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [furnitures, setFurniture] = useState([]);
	const [decorations, setDecoration] = useState([]);

	useEffect(() => {
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				const furnituresCategory = fetchedCategories.find(
					(category) => category.slug === "furniture"
				);
				if (furnituresCategory) {
					console.log("Furnitures Category URL:", furnituresCategory.url);
					return fetch(furnituresCategory.url);
				} else {
					console.warn("Furnitures category not found.");
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
				setFurniture(data.products || []);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	useEffect(() => {
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				const decorationCategory = fetchedCategories.find(
					(category) => category.slug === "home-decoration"
				);
				if (decorationCategory) {
					console.log("Decoration Category URL:", decorationCategory.url);
					return fetch(decorationCategory.url);
				} else {
					console.warn("Decoration category not found.");
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
				setDecoration(data.products || []);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	return (
		<div className="p-4 bg-white text-red-600">
			{/* Header */}
			<div className="text-2xl font-semibold mb-8 border-b-2 border-red-600 pb-2">
				Home Equipments
			</div>

			{/* Furnitures Section */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold text-red-600 mb-4">Furnitures</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{furnitures.map((furniture, index) => (
						<div key={index} className="border border-red-600 rounded-lg p-4 bg-white shadow-lg">
							<img src={furniture.thumbnail} alt="" className="w-full h-40 object-cover mb-2 rounded"/>
							<div className="text-red-600 font-semibold">{furniture.name}</div>
							<p className="text-gray-700">{furniture.price}</p>
						</div>
					))}
				</div>
			</div>

			{/* Decorations Section */}
			<div>
				<h2 className="text-xl font-semibold text-red-600 mb-4">Decorations</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{decorations.map((decoration, index) => (
						<div key={index} className="border border-red-600 rounded-lg p-4 bg-white shadow-lg">
							<img src={decoration.thumbnail} alt="" className="w-full h-40 object-cover mb-2 rounded"/>
							<div className="text-red-600 font-semibold">{decoration.name}</div>
							<p className="text-gray-700">{decoration.price}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeEquipments;
