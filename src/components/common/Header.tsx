"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoginModal from "./LoginModal";
import { useRouter, usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/", active: pathname === "/" },
    { name: "Pages", href: "/pages", active: pathname?.startsWith("/pages") },
    { name: "Horoscope", href: "/horoscope", active: pathname?.startsWith("/horoscope") },
    { name: "Shop", href: "/shop", active: pathname?.startsWith("/shop") },
    { name: "News", href: "/news", active: pathname?.startsWith("/news") },
    { name: "Admin", href: "/admin", active: pathname?.startsWith("/admin") },
  ];

  return (
    <header className="w-full py-4">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center bg-gradient-to-r from-orange-200/70 to-orange-300/70 rounded-full px-4 py-2 shadow-md">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-gradient-to-r from-orange-200/60 to-orange-300/60 backdrop-blur-sm rounded-full px-6 py-2 shadow-md">
            <div className="flex items-center gap-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative w-20 h-8 flex items-center justify-center"
                >
                  <button
                    onClick={() => router.push(item.href)}
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
              onClick={() => setIsLoginOpen(true)}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            isMenuOpen ? "block animate-fadeIn" : "hidden"
          } lg:hidden bg-gradient-to-r from-orange-200/60 to-orange-300/60 backdrop-blur-sm rounded-xl mt-4 p-4 shadow-md`}
        >
          <div className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative w-full h-10 flex items-center">
                <button
                  onClick={() => router.push(item.href)}
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

            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-200/70 to-orange-300/70 text-white font-medium px-4 py-2 rounded-full mt-2 font-['Work_Sans'] uppercase text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-orange-300 hover:to-orange-400"
              onClick={() => setIsLoginOpen(true)}
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
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
