import React from 'react'
import Profile from "@/icons/icons8-person-64.png";
import Image from "next/image";
import editRecipeForm from "@/components/Forms/editRecipeForm";

export default function RecipeCard(props) {

	function createIngredientList(ingredients) {
		if (typeof ingredients === 'object') {
			{ return(props.ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				)))
			}
		}
	}

	function createInstructionList(instructions) {
		if (typeof instructions === 'object') {
			{ return(props.instructions.map((instruction) => (
				<li key={instruction}>{instruction}</li>
			)))
			}
		}
	}

	function createRecipeForm(){
		let recipeCard = document.getElementById('recipe-card')

		if (recipeCard.classList.contains('visible')){

		}
	}

	return(
		<div className="card bg-base-100 shadow-xl p-8 m-8 visible" id='recipe-card'>
			<div className="avatar">
				<div className='w-64 md:w-128 lg:rounded-xl lg:content-center'>
					<figure>
						<Image
							src={`${props.overview.imageUrl}`}
							width={128}
							height={128}
							layout='responsive'
							alt="Recipe Icon"
						/>
					</figure>
				</div>
			</div>
			<div className="card-body p-4 m-4">
				<h2 className="card-title">{props.title}</h2>
				<h3>Overview</h3>
				<div className='flex flex-row'>
					<ul className='flex flex-row'>
						<li className='flex'>Prep Time: {props.overview.prepTime}</li>
						<li className='flex'>Cook Time: {props.overview.cookTime}</li>
						<li className='flex'>Total Time: {props.overview.totalTime}</li>
						<li className='flex'>Serving Size: {props.overview.servingSize}</li>
					</ul>
				</div>

				<br/>

				<p>Ingredients:</p>
				<ul className='list-disc'>
					{createIngredientList(props.ingredients)}
				</ul>

				<br/>

				<p>Instructions:</p>
				<ul className='list-decimal'>
					{createInstructionList(props.instructions)}
				</ul>

				<p>Notes:</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Edit</button>
				</div>
			</div>
		</div>
	)
}