'use client'
import '../app/globals.css'
import React, {useState, useEffect } from 'react';

export default function Form(){

	function submitRecipe(e){
		e.preventDefault()
		let author = e.target.author.value
		let prepTime = e.target.prepTime.value
		let cookTime = e.target.prepTime.value
		let totalTime = e.target.totalTime.value
		let servingNumber = e.target.servingNumber.value
		let cuisine = e.target.cuisine.value
		let diet = e.target.diet.value
		let instructions = e.target.instructions.value
		let ingredients = e.target.ingredients.value

	}

	return(
		<>
			<h1> Form </h1>
			<div className='mx-6 px-6'>

				<form>

					<label>Author:
						<input type="text" id="fname" name="fname" className='border' />
					</label>

					<br/><br/>

					<label >Prep Time:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					<label >Cook Time:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					<label >Total Time:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					<label >Serving Number:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					<label >Cuisine:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					<label >Diet:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					<label >Instructions:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					<label >Ingredients:
						<input type="text" id="lname" name="lname" className='border'/>
					</label>

					<br/><br/>

					{/*<button> Submit </button>*/}
					<input type='submit' className='bg-gray-400 px-2 rounded' onClick={submitRecipe} />

				</form>
			</div>
		</>
	)
}