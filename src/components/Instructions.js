import React from 'react';

export default function Instructions() {
	return(
		<>
			<div className='font-bold text-lg'>
				Instructions
			</div>

			<div className=''>
				<ol className='m-2 p-2'>

					<li>
						Find the recipe URL that you're looking to parse.
						(Right now this only works for https://cookieandkate.com/ and https://cupcakesandkalechips.com/
					</li>

					<li>
						Add the url to the search bar (structured as https://website.com/(recipe))
					</li>

				</ol>
			</div>
		</>
	)
}