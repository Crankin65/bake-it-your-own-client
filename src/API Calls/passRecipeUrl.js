// export default async function passRecipeUrl(url) {
// 	if (url) {
// 		if (url.toLowerCase().includes('cookieandkate')) {
// 			let urlArray = url.split('/')
// 			let cookieAndKateUrl = urlArray.findIndex((mainUrl)=> mainUrl === 'cookieandkate')
// 			let recipe = urlArray[cookieAndKateUrl]
//
// 			const response = await fetch (`http://localhost3010/recipe/cookieandkate/${recipe}`, {
// 				method: 'GET'
// 			});
//
// 			return response
// 		} else if(url.toLowerCase().includes('cupcakesandkalechips')) {
// 			let urlArray = url.split('/')
// 			let cookieAndKateUrl = urlArray.findIndex((mainUrl)=> mainUrl === 'cupcakesandkalechips')
// 			let recipe = urlArray[cookieAndKateUrl]
//
// 			const response = await fetch (`http://localhost3010/recipe/cookieandkate/${recipe}`, {
// 				method: 'GET'
// 			});
//
// 			return response
// 		} else {
// 			alert('invalid url')
// 		}
// 	}
//
// 	const recipeJson = await response.json();
// 	const recipeObject = {
// 		overview: recipeJson.recipeObject.overview,
// 		ingredients: recipeJson.recipeObject.ingredients,
// 		instructions: recipeJson.recipeObject.instructions,
// 		notes: recipeJson.recipeObject.notes,
// 	}
// }

 function parseRecipe(url){
	if (url) {
		if (url.toLowerCase().includes('cookieandkate')) {
			let urlArray = url.split('/')
			let cookieAndKateUrl = urlArray.findIndex((mainUrl)=> mainUrl === 'cookieandkate.com')
			let recipe = urlArray[cookieAndKateUrl + 1]

			let recipeArray = []
			recipeArray[0] = 'cookieandkate'
			recipeArray[1] = recipe

			console.log('cookieandkate')
			console.log(`${recipeArray[1]}`)
			return recipeArray

		} else if(url.toLowerCase().includes('cupcakesandkalechips')) {
			let urlArray = url.split('/')
			let cupcakesAndKaleChipsUrl = urlArray.findIndex((mainUrl)=> mainUrl === 'cupcakesandkalechips.com')
			let recipe = urlArray[cupcakesAndKaleChipsUrl +1]

			let recipeArray = []
			recipeArray[0] = 'cupcakesandkalechips'
			recipeArray[1] = recipe


			console.log('cupcakesandkalechips')
			console.log(`${recipeArray[1]}`)
			return recipeArray

		} else {
			console.log('incorrect url')
		}
	}
}

async function passRecipeUrl(recipe) {

	const response = await fetch (`http://localhost3010/recipe/${recipe[0]}/${recipe[1]}`, {
		method: 'GET'
	});

	const recipeJson = await response.json();
	const recipeObject = {
		overview: recipeJson.recipeObject.overview,
		ingredients: recipeJson.recipeObject.ingredients,
		instructions: recipeJson.recipeObject.instructions,
		notes: recipeJson.recipeObject.notes,
	}

	console.log('recipe object')
	console.log(recipeObject)
	return recipeObject
}

module.exports = {
	passRecipeUrl: passRecipeUrl,
	parseRecipe: parseRecipe
}
