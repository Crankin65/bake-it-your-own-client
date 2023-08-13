'use client'
import React, {useState, useEffect } from 'react';
import Navbar from "@/components/navbar";
import Navbar2 from "@/components/navbar2";


export default function Home() {
  const [message, setMessage] = useState('')
  const [testMessage , setTestMessage] = useState('default')


  return (
    <div className=''>

         {/*<Navbar />*/}
      <Navbar2 />


    </div>
  )
}


