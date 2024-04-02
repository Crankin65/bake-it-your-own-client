import React, {useState} from 'react';
import Profile from '../icons/icons8-person-64.png'
import recipeIcon from "@/icons/icons8-recipe-64.png";
import whiteRecipeIcon from '../icons/icons8-recipe-64 (white).png'
import hamburgerIcon from '../icons/icons8-menu-50.png'
import whiteHamburgerIcon from '../icons/icons8-menu-50 (white).png'

import Image from "next/image";
import Link from 'next/link'

export default function Navbar2(props) {
	const [searchInput, setSearchInput] = useState('')


	const handleChange = (value) => {
		setSearchInput(value)
	}

	const eraseSearchBar = () => {
		handleChange('')
	}

	function onSubmit(e){
		console.log('onsubmit ran')
		e.preventDefault();

		let url = e.target.url.value

		if (url.includes('cookieandkate') || url.includes('cupcakesandkalechips') ) {
			// alert('thats a valid url')
			props.updateRefLoad()
			props.updateSearchUrl(url)
		} else {
			alert('thats not a valid url')
		}
	}

	function openMenu(){
		let menuItems = document.getElementById('vertical-menu')

		if(menuItems.classList.contains('hidden')){
			menuItems.classList.remove('hidden')
			menuItems.classList.add('flex')
		} else if(menuItems.classList.contains('flex')){
			menuItems.classList.remove('flex')
			menuItems.classList.add('hidden')
		}
	}

	return(
		<div className="navbar bg-base-100 justify-between p-4 border-b-2 border-gray">

				<div className='flex'>
					{/*Black Recipe*/}
					<div className='px-0 dark:hidden'>
						<Link href='/'>
							<Image
								src={recipeIcon}
								width={36}
								height={36}
								alt="Recipe Icon"
							/>
						</Link>
					</div>

					{/*White Recipe*/}
					<div className='px-0 dark:visible hidden dark:flex'>
						<Link href='/'>
							<Image
								src={whiteRecipeIcon}
								width={36}
								height={36}
								alt="Recipe Icon"
							/>
						</Link>
					</div>

					{/*Bake It Your Own*/}
					<div className='btn btn-ghost normal-case md:text-xl hover:font-bold sm:flex px-2' onClick={eraseSearchBar}>
						<Link href='/'>
							Bake It Your Own
						</Link>
					</div>
				</div>

				{/*Mid Icon Bar*/}


				<div className='flex'>
					{/*Search Bar*/}
					<div className="flex">
						<div className="form-control md:flex-row flex-col">
							<form onSubmit={(event) => onSubmit(event)} >
								<div className='flex'>
									<input
										type="text"
										placeholder="Recipe URL"
										className="input input-bordered w-32 md:w-auto h-8"
										value={searchInput}
										name='url'
										onChange={(e) => handleChange(e.target.value)}
									/>
								</div>

								<div className='flex'>
									<button type='submit' className="input input-bordered w-32 md:w-auto h-8"> Submit </button>
								</div>
							</form>
						</div>

						{/*Sign-in/ sign-out*/}
						<div className="dropdown hidden dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<Image
										src={Profile}
										width={64}
										height={64}
										alt="Recipe Icon"
									/>
								</div>
							</label>
							<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

								<li key='profile'>
									<a className="justify-between">
										Profile <span className="badge">New</span>
									</a>
								</li>

								<li key='settings'>
									<a>Settings</a>
								</li>

								<li key='logout'>
									<a>Logout</a>
								</li>
							</ul>
						</div>


						{/*/!*Icon List Bar*!/*/}
						{/*<div className='p-2 m-2 hidden md:visible' id='vertical-menu'>*/}

						{/*	<ul className='flex flex-col md:flex-row md:content-center'>*/}

						{/*		<li className='flex md:p-2 md:m-2'>*/}
						{/*			<div className='p-4 visible md:hidden dark:hidden flex' id='menu'>*/}
						{/*				<a onClick={openMenu}>*/}
						{/*					<Image*/}
						{/*						src={hamburgerIcon}*/}
						{/*						width={24}*/}
						{/*						height={24}*/}
						{/*						alt='menu icon'*/}
						{/*					/>*/}
						{/*				</a>*/}
						{/*			</div>*/}
						{/*		</li>*/}

						{/*		<li className='flex md:p-2 md:m-2'>*/}
						{/*			<div className='p-4 md:hidden dark:visible hidden dark:flex' id='menu'>*/}
						{/*				<a onClick={openMenu}>*/}
						{/*					<Image*/}
						{/*						src={whiteHamburgerIcon}*/}
						{/*						width={24}*/}
						{/*						height={24}*/}
						{/*						alt='menu icon'*/}
						{/*					/>*/}
						{/*				</a>*/}
						{/*			</div>*/}
						{/*		</li>*/}


						{/*		<li className='flex md:p-2 md:m-2'>*/}
						{/*			<div>*/}
						{/*				<Link className='hover:font-bold' href='/'>*/}
						{/*					About*/}
						{/*				</Link>*/}
						{/*			</div>*/}
						{/*		</li>*/}
						{/*		<li className='flex md:p-2 md:m-2'>*/}
						{/*			<div>*/}
						{/*				<Link className='hover:font-bold' href='/'>*/}
						{/*					Guide*/}
						{/*				</Link>*/}
						{/*			</div>*/}
						{/*		</li>*/}
						{/*		<li className='flex md:p-2 md:m-2'>*/}
						{/*			<div>*/}
						{/*				<Link className='hover:font-bold' href='/displayRecipePage'>*/}
						{/*					Example Page*/}
						{/*				</Link>*/}
						{/*			</div>*/}
						{/*		</li>*/}
						{/*		<li className='flex md:p-2 md:m-2'>*/}
						{/*			<div>*/}
						{/*				<Link className='hover:font-bold' href='/'>*/}
						{/*					Other*/}
						{/*				</Link>*/}
						{/*			</div>*/}
						{/*		</li>*/}
						{/*	</ul>*/}

						{/*</div>*/}


						{/*/!*Hamburger Menu Black*!/*/}
						{/*<div className='p-4 visible md:hidden dark:hidden flex' id='menu'>*/}
						{/*	<a onClick={openMenu}>*/}
						{/*		<Image*/}
						{/*			src={hamburgerIcon}*/}
						{/*			width={24}*/}
						{/*			height={24}*/}
						{/*			alt='menu icon'*/}
						{/*		/>*/}
						{/*	</a>*/}
						{/*</div>*/}

						{/*/!*Hamburger Menu White*!/*/}
						{/*<div className='p-4 md:hidden dark:visible hidden dark:flex' id='menu'>*/}
						{/*	<a onClick={openMenu}>*/}
						{/*		<Image*/}
						{/*			src={whiteHamburgerIcon}*/}
						{/*			width={24}*/}
						{/*			height={24}*/}
						{/*			alt='menu icon'*/}
						{/*		/>*/}
						{/*	</a>*/}
						{/*</div>*/}

					</div>

				</div>

		</div>
	)
}
