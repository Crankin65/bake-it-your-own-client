import '../app/globals.css'
import React from 'react'
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
import SignUpComponent from "@/components/auth/signupComponent";

export default function Signup(){
	return(
		<>
			<div className=''>
				<Navbar2 />
			</div>

			<div className='grid py-16 my-16'>
				<div className='place-self-center darK:border-white border-2 p-8'>
				<SignUpComponent />
				</div>
			</div>

			<Footer />
		</>
	)
}