import React from 'react';
import Link from 'next/link'

export default function LoginComponent() {
	return(
		<div className='flex-col grow'>
			<p className='flex justify-center font-bold text-lg'>Login</p>

			<form action="/login/password" method="post" className='flex-col py-4'>
				<section className='flex flex-row '>
					<label htmlFor="username" className='p-2 flex' >Username</label>
					<input id="username" name="username" type="text" autoComplete="username" required autoFocus className='m-2 flex'/>
				</section>
				<section className='flex flex-row'>
					<label htmlFor="current-password" className='p-2 flex'>Password </label>
					<input id="current-password" name="password" type="password" autoComplete="current-password" required className='m-2 flex caret-pink-500' />
				</section>
				<button type="submit" className='m-2 font-serif italic hover:text-blue-500'>Login</button>
			</form>

		</div>
	)
}