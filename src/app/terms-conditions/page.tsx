'use client';

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const TermsConditionsPage: React.FC = () => {
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
                      Terms & Conditions
                    </h1>
                    <Image
                      src="/images/img_vector_smart_object.png"
                      alt="Decorative Line"
                      width={240}
                      height={14}
                      className="w-[180px] h-[11px] sm:w-[210px] sm:h-[12px] md:w-[240px] md:h-[14px] mt-[16px] sm:mt-[19px] md:mt-[21px]"
                    />
                    <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal leading-[18px] sm:leading-[21px] md:leading-[24px] text-center text-[#6d6d6d] font-['Lato'] w-auto mt-[16px] sm:mt-[19px] md:mt-[21px]">
                      Terms governing your use of Global Puja services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="w-full py-[40px] sm:py-[50px] md:py-[60px] px-[20px] sm:px-[40px] md:px-[60px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-8 text-left">
            
            {/* Introduction */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Introduction
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                These Terms of Usage govern your use of the content and services offered by Global Puja Services Pvt. Ltd. through our website and the Global Puja mobile application (collectively referred to as "Global Puja," "we," "us," or "our").
              </p>
            </div>

            {/* Update of Terms */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Updates to Terms
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                We may update or modify these Terms from time to time. It is your responsibility to review them periodically. Continued use of our platform implies your acceptance of the updated terms.
              </p>
            </div>

            {/* User Consent */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                User Consent
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                By accessing or using Global Puja, you ("User," "Member") agree to these Terms unconditionally. If you do not agree, please do not use the platform. Your continued usage signifies legal acceptance of these terms.
              </p>
            </div>

            {/* General Description */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                General Description
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                Global Puja offers spiritual content, astrological consultations, puja bookings, religious ceremonies, and spiritual products via web, app, and other electronic media. Services include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                <li><strong>Free Services:</strong> Accessible without registration</li>
                <li><strong>Paid Services:</strong> Require registration and accurate personal information</li>
              </ul>
            </div>

            {/* Registration & Eligibility */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Registration & Eligibility
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                <li>You must be legally capable of entering contracts under applicable law</li>
                <li>Minors under 18 must use the platform only under legal guardian supervision</li>
                <li>You agree to provide accurate, current, and complete registration data</li>
                <li>Multiple accounts using different contact numbers are prohibited</li>
                <li>Global Puja reserves the right to suspend or terminate accounts with false or incomplete data</li>
              </ul>
            </div>

            {/* Account Security */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Account Security
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                You are responsible for maintaining the confidentiality of your login credentials. Global Puja is not liable for any loss due to unauthorized access. Notify us immediately of any breach or misuse of your account.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Third-Party Services
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                Some services may be provided by third-party providers. Global Puja is not responsible for third-party content or outcomes. Personal data shared with third-party providers is at your own risk.
              </p>
            </div>

            {/* Payment & Data Risks */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Payment & Data Risks
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                Online payments may be vulnerable to misuse or fraud. Global Puja and its payment partners are not liable for such risks. Users are advised to exercise caution during transactions.
              </p>
            </div>

            {/* Service Restrictions */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Service Restrictions
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                You may not use Global Puja if:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                <li>You reside in a jurisdiction that prohibits such services</li>
                <li>You are restricted by law, treaty, or religious practice</li>
                <li>You have created multiple active accounts</li>
              </ul>
            </div>

            {/* Website Content & Conduct */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Website Content & Conduct
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                All content is proprietary and must be used respectfully. You may not post unlawful, abusive, or offensive material. Global Puja reserves the right to suspend or terminate access for violations.
              </p>
            </div>

            {/* Spiritual Services Disclaimer */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Spiritual Services Disclaimer
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                Astrological and spiritual guidance is not a substitute for professional medical, legal, or financial consultation. Global Puja does not guarantee results or outcomes from services. Use of services is at your own discretion and risk.
              </p>
            </div>

            {/* Delivery, Cancellation & Refund Policy */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Delivery, Cancellation & Refund Policy
              </h2>
              
              <div className="mb-6">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                  Reports & Consultations:
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  <li>No refunds will be issued once the order reaches the "Processing" stage</li>
                  <li>Cancellation is allowed only within one hour of payment and is subject to Global Puja's discretion</li>
                  <li>No refunds for incorrect data provided by users</li>
                  <li>Requests to correct data must be made within one hour of submission</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                  Consultation Services:
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  <li>No refunds for missed consultations due to incorrect contact information, poor connectivity, or user unavailability</li>
                  <li>Technical issues will be addressed on a case-by-case basis</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                  Product Orders:
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  <li>No refunds for damaged products post-delivery</li>
                  <li>Refunds may be considered only if damage occurs during transit with proper documentation</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                  Refund Processing:
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  <li>Refunds, if approved, will be credited to the user's Global Puja wallet</li>
                  <li>Deductions may apply for payment gateway charges, shipping, customs, or processing costs</li>
                  <li>Refund requests are reviewed within 72 hours</li>
                </ul>
              </div>
            </div>

            {/* User Obligations */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                User Obligations
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                All users must comply with Global Puja's Terms and Privacy Policy. Users must not:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                <li>Post false, offensive, or abusive content</li>
                <li>Promote intolerance or discrimination</li>
                <li>Share unauthorized content or violate intellectual property rights</li>
                <li>Harvest data, spam, or upload malicious software</li>
                <li>Engage in unauthorized access or commercial resale</li>
              </ul>
            </div>

            {/* Breach & Termination */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Breach & Termination
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-4">
                Global Puja reserves the right to modify, suspend, or terminate any service or user account without prior notice. Termination may occur if:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                <li>Registration data is unverifiable, misleading, or incomplete</li>
                <li>User actions may cause legal liability to Global Puja or its partners</li>
                <li>User interferes with other users or violates Global Puja's privacy policy</li>
              </ul>
            </div>

            {/* Disclaimer & Limitation of Liability */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Disclaimer & Limitation of Liability
              </h2>
              
              <div className="mb-4">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                  Nature of Services:
                </h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  Global Puja provides spiritual guidance and religious services. Results may vary based on individual beliefs and circumstances.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                  No Warranty:
                </h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  Global Puja makes no guarantees for accuracy, reliability, or suitability of services. Everything is provided "as is" without warranties of any kind.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#111111] font-['Philosopher'] mb-3">
                  Service Provider Disclaimer:
                </h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  Spiritual advisors and service providers are independent contractors, not employees of Global Puja. Advice given is not guaranteed and outcomes may vary.
                </p>
              </div>
            </div>

            {/* Proprietary Rights */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Proprietary Rights to Content
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                All content on Global Puja is protected by intellectual property laws. Users may not reproduce or distribute content without permission. Third-party content is not claimed by Global Puja and disputes must be directed accordingly.
              </p>
            </div>

            {/* Governing Law */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Governing Law & Jurisdiction
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of competent courts. Both parties agree to attempt resolution through mediation before pursuing legal action.
              </p>
            </div>

            {/* Contact Information */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Contact Information
              </h2>
              <div className="bg-[#fff3ee] p-6 rounded-lg border border-[#f37335]/20">
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-2">
                  <strong>Company:</strong> Global Puja Services Pvt. Ltd.
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato'] mb-2">
                  <strong>Email:</strong> support@globalpuja.com
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                  Official notices must be in writing and sent via email or post. Notices are considered received 24 hours after email or 3 days after postal delivery.
                </p>
              </div>
            </div>

            {/* Final Disclaimer */}
            <div className="terms-section">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[28px] sm:leading-[32px] md:leading-[38px] text-[#111111] font-['Philosopher'] mb-4">
                Final Disclaimer
              </h2>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] font-['Lato']">
                Puja, astrology, and religious services are spiritual in nature. Global Puja and its team act as facilitators and do not guarantee specific results. Effectiveness depends on individual belief, faith, and spiritual factors. Global Puja is not liable for spiritual or material outcomes.
              </p>
            </div>

            {/* Effective Date */}
            <div className="terms-section border-t pt-6">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#666666] font-['Lato'] italic">
                These Terms and Conditions are effective as of January 2024 and represent the complete agreement between users and Global Puja Services Pvt. Ltd.
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

export default TermsConditionsPage;