'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';

const HeroSection: React.FC = () => (
  <section className="w-full min-h-screen bg-gradient-to-r from-orange-100/20 to-orange-200/40 relative overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
      style={{ backgroundImage: "url('/images/img_image.png')" }}
    />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-['Philosopher'] mb-6">
              Unlock the Power of Your Stars, Illuminate Your Path.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 font-['Lato'] mb-8 max-w-xl">
              Cras sed rhoncus risus, non accumsan tortor. Maecenas feugiat ipsum eu ornare uam. Fusce blandit elementum auctor. Nam pulvinar lectus in efficitur phareta.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-200 font-['Work_Sans'] uppercase text-sm">
              <Image
                src="/images/img_vector.svg"
                alt="Book Icon"
                width={14}
                height={14}
                className="w-4 h-4"
              />
              Book Now
              <Image
                src="/images/img_vector.svg"
                alt="Arrow"
                width={14}
                height={14}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;