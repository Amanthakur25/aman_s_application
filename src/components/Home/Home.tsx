'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
interface PujaCardProps {
  image: string;
  title: string;
  temple: string;
  description: string;
  date: string;
  isNew?: boolean;
  shareLabel?: string;
}
interface HoroscopeCardProps {
  icon: string;
  name: string;
  dateRange: string;
}
interface ProcessStepProps {
  stepNumber: string;
  title: string;
  location: string;
  datetime: string;
  isHighlighted?: boolean;
}
interface TestimonialProps {
  avatar: string;
  name: string;
  role: string;
  rating: string;
  testimonial: string;
}
interface ArticleCardProps {
  image: string;
  date: string;
  author: string;
  comments: string;
  title: string;
  excerpt: string;
}
const PujaCard: React.FC<PujaCardProps> = ({ 
  image, 
  title, 
  temple, 
  description, 
  date, 
  isNew = false,
  shareLabel 
}) => (
  <div className="flex flex-col justify-start items-center w-full max-w-[420px] border border-[#e7e7e7] rounded-[6px] bg-white">
    <div className="relative w-full">
      <div className="relative w-full h-[133px] sm:h-[160px] md:h-[204px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-[6px]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {isNew && (
          <div className="absolute top-[11px] sm:top-[16px] md:top-[22px] left-[11px] sm:left-[16px] md:top-[22px]">
            <span className="text-sm sm:text-base md:text-[16px] font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] text-center capitalize text-white bg-[#f37335] rounded-[4px] px-[10px] sm:px-[12px] md:px-[14px] py-[1px] sm:py-[1.5px] md:py-[2px] font-['Lato']">
              new
            </span>
          </div>
        )}
        {shareLabel && (
          <div className="absolute bottom-[11px] sm:bottom-[16px] md:bottom-[22px] right-[11px] sm:right-[16px] md:right-[22px]">
            <span className="text-[10px] sm:text-[11px] md:text-[12px] font-normal leading-[12px] sm:leading-[13px] md:leading-[15px] text-left text-white bg-[#38d059] rounded-[4px_0px_4px_0px] px-[12px] sm:px-[14px] md:px-[16px] py-[1px] sm:py-[1.5px] md:py-[2px] font-['Lato']">
              {shareLabel}
            </span>
          </div>
        )}
      </div>
    </div>
    <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[6px] justify-start items-start w-full px-[10px] sm:px-[12px] md:px-[14px] py-[8px] sm:py-[9px] md:py-[10px]">
      <div className="flex justify-start items-center w-full">
        <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-bold leading-[20px] sm:leading-[24px] md:leading-[27px] text-left text-[#111111] font-['Philosopher'] mt-[2px] sm:mt-[3px] md:mt-[4px]">
          {title}
        </h3>
      </div>
      <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-left text-[#111111] font-['Lato']">
        {temple}
      </p>
      <div className="flex justify-start items-center w-full bg-[#fff3ee] px-[6px] sm:px-[7px] md:px-[8px] mb-[10px] sm:mb-[12px] md:mb-[14px]">
        <p className="text-[10px] sm:text-[11px] md:text-[12px] font-normal leading-[14px] sm:leading-[16px] md:leading-[18px] text-center text-[#111111] font-['Lato'] w-full py-1">
          <span>{description.split('. ')[0]}. </span>
          <span>{description.split('. ')[1]}. </span>
        </p>
      </div>
    </div>
    <div className="flex justify-between items-center w-full px-[10px] sm:px-[12px] md:px-[14px] py-[8px] sm:py-[9px] md:py-[10px] border-b border-[#33333319]">
      <span className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-left text-[#111111] font-['Lato'] self-end mb-[3px] sm:mb-[4px] md:mb-[6px]">
        {date}
      </span>
      <Button
        variant="primary"
        size="sm"
        className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center capitalize text-white bg-[linear-gradient(0deg,#f4aa36_0%,_#f37335_100%)] rounded-[18px] px-[25px] sm:px-[30px] md:px-[34px] py-[6px] sm:py-[7px] md:py-[8px] font-['Lato']"
      >
        Participate Now
      </Button>
    </div>
  </div>
);
const HoroscopeCard: React.FC<HoroscopeCardProps> = ({ icon, name, dateRange }) => (
  <div className="flex justify-start items-center w-full border border-[#e7e7e7] rounded-[10px] bg-white shadow-[-2px_0px_28px_#0000000c] px-[15px] sm:px-[18px] md:px-[20px] py-[15px] sm:px-[18px] md:py-[20px] group relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer">
    {/* Orange hover background fill - covers entire inner area */}
    <div className="absolute inset-0 w-full h-full rounded-[10px] bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 transition-all duration-300 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:scale-100" />
    
    <div className="flex flex-col gap-[10px] sm:gap-[12px] md:gap-[14px] justify-start items-center w-full relative z-10">
      <div className="flex justify-start items-center w-auto shadow-[-2px_0px_15px_#0000000f] bg-white rounded-[28px] p-[8px] sm:p-[9px] md:p-[10px] group-hover:shadow-lg transition-shadow duration-300">
        <Image
          src={icon}
          alt={name}
          width={30}
          height={34}
          className="w-[24px] h-[27px] sm:w-[27px] sm:h-[31px] md:w-[30px] md:h-[34px]"
        />
      </div>
      <div className="flex flex-col justify-start items-center w-full">
        <div className="flex justify-center items-center w-auto px-[32px] sm:px-[37px] md:px-[42px]">
          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[18px] sm:leading-[21px] md:leading-[23px] text-center text-[#111111] font-['Philosopher'] group-hover:text-white transition-colors duration-300">
            {name}
          </h3>
        </div>
        <div className="flex justify-center items-center w-full">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center text-[#797979] font-['Lato'] group-hover:text-white/90 transition-colors duration-300">
            {dateRange}
          </p>
        </div>
      </div>
    </div>
  </div>
);
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
export default function HomePage() {
  const pujaCards = [
    {
      image: "/images/img__1.png",
      title: "Das Mahavidya Mahaurja Yagya",
      temple: "Siddha Mahavidya Temple",
      description: "For Immediate Solutions to Life's Problems, Gaining Wealth and Fame. Solutions to Life's Problems, Gaining Wealth and Fame.",
      date: "Thursday, 30 Aug, 2025",
      isNew: true,
      shareLabel: "Share"
    },
    {
      image: "/images/img__2.png",
      title: "Das Mahavidya Mahaurja Yagya",
      temple: "Siddha Mahavidya Temple",
      description: "For Immediate Solutions to Life's Problems, Gaining Wealth and Fame. Solutions to Life's Problems, Gaining Wealth and Fame.",
      date: "Thursday, 30 Aug, 2025",
      isNew: true
    },
    {
      image: "/images/img__3.png",
      title: "Das Mahavidya Mahaurja Yagya",
      temple: "Siddha Mahavidya Temple",
      description: "For Immediate Solutions to Life's Problems, Gaining Wealth and Fame. Solutions to Life's Problems, Gaining Wealth and Fame.",
      date: "Thursday, 30 Aug, 2025",
      isNew: true
    }
  ];
  const horoscopeCards = [
    { icon: "/images/img_vector_black_900_01.svg", name: "Aries", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_34x36.svg", name: "Taurus", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_34x32.svg", name: "Gemini", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_36x26.svg", name: "Cancer", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_34x40.png", name: "Leo", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_34x26.svg", name: "Virgo", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_22x36.svg", name: "Libra", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_component_2.png", name: "Scorpio", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_34x30.svg", name: "Sagittairus", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_34x32.svg", name: "Capricorn", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_34x28.svg", name: "Aquarius", dateRange: "Mar 21 - Apr 19" },
    { icon: "/images/img_vector_black_900_01_26x36.svg", name: "Pisces", dateRange: "Mar 21 - Apr 19" }
  ];
  const processSteps = [
    {
      stepNumber: "1st",
      title: "Journey into the Mysteries of the Cosmos",
      location: "48 Walder Crescent, Barnard",
      datetime: "December 29 @ 10:00 am - December 29 @ 4:30 pm"
    },
    {
      stepNumber: "2nd",
      title: "Stargazing Wisdom, Tailored for You",
      location: "48 Walder Crescent, Barnard",
      datetime: "December 29 @ 10:00 am - December 29 @ 4:30 pm",
      isHighlighted: true
    },
    {
      stepNumber: "3rd",
      title: "Charting Your Cosmic Destiny with Precision",
      location: "48 Walder Crescent, Barnard",
      datetime: "December 29 @ 10:00 am - December 29 @ 4:30 pm"
    },
    {
      stepNumber: "4th",
      title: "Charting Your Cosmic Destiny with Precision",
      location: "48 Walder Crescent, Barnard",
      datetime: "December 29 @ 10:00 am - December 29 @ 4:30 pm"
    }
  ];
  const testimonials = [
    {
      avatar: "/images/img_ellipse_5.png",
      name: "Jennifer Knight",
      role: "Designer",
      rating: "/images/img_group_131050.png",
      testimonial: "Suspendisse elit eros, elementum quis massa sed, luctus pharetra risus. Morbi placerat fermentum mauris, eget egestas sem mollis ut. Proin vitae ltus at libero condimentum consectetur et anim."
    },
    {
      avatar: "/images/img_ellipse_5_86x86.png",
      name: "Meadow Morrow",
      role: "Designer",
      rating: "/images/img_group_131050.png",
      testimonial: "Suspendisse elit eros, elementum quis massa sed, luctus pharetra risus. Morbi placerat fermentum mauris, eget egestas sem mollis ut. Proin vitae ltus at libero condimentum consectetur et anim."
    },
    {
      avatar: "/images/img_ellipse_5_1.png",
      name: "Deborah Booker",
      role: "Designer",
      rating: "/images/img_group_131050.png",
      testimonial: "Suspendisse elit eros, elementum quis massa sed, luctus pharetra risus. Morbi placerat fermentum mauris, eget egestas sem mollis ut. Proin vitae ltus at libero condimentum consectetur et anim."
    }
  ];
  const articles = [
    {
      image: "/images/img_blog1_jpg.png",
      date: "July 29, 2020",
      author: "By - Admin",
      comments: "0 comments",
      title: "Consectetur adipiscing elit sedeius mod tempor incididunt ut labore.",
      excerpt: "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde doloesire esdesdeges magna aliquapspendisse and the gravida."
    },
    {
      image: "/images/img_blog1_jpg.png",
      date: "July 29, 2020",
      author: "By - Admin",
      comments: "0 comments",
      title: "Consectetur adipiscing elit sedeius mod tempor incididunt ut labore.",
      excerpt: "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde doloesire esdesdeges magna aliquapspendisse and the gravida."
    },
    {
      image: "/images/img_blog2_jpg.png",
      date: "July 29, 2020",
      author: "By - Admin",
      comments: "0 comments",
      title: "Consectetur adipiscing elit sedeius mod tempor incididunt ut labore.",
      excerpt: "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde doloesire esdesdeges magna aliquapspendisse and the gravida."
    },
    {
      image: "/images/img_blog3_jpg.png",
      date: "July 29, 2020",
      author: "By - Admin",
      comments: "0 comments",
      title: "Consectetur adipiscing elit sedeius mod tempor incididunt ut labore.",
      excerpt: "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde doloesire esdesdeges magna aliquapspendisse and the gravida."
    }
  ];
  
  return (
    <div className="flex flex-col justify-start items-center w-full bg-white overflow-x-hidden">
      {/* Hero Section - Fixed Layout */}
      <section className="w-full min-h-screen bg-gradient-to-r from-orange-100/20 to-orange-200/40 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/images/img_image.png')" }}
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col min-h-screen">
            {/* Header */}
            <div className="pt-8">
              <Header />
            </div>
            
            {/* Hero Content */}
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
      
      {/* Trust Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/img__0x0.png')" }}>
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-[38px] sm:gap-[44px] md:gap-[50px] justify-center items-center w-full">
            <Image
              src="/images/img_trust_icon_1.png"
              alt="Trust Icon"
              width={106}
              height={114}
              className="w-[80px] h-[86px] sm:w-[93px] sm:h-[100px] md:w-[106px] md:h-[114px]"
            />
            <div className="flex flex-col gap-[15px] sm:gap-[18px] md:gap-[20px] justify-start items-center w-auto px-[42px] sm:px-[49px] md:px-[56px]">
              <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[41px] sm:leading-[48px] md:leading-[54px] text-center text-black font-['Philosopher'] mt-[6px] sm:mt-[7px] md:mt-[8px]">
                Trusted by Millions of Devotees
              </h2>
              <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-center text-black font-['Lato'] w-auto">
                Enabled LIVE Pujas for 1,000,000+ Happy Devotees by partnering with 1000+ Temples and 3000+ Vedic Pandits of Bharat
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Participate in Pujas Section */}
      <section 
        className="w-full py-[53px] sm:py-[62px] md:py-[70px] px-[42px] sm:px-[49px] md:px-[56px]"
        style={{
          backgroundImage: "url('/images/img__4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-start items-center w-full lg:w-3/4 mb-[14px] sm:mb-[16px] md:mb-[18px]">
              <div className="flex flex-col justify-start items-center w-full mr-[62px] sm:mr-[72px] md:mr-[82px] ml-[62px] sm:ml-[72px] md:ml-[82px]">
                <div className="flex justify-center items-start w-full px-[6px] sm:px-[7px] md:px-[8px]">
                  <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[41px] sm:leading-[48px] md:leading-[54px] text-center text-[#111111] font-['Philosopher'] mb-[5px] sm:mb-[6px] md:mb-[6px]">
                    Participate in Pujas
                  </h2>
                </div>
                <div className="flex flex-col justify-start items-center w-full mt-[-3px] sm:mt-[-3.5px] md:mt-[-4px]">
                  <div className="flex justify-center items-center w-auto">
                    <Image
                      src="/images/img_vector_smart_object.png"
                      alt="Decorative Line"
                      width={240}
                      height={14}
                      className="w-[180px] h-[11px] sm:w-[210px] sm:h-[13px] md:w-[240px] md:h-[14px] self-end"
                    />
                  </div>
                  <div className="flex justify-center items-end w-full px-[8px] sm:px-[9px] md:px-[10px] py-[8px] sm:py-[9px] md:py-[10px] mt-[-5px] sm:mt-[-5.5px] md:mt-[-6px]">
                    <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-[#797979] font-['Lato'] w-full sm:w-4/5 md:w-[54%] mt-[8px] sm:mt-[9px] md:mt-[10px]">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum .
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-[30px] sm:gap-[35px] md:gap-[40px] w-full mt-[5px] sm:mt-[6px] md:mt-[6px]">
                {pujaCards.map((card, index) => (
                  <PujaCard key={index} {...card} />
                ))}
              </div>
              <div className="flex justify-center items-center w-full px-[42px] sm:px-[49px] md:px-[56px] mr-[62px] sm:mr-[72px] md:mr-[82px] mb-[38px] sm:mb-[44px] md:mb-[50px] ml-[62px] sm:ml-[72px] md:ml-[82px] mt-[38px] sm:mt-[44px] md:mt-[50px]">
                <Button
                  variant="primary"
                  size="md"
                  className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center capitalize text-white bg-[linear-gradient(0deg,#f4aa36_0%,_#f37335_100%)] rounded-[22px] px-[25px] sm:px-[30px] md:px-[34px] py-[9px] sm:py-[11px] md:py-[12px] font-['Lato']"
                >
                  See all pujas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Horoscope Forecasts Section */}
      <section className="w-full py-[53px] sm:py-[62px] md:py-[70px] px-[42px] sm:px-[49px] md:px-[56px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-full lg:w-2/3 px-[9px] sm:px-[11px] md:px-[12px] mb-[6px] sm:mb-[7px] md:mb-[8px]">
              <div className="flex flex-col justify-start items-center w-full mt-[6px] sm:mt-[7px] md:mt-[8px]">
                <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[41px] sm:leading-[48px] md:leading-[54px] text-center text-[#111111] font-['Philosopher'] w-auto">
                  Horoscope Forecasts
                </h2>
                <Image
                  src="/images/img_vector_smart_object.png"
                  alt="Decorative Line"
                  width={240}
                  height={14}
                  className="w-[144px] h-[8px] sm:w-[168px] sm:h-[10px] md:w-[192px] md:h-[11px] lg:w-[240px] lg:h-[14px] mt-[5px] sm:mt-[6px] md:mt-[6px]"
                />
                <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal leading-[20px] sm:leading-[23px] md:leading-[26px] text-center text-[#6d6d6d] font-['Lato'] w-auto mt-[9px] sm:mt-[11px] md:mt-[12px]">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum .
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[15px] sm:gap-[18px] md:gap-[20px] w-full mt-[50px] sm:mt-[58px] md:mt-[66px]">
                  {horoscopeCards.map((card, index) => (
                    <HoroscopeCard key={index} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Puja Process Section */}
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
      
      {/* Video Section */}
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
      
      {/* Testimonials Section */}
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
      
      {/* Latest Articles Section */}
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
      
      {/* Download App Section */}
      <section className="w-full">
        <Image
          src="/images/img_image_1.png"
          alt="Download App"
          width={1920}
          height={898}
          className="w-full h-[449px] sm:h-[674px] md:h-[898px] object-cover"
        />
      </section>
      <Footer />
    </div>
  );
}