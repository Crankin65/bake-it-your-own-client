import React, {useState} from 'react';
import Profile from '../icons/icons8-person-64.png'
import recipeIcon from "@/icons/icons8-recipe-64.png";

import Image from "next/image";
import Link from 'next/link'

export default function Navbar2(props) {
	const [searchInput, setSearchInput] = useState('')


	const handleChange = (value) => {
		setSearchInput(value)
	}

	function onSubmit(e){
		console.log('onsubmit ran')
		e.preventDefault();
		props.updateRefLoad()
		let url = e.target.url.value

		if (url.includes('cookieandkate') || url.includes('cupcakesandkalechips') ) {
			// alert('thats a valid url')
			props.updateSearchUrl(url)
		} else {
			alert('thats not a valid url')
		}
	}


	return(
		<div className="navbar bg-base-100">
			<div className="flex-1">

				<div className='p-2 m-2'>
					<Link href='/'>
						<Image
							src={recipeIcon}
							width={36}
							height={36}
							alt="Recipe Icon"
						/>
					</Link>
				</div>

				<div className='btn btn-ghost normal-case text-xl hover:font-bold hidden sm:flex'>
					<Link href='/'>
						Recipe Scraper
					</Link>
				</div>

				<div>
					<Link className='hover:font-bold' href='/displayRecipePage'>
						Example Page
					</Link>
				</div>

			</div>

			<div className="flex-none gap-2 ">
				<div className="form-control md:flex-row flex-col">
					<form onSubmit={(event) => onSubmit(event)} >
						<div className='flex'>
							<input
								type="text"
								placeholder="Recipe URL"
								className="input input-bordered w-24 md:w-auto"
								value={searchInput}
								name='url'
								onChange={(e) => handleChange(e.target.value)}
							/>
						</div>

						<div className='flex'>
							<button type='submit' className="input input-bordered w-24 md:w-auto"> Submit </button>
						</div>
					</form>
				</div>

				<div className="dropdown dropdown-end">
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
			</div>
		</div>
	)
}
