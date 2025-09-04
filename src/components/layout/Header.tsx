
'use client';

import React, { useState, useEffect } from 'react';
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

  // State for language dropdown
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", active: pathname === "/" },
    { name: "Puja", href: "/puja", active: pathname?.startsWith("/puja") },
    { name: "Horoscope", href: "/horoscope", active: pathname?.startsWith("/horoscope") },
    { name: "Store", href: "/store", active: pathname?.startsWith("/store") },
    { name: "More", href: "/about", active: pathname?.startsWith("/about") },
  ];

  const languageOptions = [
    { name: "English", code: "en" },
    { name: "Hindi", code: "hi" },
    { name: "Spanish", code: "es" },
    { name: "Tamil", code: "ta" },
    { name: "Bengali", code: "bn" },
  ];

  const handleMenuItemClick = (href: string, name: string) => {
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
    setIsLanguageDropdownOpen(false);
  };

  // Handle language selection
  const handleLanguageChange = (code: string) => {
    // Find the Google Translate iframe or select element
    const translateFrame = document.querySelector('iframe.goog-te-banner-frame');
    if (translateFrame) {
      const innerDoc = translateFrame.contentDocument || (translateFrame.contentWindow as any).document;
      const select = innerDoc?.querySelector('select');
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } else {
      // Fallback: Reinitialize Google Translate with the selected language
      const googleTranslateElement = document.getElementById('google_translate_element');
      if (googleTranslateElement && window.google?.translate?.TranslateElement) {
        googleTranslateElement.innerHTML = ''; // Clear previous instance
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,hi,es,ta,bn', autoDisplay: true },
          'google_translate_element'
        );
      }
    }
    setIsLanguageDropdownOpen(false);
  };

  // Load Google Translate script
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,hi,es,ta,bn', autoDisplay: true },
          'google_translate_element'
        );
      }
    };

    addGoogleTranslateScript();

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <header className="w-full py-4">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center bg-gradient-to-r from-orange-200/70 to-orange-300/70 rounded-full px-4 py-2 shadow-md">
            <div className="flex items-center">
              <Image
                src="/images/img_group_133643.svg"
                alt="Logo Text"
                width={100}
                height={18}
                className="w-24 h-4"
              />
            </div>
            {/* Language Dropdown */}
            <div
              className="relative ml-4"
              onMouseEnter={() => setIsLanguageDropdownOpen(true)}
              onMouseLeave={() => setIsLanguageDropdownOpen(false)}
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-orange-200/70 to-orange-300/70 rounded-full px-3 py-1 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/language_icon.svg"
                  alt="Language Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium uppercase font-['Work_Sans'] text-white">Language</span>
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute top-10 left-0 w-40 bg-gradient-to-r from-orange-200/80 to-orange-300/80 backdrop-blur-sm rounded-xl shadow-md z-10 animate-fadeIn">
                  {languageOptions.map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm font-medium uppercase font-['Work_Sans'] text-white hover:bg-orange-300/50 transition-all duration-300"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-gradient-to-r from-orange-200/60 to-orange-300/60 backdrop-blur-sm rounded-full px-6 py-2 shadow-md">
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
                          ? "text-white bg-orange-300/70 shadow-lg scale-105"
                          : "text-white hover:bg-orange-300/40 hover:scale-102"
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
            {/* Search Button */}
            <button className="p-2 rounded-full bg-gradient-to-r from-orange-200/70 to-orange-300/70 backdrop-blur-sm hover:bg-orange-300/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/images/img_group_8.svg"
                alt="Search"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>

            {/* Login Button */}
            <button
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-200/70 to-orange-300/70 text-white font-medium px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-['Work_Sans'] uppercase text-sm hover:from-orange-300 hover:to-orange-400"
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
              className="lg:hidden p-2 rounded-full bg-gradient-to-r from-orange-200/70 to-orange-300/70 backdrop-blur-sm text-white hover:bg-orange-300/50 transition-all duration-300 hover:scale-105"
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
          className={`${
            isMobileMenuOpen ? "block animate-fadeIn" : "hidden"
          } lg:hidden bg-gradient-to-r from-orange-200/60 to-orange-300/60 backdrop-blur-sm rounded-xl mt-4 p-4 shadow-md`}
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
                        ? "text-white bg-orange-300/70 scale-102 shadow-md"
                        : "text-white hover:bg-orange-300/40 hover:scale-102"
                    }
                  `}
                >
                  {item.name}
                </button>
              </div>
            ))}
            {/* Language Dropdown in Mobile */}
            <div className="relative w-full h-10 flex items-center">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="w-full h-full rounded-xl text-sm font-medium text-left uppercase font-['Work_Sans'] text-white hover:bg-orange-300/40 transition-all duration-300 flex items-center px-4"
              >
                Language
              </button>
              {isLanguageDropdownOpen && (
                <div className="flex flex-col mt-2 ml-4">
                  {languageOptions.map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full text-left px-4 py-2 text-sm font-medium uppercase font-['Work_Sans'] text-white hover:bg-orange-300/50 transition-all duration-300"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-200/70 to-orange-300/70 text-white font-medium px-4 py-2 rounded-full mt-2 font-['Work_Sans'] uppercase text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-orange-300 hover:to-orange-400"
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

        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>

        {/* Login Modal */}
        <LoginModal />
      </div>
    </header>
  );
};

export default Header;
