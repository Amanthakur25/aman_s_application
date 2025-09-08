'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const PrivacyPolicyPage: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-start items-center w-full bg-white overflow-x-hidden">
      {/* Header with background */}
      <section 
        className="w-full py-[53px] sm:py-[62px] md:py-[70px] px-[42px] sm:px-[49px] md:px-[56px]"
        style={{
          backgroundImage: "url('/images/img__4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-start items-center w-full lg:w-3/4 mb-[14px] sm:mb-[16px] md:mb-[18px]">
              <div className="flex flex-col justify-start items-center w-full mr-[62px] sm:mr-[72px] md:mr-[82px] ml-[62px] sm:ml-[72px] md:ml-[82px]">
                <div className="flex justify-center items-start w-full px-[6px] sm:px-[7px] md:px-[8px]">
                  <div className="flex flex-col justify-start items-center w-full mt-[6px] sm:mt-[7px] md:mt-[8px]">
                    <h1 className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[41px] sm:leading-[48px] md:leading-[54px] text-center text-[#111111] font-['Philosopher'] w-auto">
                      Privacy Policy
                    </h1>
                    <Image
                      src="/images/img_vector_smart_object.png"
                      alt="Decorative Line"
                      width={240}
                      height={14}
                      className="w-[180px] h-[11px] sm:w-[210px] sm:h-[12px] md:w-[240px] md:h-[14px] mt-[16px] sm:mt-[19px] md:mt-[21px]"
                    />
                    <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-center text-[#6d6d6d] font-['Lato'] w-auto mt-[16px] sm:mt-[19px] md:mt-[21px]">
                      Protecting your privacy and ensuring data security
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full py-[40px] sm:py-[50px] md:py-[60px] px-[20px] sm:px-[40px] md:px-[60px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-8 text-left">
            
            {/* Introduction */}
            <div className="privacy-section">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-6">
                <strong>Global Puja</strong> ("A product of Global Puja Services Pvt. Ltd.") is committed to protecting the privacy of users of our website and mobile application (including astrologers and customers whether registered or not registered). Please read this privacy policy carefully to understand how we collect, use, and protect your information.
              </p>
            </div>

            {/* User's Consent */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                USER'S CONSENT
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                This Privacy Policy, which may be updated from time to time, deals with the information collected from users including personal identification, contact details, birth details, and any spiritual guidance provided using the supplied information. By accessing and using our platform, you indicate that you understand and expressly consent to our privacy policy.
              </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                Your continued use of our services confirms your unconditional consent to the collection, maintenance, use, processing, and disclosure of your personal information in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Information Collected */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                INFORMATION COLLECTED BY GLOBAL PUJA
              </h2>
              
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                PERSONAL IDENTIFIABLE INFORMATION:
              </h3>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                Personal information is collected when it identifies a specific user. Such information is collected during the following activities:
              </p>

              <div className="ml-4 mb-6">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[22px] sm:leading-[24px] md:leading-[26px] text-[#111111] font-['Philosopher'] mb-3">
                  Creating an Account / Registration:
                </h4>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-3">
                  When creating an account, we may collect: Full name, Address, Phone Number, Email address, Date of Birth, Gender, Location, Profile Picture, and other information required for personalized puja and astrology services.
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  Your email address or phone number with password/OTP is used to secure your profile and provide personalized spiritual services. Without registration, we may not be able to provide our complete range of services.
                </p>
              </div>

              <div className="ml-4 mb-6">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[22px] sm:leading-[24px] md:leading-[26px] text-[#111111] font-['Philosopher'] mb-3">
                  Booking Paid Services:
                </h4>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  When booking puja services, we collect personal information, financial details including payment information through secure third-party gateways, IP addresses, and other booking-related information. This information is kept highly confidential.
                </p>
              </div>

              <div className="ml-4 mb-6">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold leading-[22px] sm:leading-[24px] md:leading-[26px] text-[#111111] font-['Philosopher'] mb-3">
                  Cookies and Log Files:
                </h4>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  We collect information stored by your browser including session data, visit times, page views, and preferences. Cookies help us personalize your experience and display relevant content. You may choose to block cookies, though this may limit certain features.
                </p>
              </div>
            </div>

            {/* Security Measures */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                SECURITY MEASURES
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                The security of your personal information is very important to us. We implement various physical and electronic security measures to protect against unauthorized access. Personal information is collected on secured servers, and payment details are processed through encrypted SSL connections.
              </p>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                However, no data transmission can be guaranteed completely secure. We advise users to take precautions with their login credentials and personal information.
              </p>
            </div>

            {/* Usage of Information */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                USAGE OF INFORMATION
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                Information collected may be used for purposes including but not limited to:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                <li>Providing personalized puja and astrology services</li>
                <li>Improving our platform and user experience</li>
                <li>Processing payments and managing bookings</li>
                <li>Sending service updates and promotional content</li>
                <li>Analyzing usage patterns to enhance our offerings</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                INFORMATION SHARING
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                We do not share your personal information except in the following circumstances:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                <li>When required by law or legal proceedings</li>
                <li>To protect the rights and safety of users and the public</li>
                <li>With trusted third-party service providers under strict confidentiality agreements</li>
                <li>In case of business transfers, with proper notice to users</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                CHILDREN'S PRIVACY POLICY
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                Our platform is intended for users who are 18 years of age or older. We do not intentionally collect personal information from individuals under 18. If you are under 18, please refrain from using our services. If we become aware of information from a child under 18, we will take immediate steps to remove such data.
              </p>
            </div>

            {/* Data Retention */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                DATA RETENTION
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your personal information, subject to certain legal and business requirements.
              </p>
            </div>

            {/* Contact Information */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                GRIEVANCE OFFICER
              </h2>
              <div className="bg-[#fff3ee] p-6 rounded-lg border border-[#f37335]/20">
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-2">
                  <strong>Grievance Officer Name:</strong> Privacy Officer
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  <strong>Email:</strong> privacy@globalpuja.com
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mt-4">
                  This officer is appointed in accordance with applicable privacy laws and can be contacted for any discrepancies, policy violations, or privacy concerns.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="privacy-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                POLICY UPDATES
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Effective Date */}
            <div className="privacy-section border-t pt-6">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#666666] font-['Lato'] italic">
                This Privacy Policy is effective as of January 2024 and is published in accordance with applicable privacy and data protection laws.
              </p>
            </div>

            {/* Back to Home Button */}
            <div className="flex justify-center mt-8">
              <Button
                variant="primary"
                size="md"
                className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[14px] sm:leading-[15px] md:leading-[17px] text-center capitalize text-white bg-[linear-gradient(0deg,#f4aa36_0%,_#f37335_100%)] rounded-[22px] px-[25px] sm:px-[30px] md:px-[34px] py-[9px] sm:py-[11px] md:py-[12px] font-['Lato']"
                onClick={handleBackToHome}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;