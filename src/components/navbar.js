import React from 'react';
import Image from "next/image";
import recipeIcon from '../icons/icons8-recipe-64.png'
import profileIcon from '../icons/icons8-person-64.png'

export default function Navbar() {
	return(
		<div className='flex flex-row font-serif'>
			<div className='basis-1/4 items-start justify-start p-2'>
				<Image
					src={recipeIcon}
					width={64}
					height={64}
					alt="Recipe Icon"
				/>
			</div>

			<div className='basis-1/2 flex-col  '>

				<div className='flex py-2 items-center'>
					<ul className='flex flex-row font-serif hover:font-sans'>
						<li className='px-2'>About</li>
						<li className='px-2'>Home</li>
						<li className='px-2'>Something</li>
					</ul>
				</div>

				<div className='flex items-center'>
					<form>
						<div className='flex border-slate-500'>
							<input className='' type='text' placeholder='url' name='url'></input>
						</div>

						<div className='flex'>
							<input className='' type='submit' value='Submit'/>
						</div>

					</form>
				</div>

			</div>


			<div className='flex basis-1/4 items-end p-2'>
				<ul className='px-2'>
					<Image
						src={profileIcon}
						width={64}
						height={64}
						alt="Profile Icon"
					/>
				</ul>
			</div>
		</div>
	)
}