'use client'
import React, {useState, useEffect } from 'react';
import Navbar from "@/components/navbar";


export default function Home() {
  const [message, setMessage] = useState('')
  const [testMessage , setTestMessage] = useState('default')


  return (
    <div className=''>

         <Navbar />



    </div>
  )
}


