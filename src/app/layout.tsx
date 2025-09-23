import React from 'react';
import type { Metadata, Viewport } from 'next';
import ReduxProvider from '@/providers/ReduxProvider';
import '@/styles/globals.css';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: '33KotiDham - पूजा एवं ज्योतिष सेवाएं',
  description: 'Trusted by millions of devotees for authentic puja and astrology services',
  icons: {
    icon: '/favicon.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <Script src="/assets/scripts/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/scripts/translation.js" strategy="beforeInteractive" />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <div id="google_translate_element" style={{ display: 'none' }} />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}