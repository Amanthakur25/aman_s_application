'use client';
import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  avatar: string;
  name: string;
  role: string;
  rating: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  avatar, 
  name, 
  role, 
  rating, 
  testimonial 
}) => (
  <div className="flex flex-col gap-[22px] sm:gap-[26px] md:gap-[30px] justify-start items-start w-full max-w-[460px] border border-[#f37335] rounded-[30px] bg-[#fff3ee] px-[22px] sm:px-[26px] md:px-[30px] py-[28px] sm:py-[32px] md:py-[38px]">
    <div className="flex gap-[10px] sm:gap-[12px] md:gap-[14px] justify-start items-center w-full">
      <Image
        src={avatar}
        alt={name}
        width={86}
        height={86}
        className="w-[65px] h-[65px] sm:w-[76px] sm:h-[76px] md:w-[86px] md:h-[86px] rounded-[42px]"
      />
      <div className="flex flex-col justify-start items-start self-end w-full mb-[10px] sm:mb-[12px] md:mb-[14px]">
        <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-bold leading-[20px] sm:leading-[24px] md:leading-[27px] text-left text-[#111111] font-['Philosopher']">
          {name}
        </h3>
        <p className="text-[13px] sm:text-[15px] md:text-[16px] font-normal leading-[15px] sm:leading-[17px] md:leading-[19px] text-left text-[#333333] font-['Work_Sans']">
          {role}
        </p>
      </div>
      <Image
        src="/images/img_.svg"
        alt="Quote"
        width={92}
        height={78}
        className="w-[69px] h-[59px] sm:w-[81px] sm:h-[69px] md:w-[92px] md:h-[78px]"
      />
    </div>
    <div className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] justify-start items-center w-full">
      <Image
        src="/images/img_group_131069.png"
        alt="Rating Start"
        width={22}
        height={8}
        className="w-[17px] h-[6px] sm:w-[20px] sm:h-[7px] md:w-[22px] md:h-[8px]"
      />
      <div className="w-full h-[1px] sm:h-[1.5px] md:h-[2px] bg-[#f37335] self-end shadow-[0px_4px_4px_#888888ff]"></div>
      <Image
        src="/images/img_group_131070.png"
        alt="Rating End"
        width={22}
        height={8}
        className="w-[17px] h-[6px] sm:w-[20px] sm:h-[7px] md:w-[22px] md:h-[8px]"
      />
    </div>
    <Image
      src={rating}
      alt="Rating Stars"
      width={98}
      height={12}
      className="w-[74px] h-[9px] sm:w-[86px] sm:h-[11px] md:w-[98px] md:h-[12px]"
    />
    <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#333333] font-['Lato'] w-full mb-[30px] sm:mb-[35px] md:mb-[40px]">
      {testimonial}
    </p>
  </div>
);

export default TestimonialCard;