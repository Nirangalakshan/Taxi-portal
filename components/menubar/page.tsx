'use client'
import React, { useState } from 'react'
import { FaSearch, FaBell, FaUserCircle, FaSignOutAlt, FaCog, FaUser } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

function Menubar() {
  const router = useRouter()
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3) // Example notification count

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...')
    // Example: redirect to login page
    // window.location.href = '/auth'
  }

  return (
    <div className='flex items-center px-6 py-3 border-b border-gray-200 justify-between h-[60px] w-full bg-white'>
      {/* Left Side - Search Input */}
      <div className='flex items-center flex-1 max-w-md'>
        <div className='relative w-full'>
          <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600' size={16} />
          <input
            type='text'
            placeholder='Search...'
            className='text-gray-700 w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm'
          />
        </div>
      </div>

      {/* Right Side - Alert Icon and Profile */}
      <div className='flex items-center gap-4'>
        {/* Alert/Notification Icon */}
        <div className='relative cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors'>
          <FaBell className='text-gray-600 hover:text-blue-600' size={20} />
          {notificationCount > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>
              {notificationCount}
            </span>
          )}
        </div>

        {/* Profile Icon with Dropdown */}
        <div className='relative'>
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className='flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors'
          >
            <FaUserCircle className='text-gray-600 hover:text-blue-600' size={28} />
          </button>

          {/* Dropdown Menu */}
          {showProfileDropdown && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
              <div className='py-2'>
                {/* Profile Info */}
                <div className='px-4 py-2 border-b border-gray-200'>
                  <p className='text-sm font-semibold text-gray-800'>Admin User</p>
                  <p className='text-xs text-gray-500'>admin@taxiportal.com</p>
                </div>

                {/* Menu Items */}
                <button
                  onClick={() => {
                    setShowProfileDropdown(false)
                    // Navigate to profile
                  }}
                  className='w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors'
                >
                  <FaUser size={14} />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => {
                    setShowProfileDropdown(false)
                    // Navigate to settings
                  }}
                  className='w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors'
                >
                  <FaCog size={14} />
                  <span>Settings</span>
                </button>

                <div className='border-t border-gray-200 my-1'></div>

                {/* Logout Button */}
                <button
                  onClick={() => {
                    setShowProfileDropdown(false)
                    handleLogout()
                    router.push('/auth')
                  }}
                  className='w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors'
                >
                  <FaSignOutAlt size={14} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div
          className='fixed inset-0 z-40'
          onClick={() => setShowProfileDropdown(false)}
        ></div>
      )}
    </div>
  )
}

export default Menubar