import React, {useState, useEffect } from 'react';
import '../app/globals.css'
import Navbar from "@/components/navbar";
import Navbar2 from "@/components/navbar2";
import RecipeCard from "@/components/RecipeCard";


export default function displayRecipePage() {
	return(
		<>
			<Navbar2 />

			<div className='py-2'>
				<RecipeCard />
			</div>
		</>
	)
}

