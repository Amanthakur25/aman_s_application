'use client';
import React from 'react';
import Image from 'next/image';

const VideoSection: React.FC = () => (
  <section className="w-full flex justify-center items-center px-[22px] sm:px-[26px] md:px-[30px]">
    <div className="flex justify-start items-center w-full border border-[#5c4228] rounded-[30px] bg-[#f37335] px-[42px] sm:px-[49px] md:px-[56px] py-[202px] sm:py-[235px] md:py-[268px] mt-[66px] sm:mt-[77px] md:mt-[88px]">
      <div className="flex flex-col justify-start items-center w-auto shadow-[0px_4px_6px_#888888ff]">
        <div className="flex justify-center items-center w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] border border-[#fbd0bc] rounded-[80px] bg-[#d84f0d] px-[38px] sm:px-[44px] md:px-[50px] py-[38px] sm:py-[44px] md:py-[50px]">
          <div className="flex gap-[9px] sm:gap-[11px] md:gap-[12px] justify-center items-center w-auto px-[15px] sm:px-[18px] md:px-[20px] py-[15px] sm:py-[18px] md:py-[20px]">
            <Image
              src="/images/img_vector.svg"
              alt="Play Icon"
              width={14}
              height={14}
              className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] md:w-[14px] md:h-[14px]"
            />
            <span className="text-[11px] sm:text-[13px] md:text-[14px] font-semibold leading-[13px] sm:leading-[15px] md:leading-[17px] text-center uppercase text-white font-['Work_Sans'] w-auto">
              Play 
            </span>
            <Image
              src="/images/img_vector.svg"
              alt="Play Arrow"
              width={14}
              height={14}
              className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] md:w-[14px] md:h-[14px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;