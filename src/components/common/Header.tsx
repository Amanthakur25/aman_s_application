'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'Pages', href: '/pages' },
    { name: 'Horoscope', href: '/horoscope' },
    { name: 'Shop', href: '/shop' },
    { name: 'News', href: '/news' }
  ];

  return (
    <header className="w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section - Moved slightly left */}
          <div className="flex items-center bg-gradient-to-r from-orange-400 to-orange-500 rounded-full px-4 py-3 shadow-sm -ml-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/img_group_133653.svg"
                alt="Logo Icon"
                width={32}
                height={26}
                className="w-8 h-6"
              />
              <Image
                src="/images/img_group_133643.svg"
                alt="Logo Text"
                width={100}
                height={18}
                className="w-24 h-4"
              />
            </div>
          </div>

          {/* Desktop Navigation - Enhanced with complete circle fill and smooth transitions */}
          <nav className="hidden lg:flex items-center bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-sm border border-orange-100">
            <div className="flex items-center gap-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative w-20 h-10 flex items-center justify-center"
                >
                  <button
                    className={`
                      absolute inset-0 w-full h-full rounded-full text-sm font-medium uppercase font-['Work_Sans'] 
                      transition-all duration-300 ease-in-out transform flex items-center justify-center
                      ${item.active 
                        ? 'text-white bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg scale-105' 
                        : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50/80 hover:scale-102'
                      }
                    `}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </nav>

          {/* Right Section - Enhanced */}
          <div className="flex items-center gap-4">
            {/* Search Button - Enhanced */}
            <button className="p-3 rounded-full bg-white/90 backdrop-blur-sm border border-orange-100 hover:bg-orange-50/80 hover:border-orange-200 transition-all duration-300 hover:scale-105">
              <Image
                src="/images/img_group_8.svg"
                alt="Search"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>

            {/* Login Button - Enhanced */}
            <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-['Work_Sans'] uppercase text-sm hover:from-orange-500 hover:to-orange-600">
              <Image
                src="/images/img_vector.svg"
                alt="Login Icon"
                width={12}
                height={12}
                className="w-3 h-3"
              />
              Login
              <Image
                src="/images/img_vector.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </button>

            {/* Mobile Menu Button - Enhanced */}
            <button 
              className="lg:hidden p-3 rounded-full bg-white/90 backdrop-blur-sm border border-orange-100 text-orange-500 hover:bg-orange-50/80 hover:border-orange-200 transition-all duration-300 hover:scale-105" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced with complete circle fill */}
        <nav className={`${isMenuOpen ? 'block animate-fadeIn' : 'hidden'} lg:hidden bg-white/95 backdrop-blur-sm rounded-2xl mt-4 p-6 border border-orange-100 shadow-lg`}>
          <div className="flex flex-col space-y-3">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-12 flex items-center"
              >
                <button
                  className={`
                    absolute inset-0 w-full h-full rounded-xl text-sm font-medium text-left uppercase font-['Work_Sans'] 
                    transition-all duration-300 ease-in-out transform flex items-center px-4
                    ${item.active 
                      ? 'text-white bg-gradient-to-r from-orange-400 to-orange-500 scale-102 shadow-md' 
                      : 'text-gray-800 hover:text-orange-600 hover:bg-orange-50/80 hover:scale-102'
                    }
                  `}
                >
                  {item.name}
                </button>
              </div>
            ))}
            
            {/* Mobile Login - Enhanced */}
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium px-6 py-3 rounded-full mt-4 font-['Work_Sans'] uppercase text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-orange-500 hover:to-orange-600">
              <Image
                src="/images/img_vector.svg"
                alt="Login Icon"
                width={12}
                height={12}
                className="w-3 h-3"
              />
              Login
              <Image
                src="/images/img_vector.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;