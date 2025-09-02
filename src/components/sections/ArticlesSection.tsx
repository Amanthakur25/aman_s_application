'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ArticleCard from '@/components/cards/ArticleCard';

interface ArticleCardProps {
  image: string;
  date: string;
  author: string;
  comments: string;
  title: string;
  excerpt: string;
}

interface ArticlesSectionProps {
  articles: ArticleCardProps[];
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ articles }) => (
  <section 
    className="w-full py-[53px] sm:py-[62px] md:py-[70px] px-[42px] sm:px-[49px] md:px-[56px]"
    style={{
      backgroundImage: "url('/images/img__5.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col justify-start items-center w-full lg:w-5/6 mb-[6px] sm:mb-[7px] md:mb-[8px]">
          <div className="flex flex-col gap-[1px] sm:gap-[1.5px] md:gap-[2px] justify-start items-center w-full mr-[152px] sm:mr-[177px] md:mr-[202px] ml-[152px] sm:ml-[177px] md:ml-[202px]">
            <div className="flex justify-center items-start w-full px-[42px] sm:px-[49px] md:px-[56px]">
              <h2 className="text-[27px] sm:text-[32px] md:text-[36px] font-bold leading-[31px] sm:leading-[36px] md:leading-[41px] text-center capitalize text-[#111111] font-['Philosopher'] mb-[12px] sm:mb-[14px] md:mb-[16px]">
                Latest Articles
              </h2>
            </div>
            <div className="flex justify-center items-center w-auto">
              <Image
                src="/images/img_vector_smart_object.png"
                alt="Decorative Line"
                width={240}
                height={14}
                className="w-[180px] h-[11px] sm:w-[210px] sm:h-[13px] md:w-[240px] md:h-[14px] self-end"
              />
            </div>
            <div className="flex justify-center items-end w-full px-[8px] sm:px-[9px] md:px-[10px] py-[8px] sm:py-[9px] md:py-[10px]">
              <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-[#6d6d6d] font-['Lato'] w-full sm:w-4/5 md:w-[54%] mt-[8px] sm:mt-[9px] md:mt-[10px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum .
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full mt-[11px] sm:mt-[13px] md:mt-[14px]">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
          <div className="flex justify-center items-center w-full px-[42px] sm:px-[49px] md:px-[56px] mr-[152px] sm:mr-[177px] md:mr-[202px] ml-[152px] sm:ml-[177px] md:ml-[202px]">
            <Button
              variant="primary"
              size="md"
              className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center capitalize text-white bg-[linear-gradient(0deg,#f4aa36_0%,_#f37335_100%)] rounded-[22px] px-[25px] sm:px-[30px] md:px-[34px] py-[9px] sm:py-[11px] md:py-[12px] font-['Lato'] mt-[45px] sm:mt-[53px] md:mt-[60px]"
            >
              view more
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ArticlesSection;