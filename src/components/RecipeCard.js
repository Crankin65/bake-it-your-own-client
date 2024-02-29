import React from 'react'
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

				<div className='font-bold'>
					<p>Overview</p>
				</div>

				<div className=''>
					<ul className='flex-row'>
						<li className='flex flex-col py-2'>
							<div className='font-medium flex'>
								Prep Time:
							</div>

							<div className='flex'>
								{props.overview.prepTime}
							</div>
						</li>

						<li className='flex flex-col py-2'>
							<div className='font-medium flex'>
								Cook Time:
							</div>

							<div className='flex'>
								{props.overview.cookTime}
							</div>
						</li>

						<li className='flex flex-col py-2'>
							<div className='font-medium flex'>
								Total Time:
							</div>

							<div className='flex'>
								{props.overview.totalTime}
							</div>
						</li>

						<li className='flex flex-col py-2'>
							<div className='font-medium flex'>
								Serving Size:
							</div>

							<div className='flex'>
								{props.overview.servingSize}
							</div>
						</li>

					</ul>
				</div>

				<br/>

				<div className='font-bold'>
					<p>Ingredients:</p>
				</div>
				<ul className='list-disc'>
					{createIngredientList(props.ingredients)}
				</ul>

				<br/>

				<div className='font-bold'>
					<p>Instructions:</p>
				</div>
				<ul className='list-decimal'>
					{createInstructionList(props.instructions)}
				</ul>

				<div className='font-bold'>
					<p>Notes:</p>
				</div>
				{/*<div className="card-actions justify-end">*/}
				{/*	<button className="btn btn-primary">Edit</button>*/}
				{/*</div>*/}
			</div>
		</div>
	)
}