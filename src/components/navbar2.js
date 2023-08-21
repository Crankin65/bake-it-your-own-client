import React, {useState} from 'react';
import Profile from '../icons/icons8-person-64.png'
import recipeIcon from "@/icons/icons8-recipe-64.png";


import Image from "next/image";
import Link from 'next/link'

export default function Navbar2() {
	const [searchUrl, setSearchUrl] = useState('')

	const handleChange = (value) => {
		setSearchUrl(value)
	}

	const searchBarSubmit = (event) => {
		event.preventDefault()

		if (searchUrl.includes('cookieandkate')) {
			alert('thats a valid url')
		} else {
			alert('thats not a valid url')
		}
	}

	return(
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Image
					src={recipeIcon}
					width={36}
					height={36}
					alt="Recipe Icon"
				/>
				{/*<a className="btn btn-ghost normal-case text-xl">Recipe Scraper</a>*/}
				<Link className='btn btn-ghost normal-case text-xl hover:font-bold'
							href='/'> Recipe Scraper  </Link>

				<Link className='hover:font-bold' href='/displayRecipePage'> Default Page </Link>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<form onSubmit={(e) => searchBarSubmit(e)} >
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered w-24 md:w-auto"
							value={searchUrl}
							onChange={(e) => handleChange(e.target.value)}
						/>
						<input type='submit' className="input input-bordered w-24 md:w-auto" />
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
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li><a>Settings</a></li>
						<li><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}
