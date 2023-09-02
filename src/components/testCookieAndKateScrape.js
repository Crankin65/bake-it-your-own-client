export default async function parseCookieAndKate(url) {
	let urlArray = url.split('/')
	let recipe = urlArray[3]
	let section = urlArray[4]

	const response = await fetch(`http://localhost:3010/recipe/parse/${url}/${recipe}/${section}`, {
		method: 'GET'
	});

	const formattedData = await response.json();
	return formattedData
}

