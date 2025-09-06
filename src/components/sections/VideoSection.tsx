'use client';

import React, { useState } from 'react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="w-full flex justify-center items-center px-[22px] sm:px-[26px] md:px-[30px]">
      <div className="relative w-full border border-[#5c4228] rounded-[30px] bg-[#f37335] px-[42px] sm:px-[49px] md:px-[56px] py-[20px] sm:py-[24px] md:py-[28px] mt-[66px] sm:mt-[77px] md:mt-[88px]">
        <div className="relative w-full h-0 pb-[56.25%] shadow-[0px_4px_6px_#888888ff]">
          <iframe
            src="https://www.youtube.com/embed/xB00QteaAsM?si=W3PYby2b4Q4gUDKC&autoplay=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-[30px]"
          ></iframe>
          {!isPlaying && (
            <div className="absolute inset-0 flex justify-center items-center">
              <button
                onClick={handlePlayClick}
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] bg-[#d84f0d] rounded-full flex justify-center items-center border-4 border-[#fbd0bc] hover:bg-[#e65c1a] transition-colors duration-300"
              >
                <svg
                  className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;