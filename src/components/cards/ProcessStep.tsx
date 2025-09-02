'use client';
import React from 'react';
import Image from 'next/image';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  location: string;
  datetime: string;
  isHighlighted?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  stepNumber, 
  title, 
  location, 
  datetime, 
  isHighlighted = false 
}) => (
  <div className={`flex gap-[21px] sm:gap-[25px] md:gap-[28px] justify-start items-center w-full border rounded-[30px] px-[22px] sm:px-[26px] md:px-[30px] py-[22px] sm:py-[26px] md:py-[30px] ${
    isHighlighted 
      ? 'border-[#fbd0bc] bg-[linear-gradient(90deg,#f4aa36_0%,_#f37335_100%)]' 
      : 'border-[#f37335] bg-[#fff3ee]'
  }`}>
    <div className={`flex flex-col gap-[2px] sm:gap-[3px] md:gap-[4px] justify-center items-center w-[75px] sm:w-[113px] md:w-[150px] rounded-[20px] px-[22px] sm:px-[26px] md:px-[30px] py-[22px] sm:py-[26px] md:py-[30px] ${
      isHighlighted 
        ? 'bg-white' :'bg-[linear-gradient(90deg,#f4aa36_0%,_#f37335_100%)]'
    }`}>
      <span className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[41px] sm:leading-[48px] md:leading-[54px] text-center text-black font-['Philosopher']">
        <span>{stepNumber.charAt(0)}</span>
        <span className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[54px] sm:leading-[63px] md:leading-[72px] text-center text-black font-['Philosopher']">
          {stepNumber.slice(1)}
        </span>
      </span>
      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-[14px] sm:leading-[15px] md:leading-[17px] text-center uppercase text-black font-['Work_Sans']">
        Step
      </span>
    </div>
    <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px] justify-start items-start w-full">
      <h3 className={`text-[26px] sm:text-[30px] md:text-[34px] font-bold leading-[30px] sm:leading-[35px] md:leading-[39px] text-left font-['Philosopher'] ${
        isHighlighted ? 'text-[#111111]' : 'text-[#111111]'
      }`}>
        {title}
      </h3>
      <div className="flex justify-start items-center w-full">
        <Image
          src="/images/img_vector_16x14.png"
          alt="Location"
          width={14}
          height={16}
          className="w-[11px] h-[13px] sm:w-[13px] sm:h-[15px] md:w-[14px] md:h-[16px]"
        />
        <span className={`text-[13px] sm:text-[15px] md:text-[16px] font-normal leading-[15px] sm:leading-[17px] md:leading-[19px] text-left font-['Work_Sans'] ml-[10px] sm:ml-[12px] md:ml-[14px] ${
          isHighlighted ? 'text-[#111111]' : 'text-[#333333]'
        }`}>
          {location}
        </span>
      </div>
      <div className="flex justify-start items-start w-full">
        <Image
          src="/images/img_group_131038.png"
          alt="DateTime"
          width={20}
          height={16}
          className="w-[16px] h-[13px] sm:w-[18px] sm:h-[15px] md:w-[20px] md:h-[16px]"
        />
        <span className={`text-[13px] sm:text-[15px] md:text-[16px] font-normal leading-[15px] sm:leading-[17px] md:leading-[19px] text-left font-['Work_Sans'] self-center ml-[8px] sm:ml-[9px] md:ml-[10px] ${
          isHighlighted ? 'text-[#111111]' : 'text-[#333333]'
        }`}>
          {datetime}
        </span>
      </div>
    </div>
  </div>
);

export default ProcessStep;