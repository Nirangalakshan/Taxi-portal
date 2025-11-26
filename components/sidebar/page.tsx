/* eslint-disable react-hooks/set-state-in-effect */

'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { FaTaxi, FaChartLine, FaUsers, FaRoute, FaDollarSign, FaCalendarPlus, FaComments, FaWallet, FaChartBar, FaBell, FaMapMarkedAlt, FaGift, FaChevronDown, FaChevronRight, FaCog, FaUserFriends, FaCar } from 'react-icons/fa'

interface SubMenuItem {
  id: string
  label: string
  route?: string
}

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  hasDropdown?: boolean
  subItems?: SubMenuItem[]
  isCategory?: boolean
  route?: string
}

function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedItem, setSelectedItem] = useState('dashboard')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>([])
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const menuItems: MenuItem[] = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: <FaChartLine />,
      route: '/dashboard'
    },
    
    // User Management Group
    { 
      id: 'user-management', 
      label: 'User Management', 
      icon: <FaUsers />, 
      hasDropdown: true,
      isCategory: true,
      subItems: [
        { id: 'passengers', label: 'Passenger Management', route: '/user-management/passengers' },
        { id: 'drivers', label: 'Driver Management', route: '/user-management/drivers' },
        { id: 'staff', label: 'Staff Management', route: '/user-management/staff' },
      ]
    },
    
    // Operations Group
    { 
      id: 'operations', 
      label: 'Operations', 
      icon: <FaRoute />, 
      hasDropdown: true,
      isCategory: true,
      subItems: [
        { id: 'trips', label: 'Trips Management', route: '/operations/trips' },
        { id: 'booking', label: 'Manual Booking', route: '/operations/booking' },
        { id: 'alerts', label: 'Alerts & Notifications', route: '/operations/alerts' },
      ]
    },
    
    // Financial Management Group
    { 
      id: 'financial', 
      label: 'Financial', 
      icon: <FaDollarSign />, 
      hasDropdown: true,
      isCategory: true,
      subItems: [
        { id: 'fare', label: 'Fare Management', route: '/financial/fare' },
        { id: 'wallet', label: 'Driver Wallet', route: '/financial/wallet' },
        { id: 'payments', label: 'Payments & Transactions', route: '/financial/payments' },
      ]
    },
    
    // Analytics & Reports
    { 
      id: 'analytics', 
      label: 'Analytics & Reports', 
      icon: <FaChartBar />, 
      hasDropdown: true,
      isCategory: true,
      subItems: [
        { id: 'revenue', label: 'Revenue Analytics', route: '/analytics/revenue' },
        { id: 'demand', label: 'Demand Analytics', route: '/analytics/demand' },
        { id: 'users-analytics', label: 'User Analytics', route: '/analytics/users' },
        { id: 'performance', label: 'Performance Metrics', route: '/analytics/performance' },
      ]
    },
    
    // Marketing & Promotions
    { 
      id: 'marketing', 
      label: 'Marketing', 
      icon: <FaGift />, 
      hasDropdown: true,
      isCategory: true,
      subItems: [
        { id: 'promotions', label: 'Promotions', route: '/marketing/promotions' },
        { id: 'referrals', label: 'Referral Program', route: '/marketing/referrals' },
        { id: 'offers', label: 'Offers & Discounts', route: '/marketing/offers' },
      ]
    },
     // Live Map
    { 
      id: 'live-map', 
      label: 'Live Map', 
      icon: <FaMapMarkedAlt />, 
      route: '/live-map'
     
    },
    
    // Communication
    { 
      id: 'messaging', 
      label: 'Messaging', 
      icon: <FaComments />,
      route: '/messaging'
    },
    
    // Settings
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <FaCog />,
      route: '/settings'
    },
  ]

  // Sync selected item and expanded dropdowns with current route
  useEffect(() => {
    // Find the current menu item based on pathname
    for (const item of menuItems) {
      if (item.route === pathname) {
        setSelectedItem(item.id)
        return
      }
      
      // Check sub-items
      if (item.subItems) {
        for (const subItem of item.subItems) {
          if (subItem.route === pathname) {
            setSelectedItem(subItem.id)
            // Auto-expand the parent dropdown
            if (!expandedDropdowns.includes(item.id)) {
              setExpandedDropdowns(prev => [...prev, item.id])
            }
            return
          }
        }
      }
    }
  }, [pathname])

  const toggleDropdown = (itemId: string) => {
    if (expandedDropdowns.includes(itemId)) {
      setExpandedDropdowns(expandedDropdowns.filter(id => id !== itemId))
    } else {
      setExpandedDropdowns([...expandedDropdowns, itemId])
    }
  }

  const handleItemClick = (item: MenuItem) => {
    if (item.hasDropdown) {
      toggleDropdown(item.id)
    } else {
      setSelectedItem(item.id)
      if (item.route) {
        router.push(item.route)
      }
    }
  }

  const handleSubItemClick = (subItem: SubMenuItem, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedItem(subItem.id)
    if (subItem.route) {
      router.push(subItem.route)
    }
  }

  return (
    <div 
      className={`h-screen bg-white border-r border-gray-200 flex flex-col font-sans transition-all duration-300 ${
        isCollapsed ? 'w-22' : 'w-64'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center p-1 gap-3 border-b border-gray-200 justify-between">
        {!isCollapsed && (
          <React.Fragment>
          <div >
            <Image
             src='/images/logo2.png'
             alt='logo'
             width={100}
             height={100}
             />
          </div>
            
          </React.Fragment>
        )}
        <button 
          className={`w-8 h-14 flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer ${
            isCollapsed ? 'mx-auto' : ''
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <div className="w-5 h-0.5 bg-black rounded"></div>
          <div className="w-5 h-0.5 bg-black rounded"></div>
          <div className="w-5 h-0.5 bg-black rounded"></div>
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col py-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className={`flex items-center px-3 py-3 gap-3 cursor-pointer transition-all relative text-sm ${
                isCollapsed ? 'justify-center' : ''
              } ${
                selectedItem === item.id && !item.hasDropdown
                  ? 'bg-blue-50 border-r-4 border-blue-600 rounded-lg text-blue-600 font-medium w-[95%] ml-1 '
                  : item.isCategory && expandedDropdowns.includes(item.id)
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 '
              }`}
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="text-base">{item.icon}</span>
              {!isCollapsed && (
                <React.Fragment>
                  <span className={`flex-1 ${item.isCategory ? 'font-medium' : ''}`}>{item.label}</span>
                  {item.hasDropdown && (
                    expandedDropdowns.includes(item.id) 
                      ? <FaChevronDown size={12} className="ml-auto text-gray-400" />
                      : <FaChevronRight size={12} className="ml-auto text-gray-400" />
                  )}
                </React.Fragment>
              )}
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && hoveredItem === item.id && (
                <div className="fixed left-24 bg-gray-800 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap shadow-xl" style={{ zIndex: 9999 }}>
                  {item.label}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </div>

            {/* Sub-items */}
            {!isCollapsed && item.hasDropdown && expandedDropdowns.includes(item.id) && item.subItems && (
              <div className="pl-11 bg-gray-50/50">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`py-2.5 px-4 text-xs cursor-pointer transition-all rounded-md mx-2 my-1 ${
                      selectedItem === subItem.id
                        ? 'text-blue-600 font-medium bg-blue-50 border-r-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={(e) => handleSubItemClick(subItem, e)}
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar