'use client';
import React from 'react';
import Image from 'next/image';
import TestimonialCard from '@/components/cards/TestimonialCard';

interface TestimonialProps {
  avatar: string;
  name: string;
  role: string;
  rating: string;
  testimonial: string;
}

interface TestimonialsSectionProps {
  testimonials: TestimonialProps[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => (
  <section 
    className="w-full py-[105px] sm:py-[123px] md:py-[140px] mt-[8px] sm:mt-[9px] md:mt-[10px]"
    style={{
      backgroundImage: "url('/images/img_background_deep_orange_800.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="w-full max-w-[1440px] mx-auto px-[180px] sm:px-[210px] md:px-[240px]">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col justify-start items-start w-full">
          <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[41px] sm:leading-[48px] md:leading-[54px] text-left text-[#111111] font-['Philosopher'] w-auto">
            Testimonials from Devotees
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[16px] font-normal leading-[15px] sm:leading-[17px] md:leading-[19px] text-left text-[#6d6d6d] font-['Work_Sans'] w-auto mt-[5px] sm:mt-[6px] md:mt-[6px]">
            Suspendisse metus nisl, lacinia et fermentum oreet non sem.
          </p>
          <div className="flex flex-col lg:flex-row gap-[22px] sm:gap-[26px] md:gap-[30px] w-full mt-[45px] sm:mt-[53px] md:mt-[60px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <Image
            src="/images/img_caurosel.png"
            alt="Carousel Indicator"
            width={158}
            height={22}
            className="w-[119px] h-[17px] sm:w-[139px] sm:h-[20px] md:w-[158px] md:h-[22px] self-center mt-[45px] sm:mt-[53px] md:mt-[60px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;