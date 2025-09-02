'use client';
import React from 'react';
import Image from 'next/image';
import ProcessStep from '@/components/cards/ProcessStep';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  location: string;
  datetime: string;
  isHighlighted?: boolean;
}

interface ProcessSectionProps {
  processSteps: ProcessStepProps[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ processSteps }) => (
  <section 
    className="w-full py-[68px] sm:py-[79px] md:py-[90px]"
    style={{
      backgroundImage: "url('/images/img_background.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="w-full max-w-[1440px] mx-auto px-[180px] sm:px-[210px] md:px-[240px]">
      <div className="flex justify-center items-center w-full mt-[39px] sm:mt-[46px] md:mt-[52px]">
        <div className="flex flex-col justify-start items-start w-full">
          <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[41px] sm:leading-[48px] md:leading-[54px] text-left text-[#111111] font-['Philosopher'] w-auto">
            Our Puja Process
          </h2>
          <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-left text-[#6d6d6d] font-['Lato'] w-auto">
            Morbi aliquet risus sem, vel varius purus consectetur ac. Ut placerat massa.
          </p>
          <div className="flex flex-col justify-start items-center w-full mt-[47px] sm:mt-[55px] md:mt-[62px]">
            <div className="flex flex-col w-full gap-[22px] sm:gap-[26px] md:gap-[30px]">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <ProcessStep {...step} />
                  {index === 1 && (
                    <div className="absolute right-[33px] sm:right-[39px] md:right-[44px] top-0 bottom-0">
                      <Image
                        src="/images/img_image_408x564.png"
                        alt="Process Illustration"
                        width={564}
                        height={408}
                        className="w-[338px] h-[245px] sm:w-[395px] sm:h-[286px] md:w-[451px] md:h-[326px] lg:w-[564px] lg:h-[408px] rounded-[20px]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;