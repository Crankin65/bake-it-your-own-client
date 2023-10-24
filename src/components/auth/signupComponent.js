import React from 'react';

export default function SignUpComponent() {
	return(
		<div className='flex-col grow'>
			<p className='flex justify-center font-bold text-lg'>Sign Up</p>

			<form action="/signup" method="post" className='flex-col py-4'>

				<section className='flex flex-row '>
					<label htmlFor="firstName" className='p-2 flex' >First Name</label>
					<input id="firstName" name="firstName" type="text" autoComplete="firstName" required autoFocus className='m-2 flex border-2 border-slate-200 dark:border-slate-500'/>
				</section>

				<section className='flex flex-row '>
					<label htmlFor="username" className='p-2 flex' >Username</label>
					<input id="username" name="username" type="text" autoComplete="username" required autoFocus className='m-2 flex border-2 border-slate-200 dark:border-slate-500'/>
				</section>

				<section className='flex flex-row'>
					<label htmlFor="password" className='p-2 flex'>New Password </label>
					<input id="password" name="password" type="password" autoComplete="password" required className='m-2 flex border-2 border-slate-200 dark:border-slate-500' />
				</section>

				<section className='flex flex-row'>
					<label htmlFor="re-enter-password" className='p-2 flex'>Re-enter Password </label>
					<input id="re-enter-password" name="re-enter-password" type="re-enter-password" autoComplete="re-enter-password" required className='m-2 flex border-2 border-slate-200 dark:border-slate-500' />
				</section>

				<button type="submit" className='m-2 font-serif underline hover:text-blue-500'>Submit</button>
			</form>

		</div>
	)
}