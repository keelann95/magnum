/** @format */

import React, { useEffect, useState } from "react";
import { fetchCategory } from "../FetchCategoty"; // Ensure this path is correct

const DeviceFetch = ({ selectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [laptops, setLaptop] = useState([]);
	const [tabs, setTab] = useState([]);
	const [smartphones, setSmart] = useState([]);
	const [mobiles, setMobile] = useState([]);

	useEffect(() => {
		fetchCategory()
			.then((fetchedCategories) => {
				console.log("Fetched Categories:", fetchedCategories);
				setCategories(fetchedCategories);

				const laptopsCategory = fetchedCategories.find(
					(category) => category.slug === "laptops"
				);
				if (laptopsCategory) {
					console.log("Laptops Category URL:", laptopsCategory.url);
					return fetch(laptopsCategory.url);
				} else {
					console.warn("Laptops category not found.");
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
				setLaptop(data.products || []);
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

				const tabscategory = fetchedCategories.find(
					(category) => category.slug === "tablets"
				);
				if (tabscategory) {
					console.log("Tablets Category URL:", tabscategory.url);
					return fetch(tabscategory.url);
				} else {
					console.warn("Tablets category not found.");
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
				setTab(data.products || []);
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

				const smartphonesCategory = fetchedCategories.find(
					(category) => category.slug === "womens-smartphones"
				);
				if (smartphonesCategory) {
					console.log("Smartphones Category URL:", smartphonesCategory.url);
					return fetch(smartphonesCategory.url);
				} else {
					console.warn("Smartphones category not found.");
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
				setSmart(data.products || []);
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

				const mobilesCategory = fetchedCategories.find(
					(category) => category.slug === "mobile-accessories"
				);
				if (mobilesCategory) {
					console.log("Mobiles Category URL:", mobilesCategory.url);
					return fetch(mobilesCategory.url);
				} else {
					console.warn("Mobiles category not found.");
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
				setMobile(data.products || []);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [selectCategory]);

	return (
		<div className="p-4 bg-white text-red-600">
			<div className="text-2xl font-semibold mb-8 border-b-2 border-red-600 pb-2">
				Devices
			</div>

			{/* Laptops Section */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold text-red-600 mb-4">Laptops</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{laptops.map((laptop, index) => (
						<div key={index} className="border border-red-600 rounded-lg p-4 bg-white shadow-lg">
							<img src={laptop.thumbnail} alt="" className="w-full h-40 object-cover mb-2 rounded"/>
							<div className="text-red-600 font-semibold">{laptop.name}</div>
							<p className="text-gray-700">{laptop.price}</p>
						</div>
					))}
				</div>
			</div>

			{/* Tablets Section */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold text-red-600 mb-4">Tablets</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{tabs.map((tab, index) => (
						<div key={index} className="border border-red-600 rounded-lg p-4 bg-white shadow-lg">
							<img src={tab.thumbnail} alt="" className="w-full h-40 object-cover mb-2 rounded"/>
							<div className="text-red-600 font-semibold">{tab.name}</div>
							<p className="text-gray-700">{tab.price}</p>
						</div>
					))}
				</div>
			</div>

			{/* Smartphones Section */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold text-red-600 mb-4">Smartphones</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{smartphones.map((smartphone, index) => (
						<div key={index} className="border border-red-600 rounded-lg p-4 bg-white shadow-lg">
							<img src={smartphone.thumbnail} alt="" className="w-full h-40 object-cover mb-2 rounded"/>
							<div className="text-red-600 font-semibold">{smartphone.name}</div>
							<p className="text-gray-700">{smartphone.price}</p>
						</div>
					))}
				</div>
			</div>

			{/* Mobile Accessories Section */}
			<div className="mb-8">
				<h2 className="text-xl font-semibold text-red-600 mb-4">Mobile Accessories</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
					{mobiles.map((mobile, index) => (
						<div key={index} className="border border-red-600 rounded-lg p-4 bg-white shadow-lg">
							<img src={mobile.thumbnail} alt="" className="w-full h-40 object-cover mb-2 rounded"/>
							<div className="text-red-600 font-semibold">{mobile.name}</div>
							<p className="text-gray-700">{mobile.price}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DeviceFetch;
