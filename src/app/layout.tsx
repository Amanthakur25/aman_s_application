import React from 'react';
import type { Metadata, Viewport } from 'next';
import ReduxProvider from '@/providers/ReduxProvider';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Global Puja - पूजा एवं ज्योतिष सेवाएं',
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
      <body className="antialiased">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}