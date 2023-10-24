import '../app/globals.css'
import React from 'react'
import Navbar2 from "@/components/navbar2";
import Footer from "@/components/Footer";
import SignInComponenent from "@/components/auth/signinComponent";
import Instructions from "@/components/Instructions";

export default function Login(){
	return(
		<>
			<div className=''>
				<Navbar2 />
			</div>

			<div className='grid py-16 my-16'>
				<div className='place-self-center darK:border-white border-2 p-8'>
				<SignInComponenent />
				</div>
			</div>

			<Footer />
		</>
	)
}