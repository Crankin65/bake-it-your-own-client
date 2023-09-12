import '../app/globals.css'
import React from 'react'
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
import Instructions from "@/components/Instructions";

export default function Guide(){
	return(
		<>
			<div className=''>
				<Navbar2 />
			</div>

			<Instructions />

			<Footer />
		</>
	)
}