import React from 'react';

export default function Navbar() {
	return(
		<div className='flex flex-row font-serif'>
			<div className='flex items-start'>
				Logo
			</div>

			<div className='flex '>
				<ul className='flex flex-row items-center'>
					<li className='px-2'>About</li>
					<li className='px-2'>Home</li>
					<li className='px-2'>Something</li>
				</ul>
			</div>

			<div>
				<ul className='flex items-end'>
					<li>Search Bar</li>
					<li>Person</li>
				</ul>
			</div>
		</div>
	)
}