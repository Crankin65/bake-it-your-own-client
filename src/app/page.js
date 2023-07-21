'use client'
import React, {useState, useEffect } from 'react';


export default function Home() {
  const [message, setMessage] = useState('')
  const [testMessage , setTestMessage] = useState('default')


  return (
    <div className='App'>
      <h1>{message}</h1>
      <h1>{testMessage}</h1>
      <h2>What?</h2>
      <div>
        <p>something</p>
      </div>
    </div>
  )
}


