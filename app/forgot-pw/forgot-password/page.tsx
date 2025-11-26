
"use client"

import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const ForgotPasswordForm = () => {
  const router = useRouter()
  const [recoveryMethod, setRecoveryMethod] = useState<'phone' | 'email'>('phone')

  return (
    <div className={`${inter.className} bg-white h-screen flex flex-row overflow-hidden relative`}>
      {/* Blue Section - Left Side */}
      <div className='bg-linear-to-b from-[#4A90E2]/80 via-[#4A90E2] to-[#2563EB] h-full w-[35%] flex flex-col p-8 relative overflow-visible'>
        {/* Header - Taxi Icon */}
        <div className=''>
          <div className='bg-white/20 p-3 rounded-lg backdrop-blur-sm w-fit'>
            <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'/>
            </svg>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <Image 
              src='/images/logo.png' 
              alt='logo' 
              width={300}
              height={300}
              style={{ objectFit: 'contain' }}
              priority
            />
        </div>

        {/* Feature Icons - Middle */}
        <div className='flex justify-center items-center px-4 mt-[10%] gap-[10%]'>
          <div className='flex flex-col items-center gap-2'>
            <div className='bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer'>
              <svg className='w-15 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
              </svg>
            </div>
            <span className='text-white text-xs font-medium'>Analytics</span>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer'>
              <svg className='w-15 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </div>
            <span className='text-white text-xs font-medium'>User Management</span>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer'>
              <svg className='w-15 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
            <span className='text-white text-xs font-medium'>Live Tracking</span>
          </div>
        </div>

        {/* Illustration at Bottom - OVERLAPPING into white section */}
        <div className='absolute bottom-0 left-[20%] right-0 w-full z-30'>
          <div className='relative'>
            <Image 
              src='/images/loginpage.png' 
              alt='Taxi Illustration' 
              width={800}
              height={600}
              className='w-[160%] h-auto'
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* forgot password section*/}
      <div className='w-[60%] bg-white h-full flex flex-col items-center justify-center px-12 relative z-20'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Forgot Password?</h1>
        <p className='text-gray-500 text-sm mb-6'>No worries, we can help you reset your password</p>
        
        <form className='space-y-5 w-full max-w-md'>
          {/* Select Recovery Method Dropdown */}
          <div className='space-y-2'>
            <label htmlFor='recoveryMethod' className='block text-xs font-medium text-gray-700'>
              Select method
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
              </div>
              <select
                id='recoveryMethod'
                name='recoveryMethod'
                value={recoveryMethod}
                onChange={(e) => setRecoveryMethod(e.target.value as 'phone' | 'email')}
                className='w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100 text-gray-900 text-sm appearance-none cursor-pointer'
                required
              >
                <option value='phone'>Phone Number</option>
                <option value='email'>Email</option>
              </select>
              <div className='absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
          </div>

          {/* Conditional Input Field - Phone or Email */}
          <div className='space-y-2'>
            <label htmlFor='contactInfo' className='block text-xs font-medium text-gray-700'>
              {recoveryMethod === 'phone' ? 'Phone Number' : 'Email'}
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                {recoveryMethod === 'phone' ? (
                  <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                ) : (
                  <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                )}
              </div>
              <input
                type={recoveryMethod === 'phone' ? 'tel' : 'email'}
                id='contactInfo'
                name='contactInfo'
                placeholder={recoveryMethod === 'phone' ? 'Enter phone number' : 'Enter email'}
                className='w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100 text-gray-900 placeholder-gray-400 text-sm'
                required
              />
            </div>
          </div>

          {/* Reset Password Button */}
          <button
            type='submit'
            onClick={() => router.push('/forgot-pw/verification')}
            className='w-full bg-linear-to-r from-[#4A90E2] to-[#2563EB] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5'
          >
            Get Verification Code
          </button>

          {/* Back to Login Link */}
          <div className='text-center'>
            <button
              type='button'
              onClick={() => router.push('/auth')}
              className='text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300'
            >
              ← Back to Login
            </button>
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default ForgotPasswordForm