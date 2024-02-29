import React from 'react';

export default function About(){
	return(
		<div className='mt-4 gap-4 mx-2 '>

			<div className='flex flex-col font-bold bg-white rounded dark:bg-gray-800  items-center'>
				<p className='flex px-2 py-2  '>Welcome to &quot;Bake It Your Own!&quot;</p>
			</div>

			<br/>
			<br/>

			<div className='flex flex-col font-light px-2 bg-white rounded dark:bg-gray-800 py-4 text-center'>
				<p>	This application let's you pull information from two recipe based websites (&quot;cookieandkate.com&quot;
					and &quot;cupcakesandkalechips.com&quot; ).</p>
				<br/>

				<p>By using CheerioJS, this application displays key recipe information (from the entered URL) to the main page.
					If a recipe has been parsed already, it is saved to a MongoDB database for quicker retrieval.</p>

				<br/>

				<p> Next steps are adding sign-in/sign-out and user authentication. From there, giving users the ability to make
					edits to recipes and save them to their very own virtual &quot;cookbooks&quot;!</p>

				<br/>

				<p>This application is free to use but pleae let me know if there&apos;s any other features you&apos;d like to see!</p>

			</div>

		</div>
	)
}