import React from 'react'
import Profile from "@/icons/icons8-person-64.png";
import Image from "next/image";

export default function RecipeCard() {
	return(
		<div className="card lg:card-side bg-base-100 shadow-xl">
			<figure>
				<Image
					src="https://cookieandkate.com/images/2020/09/pasta-alla-norma-recipe-3.jpg"
					width={128}
					height={128}
					alt="Recipe Icon"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Pasta alla Norma</h2>
				<ul>
					<li>Ingredients:</li>
					<li>Instructions:</li>
				</ul>
				<p>Notes:</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Edit</button>
				</div>
			</div>
		</div>
	)
}