import React from 'react';

export default function editRecipeForm(props){
	return(
	<>
		<h1> Edit Recipe </h1>
		<div className='mx-6 px-6'>

			<form>

				<label>Author:
					<input type="text" id="author" name="author" className='border' value={props.overview.author} />
				</label>

				<br/><br/>

				<label >Prep Time:
					<input type="text" id="prep-time" name="prep-time" className='border' value={props.prepTime}/>
				</label>

				<br/><br/>

				<label >Cook Time:
					<input type="text" id="cook-time" name="cook-time" className='border' value={props.cookTime}/>
				</label>

				<br/><br/>

				<label >Total Time:
					<input type="text" id="total-time" name="total-time" className='border' value={props.totalTime}/>
				</label>

				<br/><br/>



				<label >Instructions:
					<input type="text" id="instructions" name="instructions" className='border' value={props.instructions}/>
				</label>

				<br/><br/>

				<label >Ingredients:
					<input type="text" id="ingredients" name="ingredients" className='border' value={props.ingredients}/>
				</label>

				<br/><br/>

				{/*<button> Submit </button>*/}
				{/*<input type='submit' className='bg-gray-400 px-2 rounded' onClick={submitRecipe} />*/}

			</form>
		</div>
	</>
	)
}