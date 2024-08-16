

export const baseURL = "https://dummyjson.com/products?limit=30&skip=30";

export function fetchData(url =baseURL, method = "GET", data = null) {
	const options = {
		method,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: data ? JSON.stringify(data) : null,
	};

	return fetch(url , options)
		.then((res) => {
			return res.json();
		})
		.catch((error) => {
			console.log("Fetch error: ", error);
		});
}
