import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Trademate - Digital Solutions for Tradespeople",
  description: "Professional automation, website development, SEO, and marketing services tailored for tradespeople. Grow your business with our digital solutions.",
  keywords: "tradespeople, automation, website development, SEO, marketing, digital solutions, plumbers, electricians, builders",
  authors: [{ name: "Trademate" }],
  openGraph: {
    title: "Trademate - Digital Solutions for Tradespeople",
    description: "Professional automation, website development, SEO, and marketing services tailored for tradespeople.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trademate - Digital Solutions for Tradespeople",
    description: "Professional automation, website development, SEO, and marketing services tailored for tradespeople.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}