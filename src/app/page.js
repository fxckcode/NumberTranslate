"use client"

import React, { useState } from 'react'

function HomePage() {
  const  [prompt, setPrompt] = useState('')
  const [result, setResult] = useState({})

  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ number: prompt })
    })

    const data = await response.json()
    setResult(data)
  }

  return (
    <div className='flex flex-col gap-5 p-10 rounded bg-zinc-900 shadow-xl w-1/2 h-1/3'>
  <h1 className='text-center font-bold text-2xl text-white'>NumberTranslate</h1>
  <form onSubmit={onSubmit} className='flex flex-row gap-5 items-center w-full h-full'>
    <textarea type='text' onChange={(e) => setPrompt(e.target.value)} className='p-3 block bg-neutral-700 text-white w-full h-full rounded-md border border-neutral-600 focus:border-blue-500 focus:ring-blue-500 text-base' placeholder='Enter a number'></textarea>
    <button className='bg-green-500 p-3 rounded-md block mt-2 text-white h-min text-base font-medium'>
      Generate
    </button>
    <textarea className='p-3 block bg-neutral-700 text-white w-full rounded-md border border-neutral-600 h-full focus:border-blue-500 focus:ring-blue-500 text-base' readOnly value={result.words && result.words} placeholder='Result'></textarea>
  </form>
</div>
  )
}

export default HomePage