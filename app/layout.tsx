import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PiwikProProvider from "@piwikpro/next-piwik-pro";
import {Navbar} from "@/components/nav/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Møller Bil",
  description: "Alt du trenger å vite om bilkjøp",
  icons: {
    icon: "./favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <PiwikProProvider containerId={'c93a13cf-c797-4cdc-9c85-8dd60adcd813'} containerUrl={'https://norstrand.piwik.pro'}>
        <Navbar />
        {children}
      </PiwikProProvider>
      </body>
    </html>
  );
}
