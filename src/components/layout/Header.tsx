'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setLoginModalOpen, setMobileMenuOpen } from '@/store/slices/uiSlice';
import LoginModal from '@/components/modals/LoginModal';

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { isLoginModalOpen, isMobileMenuOpen } = useAppSelector((state) => state.ui);
  const { user } = useAppSelector((state) => state.auth);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Home');
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        hamburgerRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        dispatch(setMobileMenuOpen(false));
      }
      
      // Close dropdown when clicking outside
      if (
        showMoreDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMoreDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, showMoreDropdown, dispatch]);

  // Update active menu item based on pathname
  useEffect(() => {
    if (pathname === '/') {
      setActiveMenuItem('Home');
    } else if (pathname?.startsWith('/puja') || pathname?.startsWith('/pujas')) {
      setActiveMenuItem('Puja');
    } else if (pathname?.startsWith('/horoscope')) {
      setActiveMenuItem('Horoscope');
    } else if (pathname?.startsWith('/store')) {
      setActiveMenuItem('Store');
    } else if (pathname?.startsWith('/about') || pathname?.startsWith('/panchang') || pathname?.startsWith('/blog') || pathname?.startsWith('/free-kundli') || pathname?.startsWith('/match-making') || pathname?.startsWith('/numerology') || pathname?.startsWith('/contact') || pathname?.startsWith('/ask-question') || pathname?.startsWith('/astro-watch') || pathname?.startsWith('/manglik-dosh') || pathname?.startsWith('/kaalsarp-dosh') || pathname?.startsWith('/astro-tools') || pathname?.startsWith('/career')) {
      setActiveMenuItem('More');
    }
  }, [pathname]);

  // Dropdown menu items - optimized and merged
  const moreMenuItems = [
    { name: "Panchang", href: "/panchang", icon: "📅" },
    { name: "Blog", href: "/blog", icon: "📚" },
    { name: "Free Kundli", href: "/free-kundli", icon: "🔮" },
    { name: "Match Making", href: "/match-making", icon: "💕" },
    { name: "Numerology", href: "/numerology", icon: "🔢" },
    { name: "Astro Tools", href: "/astro-tools", icon: "🛠️" },
    { name: "Ask Question", href: "/ask-question", icon: "❓" },
    { name: "Career", href: "/career", icon: "💼" },
    { name: "Contact", href: "/contact", icon: "📞" }
  ];

  const menuItems = [
    { name: "Home", href: "/", active: activeMenuItem === "Home" },
    { name: "Puja", href: "/pujas", active: activeMenuItem === "Puja" },
    { name: "Horoscope", href: "/horoscope", active: activeMenuItem === "Horoscope" },
    { name: "Store", href: "/store", active: activeMenuItem === "Store" },
    { name: "More", href: "/about", active: activeMenuItem === "More" },
  ];

  const handleMenuItemClick = (href: string, name: string) => {
    // Update active state immediately
    setActiveMenuItem(name);
    
    // Close dropdown if open
    setShowMoreDropdown(false);
    
    // Navigate to the page for all menu items
    router.push(href);

    if (isMobileMenuOpen) {
      dispatch(setMobileMenuOpen(false));
    }
  };

  const handleMoreClick = () => {
    setShowMoreDropdown(!showMoreDropdown);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-lg border-b border-white/50 shadow-lg' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className={`flex items-center rounded-full mx-28 px-4 py-2 shadow-md transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md border border-white/60' 
              : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90'
          }`}>
            <div className="flex items-center">
              <Image
                src="/images/img_group_133643.svg"
                alt="Logo Text"
                width={100}
                height={18}
                className={`w-24 h-4 transition-all duration-300 ${
                  isScrolled ? 'brightness-0' : 'brightness-100'
                }`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center rounded-full px-6 py-2 shadow-md transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md border border-white/60' 
              : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 backdrop-blur-sm'
          }`}>
            <div className="flex items-center gap-2">
              {menuItems.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="relative w-20 h-8 flex items-center justify-center"
                >
                  <button
                    onClick={() => handleMenuItemClick(item.href, item.name)}
                    className={`
                      absolute inset-0 w-full h-full rounded-full text-sm font-medium uppercase font-['Work_Sans'] 
                      transition-all duration-300 ease-in-out transform flex items-center justify-center
                      ${
                        item.active
                          ? isScrolled
                            ? "text-gray-900 bg-orange-600/90 shadow-lg scale-105"
                            : "text-white bg-orange-600/90 shadow-lg scale-105"
                          : isScrolled
                          ? "text-gray-900 hover:bg-white/40 hover:text-black hover:scale-102"
                          : "text-white hover:bg-orange-600/50 hover:scale-102"
                      }
                    `}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
              
              {/* More Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div className="relative w-20 h-8 flex items-center justify-center">
                  <button
                    onClick={handleMoreClick}
                    className={`
                      absolute inset-0 w-full h-full rounded-full text-sm font-medium uppercase font-['Work_Sans'] 
                      transition-all duration-300 ease-in-out transform flex items-center justify-center
                      ${
                        activeMenuItem === 'More'
                          ? isScrolled
                            ? "text-gray-900 bg-orange-600/90 shadow-lg scale-105"
                            : "text-white bg-orange-600/90 shadow-lg scale-105"
                          : isScrolled
                          ? "text-gray-900 hover:bg-white/40 hover:text-black hover:scale-102"
                          : "text-white hover:bg-orange-600/50 hover:scale-102"
                      }
                    `}
                  >
                    More
                    <svg 
                      className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                        showMoreDropdown ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {/* Dropdown Menu */}
                {showMoreDropdown && (
                  <div className={`absolute top-12 right-0 w-52 rounded-xl shadow-2xl border overflow-hidden z-50 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-white/95 backdrop-blur-lg border-white/60'
                      : 'bg-white/95 backdrop-blur-lg border-orange-200/60'
                  }`}>
                    <div className="py-1">
                      {moreMenuItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleMenuItemClick(item.href, item.name)}
                          className="w-full px-3 py-2 text-left hover:bg-orange-50 transition-all duration-200 flex items-center gap-2 text-gray-700 hover:text-orange-600 text-sm"
                        >
                          <span className="text-base">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Admin Button */}
            <button
              onClick={() => router.push('/admin')}
              className={`hidden sm:flex items-center gap-2 font-medium px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-['Work_Sans'] uppercase text-sm font-bold ${
                isScrolled
                  ? 'bg-purple-100/80 backdrop-blur-md border border-purple-200/60 hover:bg-purple-200/90 text-purple-900'
                  : 'bg-gradient-to-r from-purple-400/90 to-purple-500/90 hover:from-purple-500 hover:to-purple-600 text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Admin
            </button>
            {/* User Profile or Login Button */}
            {/* TEMPORARY: Always show user profile for testing */}
            {true ? (
              /* User Profile Section */
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.push('/dashboard')}
                  className={`hidden sm:flex items-center gap-3 font-medium px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/90 text-gray-900'
                      : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 hover:from-orange-500 hover:to-orange-600 text-white'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                    {(user?.name || 'Test User')?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <span className="text-sm font-['Work_Sans'] capitalize">{user?.name || 'Test User'}</span>
                </button>
                <button
                  onClick={() => router.push('/dashboard')}
                  className={`sm:hidden p-2 rounded-full hover:scale-105 transition-all duration-300 ${
                    isScrolled
                      ? 'bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/90 text-gray-900'
                      : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 hover:bg-orange-600/80 text-white'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                    {(user?.name || 'Test User')?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                </button>
              </div>
            ) : (
              /* Login Button */
              <button
                className={`hidden sm:flex items-center gap-2 font-medium px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-['Work_Sans'] uppercase text-sm font-bold ${
                  isScrolled
                    ? 'bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/90 text-gray-900'
                    : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 hover:from-orange-500 hover:to-orange-600 text-white'
                }`}
                onClick={() => dispatch(setLoginModalOpen(true))}
              >
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
            )}

            {/* Mobile Menu Button */}
            <button
              ref={hamburgerRef}
              className={`lg:hidden p-2 rounded-full hover:scale-105 transition-all duration-300 ${
                isScrolled
                  ? 'bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/90 text-gray-900'
                  : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 hover:bg-orange-600/80 text-white'
              }`}
              onClick={() => dispatch(setMobileMenuOpen(!isMobileMenuOpen))}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          ref={mobileMenuRef}
          className={`${
            isMobileMenuOpen ? "block animate-fadeIn" : "hidden"
          } lg:hidden rounded-xl mt-4 p-4 shadow-md transition-all duration-300 ${
            isScrolled
              ? 'bg-white/80 backdrop-blur-lg border border-white/60'
              : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 backdrop-blur-sm'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {menuItems.slice(0, 4).map((item, index) => (
              <div key={index} className="relative w-full h-10 flex items-center">
                <button
                  onClick={() => handleMenuItemClick(item.href, item.name)}
                  className={`
                    absolute inset-0 w-full h-full rounded-xl text-sm font-medium text-left uppercase font-['Work_Sans'] 
                    transition-all duration-300 ease-in-out transform flex items-center px-4
                    ${
                      item.active
                        ? isScrolled
                          ? "text-gray-900 bg-orange-600/90 scale-102 shadow-md"
                          : "text-white bg-orange-600/90 scale-102 shadow-md"
                        : isScrolled
                        ? "text-gray-900 hover:bg-white/40 hover:text-black hover:scale-102"
                        : "text-white hover:bg-orange-600/50 hover:scale-102"
                    }
                  `}
                >
                  {item.name}
                </button>
              </div>
            ))}
            
            {/* Mobile More Section */}
            <div className="border-t border-white/20 pt-2 mt-2">
              <div className="text-sm font-bold text-gray-300 px-4 py-2 uppercase tracking-wide">
                More Options
              </div>
              {moreMenuItems.map((item, index) => (
                <div key={index} className="relative w-full h-10 flex items-center">
                  <button
                    onClick={() => handleMenuItemClick(item.href, item.name)}
                    className={`
                      absolute inset-0 w-full h-full rounded-xl text-sm font-medium text-left font-['Work_Sans'] 
                      transition-all duration-300 ease-in-out transform flex items-center px-4 gap-3
                      ${
                        isScrolled
                          ? "text-gray-700 hover:bg-white/40 hover:text-black hover:scale-102"
                          : "text-white/90 hover:bg-orange-600/50 hover:scale-102"
                      }
                    `}
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
            
            {/* Mobile Login/Profile Button */}
            {/* TEMPORARY: Always show user profile for testing */}
            {true ? (
              <button
                onClick={() => router.push('/dashboard')}
                className={`flex items-center gap-3 font-medium px-4 py-2 rounded-full mt-2 font-['Work_Sans'] text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/90 text-gray-900'
                    : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 hover:from-orange-500 hover:to-orange-600 text-white'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                  {(user?.name || 'Test User')?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <span className="capitalize">{user?.name || 'Test User'}</span>
              </button>
            ) : (
              <button
                className={`flex items-center justify-center gap-2 font-medium px-4 py-2 rounded-full mt-2 font-['Work_Sans'] uppercase text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold ${
                  isScrolled
                    ? 'bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/90 text-gray-900'
                    : 'bg-gradient-to-r from-orange-400/90 to-orange-500/90 hover:from-orange-500 hover:to-orange-600 text-white'
                }`}
                onClick={() => dispatch(setLoginModalOpen(true))}
              >
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
            )}
            
            {/* Mobile Admin Button */}
            <button
              onClick={() => router.push('/admin')}
              className={`flex items-center justify-center gap-2 font-medium px-4 py-2 rounded-full mt-2 font-['Work_Sans'] uppercase text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold ${
                isScrolled
                  ? 'bg-purple-100/80 backdrop-blur-md border border-purple-200/60 hover:bg-purple-200/90 text-purple-900'
                  : 'bg-gradient-to-r from-purple-400/90 to-purple-500/90 hover:from-purple-500 hover:to-purple-600 text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Admin
            </button>
          </div>
        </nav>

        {/* Login Modal */}
        <LoginModal />
      </div>
    </header>
  );
};

export default Header;