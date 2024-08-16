/** @format */

export const baseURL = "https://dummyjson.com/products/categories";

export function fetchCategory(url = baseURL, method = "GET", data = null) {
	const options = {
		method,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: data ? JSON.stringify(data) : null,
	};

	return fetch(url, options)
		.then((res) => {
			return res.json();
		})
		.catch((error) => {
			console.log("Fetch error: ", error);
		});
}
