"use client"

import React, { useState } from 'react'

function HomePage() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState({})
  const [to, setTo] = useState(1)
  const [letterCase, setLetterCase] = useState(1)

  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        number: prompt,
        to: to,
        letterCase: letterCase
      })
    })

    const data = await response.json()
    setResult(data)
  }

  const handleInput = (e) => {
    let value = e.target.value;

    // Solo permite números y elimina cualquier otro carácter
    let cleanedValue = value.replace(/[^0-9]/g, '');

    // Evita que el número comience con 0
    if (cleanedValue.length > 1 && cleanedValue.startsWith('0')) {
      cleanedValue = cleanedValue.replace(/^0+/, '');
    }

    setPrompt(cleanedValue);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    let paste = (e.clipboardData || window.clipboardData).getData('text');
    paste = paste.replace(/[^0-9]/g, '');

    // Evita que el número comience con 0
    if (paste.startsWith('0')) {
      paste = paste.replace(/^0+/, '');
    }

    setPrompt((prev) => {
      const combined = prev + paste;
      return combined.replace(/^0+/, '');
    });
  };

  const handleClear = () => {
    setPrompt('')
    setResult({ words: '' })
    setTo(1)
    setLetterCase(1)
  }

  return (
    <div className='flex flex-col gap-5 p-10 rounded bg-zinc-900 shadow-xl lg:w-1/2 lg:h-1/3 w-[80%] h-[60%]'>
      <h1 className='text-center font-bold text-2xl text-white'>NumberTranslate</h1>
      <form onSubmit={onSubmit} className='flex lg:flex-row gap-5 flex-col items-center w-full h-full'>
        <div className='w-full h-full flex flex-col gap-2'>
          <textarea type='text' onInput={handleInput} value={prompt} onPaste={handlePaste} className='p-3 block bg-neutral-700 text-white w-full h-full rounded-md border border-neutral-600 focus:border-blue-500 focus:ring-blue-500 text-base' placeholder='Enter a number'></textarea>
          <p className='text-white text-lg'>More filters:</p>
          <div className='flex flex-row justify-between gap-10'>
            <div className='flex flex-col gap-1 w-1/2'>
              <label className='text-white'>To:</label>
              <select className='p-1 block bg-neutral-700 text-white rounded-md border border-neutral-600 focus:border-blue-500 focus:ring-blue-500 text-base' value={to} onChange={(e) => setTo(e.target.value)}>
                <option value={1}>Words</option>
                <option value={2}>Currency</option>
              </select>
            </div>
            <div className='flex flex-col gap-1 w-1/2'>
              <label className='text-white'>Letter Case:</label>
              <select className='p-1 block bg-neutral-700 text-white rounded-md border border-neutral-600 focus:border-blue-500 focus:ring-blue-500 text-base' value={letterCase} onChange={(e) => setLetterCase(e.target.value)}>
                <option value={1}>lowercase</option>
                <option value={2}>UPPERCASE</option>
                <option value={2}>Title Case</option>
                <option value={2}>Sentence case</option>
              </select>
            </div>
          </div>

        </div>
        <div className='h-full flex flex-col justify-center w-1/3'>
          <button type='submit' className='bg-green-500 p-3 rounded-md block mt-2 text-white h-min text-base font-medium'>
            Generate
          </button>
          <button type='button' className='bg-sky-500 p-3 rounded-md block mt-2 text-white h-min text-base font-medium' onClick={handleClear}>
            Clear
          </button>
        </div>
        <textarea className='p-3 block bg-neutral-700 text-white w-full rounded-md border border-neutral-600 h-full focus:border-blue-500 focus:ring-blue-500 text-base' readOnly value={result.words && result.words} placeholder='Result'></textarea>
      </form>
    </div>
  )
}

export default HomePage