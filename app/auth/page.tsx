"use client"

import React from 'react'

const LoginForm = () => {
  return (
    <div className='bg-white h-screen flex flex-row'>
      <div className='bg-[#60A5FA] h-full w-3/7'>
      </div>
      <div className='w-4/7 bg-white h-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-[#60A5FA]'>Wlcome Back</h1>
        <p className='text-gray-500'>Login to your account</p>
        
      </div>
    </div>
  )
}

export default LoginForm