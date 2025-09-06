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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Home');

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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, dispatch]);

  // Update active menu item based on pathname
  useEffect(() => {
    if (pathname === '/') {
      setActiveMenuItem('Home');
    } else if (pathname?.startsWith('/puja')) {
      setActiveMenuItem('Puja');
    } else if (pathname?.startsWith('/horoscope')) {
      setActiveMenuItem('Horoscope');
    } else if (pathname?.startsWith('/store')) {
      setActiveMenuItem('Store');
    } else if (pathname?.startsWith('/about')) {
      setActiveMenuItem('More');
    }
  }, [pathname]);

  const menuItems = [
    { name: "Home", href: "/", active: activeMenuItem === "Home" },
    { name: "Puja", href: "/puja", active: activeMenuItem === "Puja" },
    { name: "Horoscope", href: "/horoscope", active: activeMenuItem === "Horoscope" },
    { name: "Store", href: "/store", active: activeMenuItem === "Store" },
    { name: "More", href: "/about", active: activeMenuItem === "More" },
  ];

  const handleMenuItemClick = (href: string, name: string) => {
    // Update active state immediately
    setActiveMenuItem(name);
    
    if (pathname === "/" && (name === "Puja" || name === "Horoscope")) {
      const sectionId = name === "Puja" ? "puja-section" : "horoscope-section";
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }

    if (isMobileMenuOpen) {
      dispatch(setMobileMenuOpen(false));
    }
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
              {menuItems.map((item, index) => (
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
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Login Button */}
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
            {menuItems.map((item, index) => (
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
          </div>
        </nav>

        {/* Login Modal */}
        <LoginModal />
      </div>
    </header>
  );
};

export default Header;