'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface ArticleCardProps {
  image: string;
  date: string;
  author: string;
  comments: string;
  title: string;
  excerpt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  image, 
  date, 
  author, 
  comments, 
  title, 
  excerpt 
}) => (
  <div className="flex flex-col justify-center items-center w-full max-w-[394px] px-[9px] sm:px-[11px] md:px-[12px] py-[20px] sm:py-[23px] md:py-[26px]">
    <div className="flex flex-col gap-[8px] sm:gap-[9px] md:gap-[10px] justify-start items-center w-full shadow-[-2px_0px_28px_#0000000c] border border-[#e7e7e7] rounded-[10px] bg-white">
      <div className="flex flex-col justify-start items-end w-full">
        <Image
          src={image}
          alt={title}
          width={370}
          height={266}
          className="w-full h-[200px] sm:h-[233px] md:h-[266px] object-cover rounded-t-[10px]"
        />
        <Button
          variant="primary"
          size="sm"
          className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center capitalize text-white bg-[linear-gradient(0deg,#f4aa36_0%,_#f37335_100%)] rounded-[22px] px-[25px] sm:px-[30px] md:px-[34px] py-[9px] sm:py-[11px] md:py-[12px] font-['Lato'] mt-[-15px] sm:mt-[-18px] md:mt-[-20px] mr-[25px] sm:mr-[30px] md:mr-[34px]"
        >
          {date}
        </Button>
      </div>
      <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] justify-start items-center w-full px-[15px] sm:px-[18px] md:px-[20px]">
        <div className="flex justify-center items-center w-full px-[28px] sm:px-[33px] md:px-[38px]">
          <div className="flex justify-center items-center w-auto">
            <Image
              src="/images/img_component_2_white_a700.png"
              alt="Author Icon"
              width={12}
              height={14}
              className="w-[9px] h-[11px] sm:w-[11px] sm:h-[13px] md:w-[12px] md:h-[14px] self-end"
            />
            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center text-[#797979] font-['Lato'] ml-[8px] sm:ml-[9px] md:ml-[10px]">
              {author}
            </span>
          </div>
          <div className="flex gap-[8px] sm:gap-[9px] md:gap-[10px] justify-center items-center w-full">
            <Image
              src="/images/img_component_2_white_a700_14x16.png"
              alt="Comments Icon"
              width={16}
              height={14}
              className="w-[12px] h-[11px] sm:w-[14px] sm:h-[13px] md:w-[16px] md:h-[14px] self-end"
            />
            <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center text-[#797979] font-['Lato']">
              {comments}
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center w-full px-[9px] sm:px-[11px] md:px-[12px]">
          <h3 className="text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[21px] sm:leading-[25px] md:leading-[28px] text-center capitalize text-[#111111] font-['Philosopher'] w-full">
            {title}
          </h3>
        </div>
        <p className="text-[13px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-[#797979] font-['Lato'] w-auto mb-[15px] sm:mb-[18px] md:mb-[20px]">
          {excerpt}
        </p>
      </div>
    </div>
  </div>
);

export default ArticleCard;