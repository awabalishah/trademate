import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Newsletter Signup Banner */}
      <div className="bg-[#2F70F8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-[24px] font-semibold text-white mb-2 leading-[32px]">
                Stay in the loop with Trademate
              </h3>
              <p className="text-[16px] text-white/90 leading-[24px]">
                Receive exclusive deals, and seasonal updates right in your inbox.
              </p>
            </div>
            
            {/* Right Side - Email Form */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-[#0E1109] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 w-full sm:w-80"
              />
              <button className="bg-white text-[#2F70F8] font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Image
                src="/logo.svg"
                alt="Trademate Logo"
                width={120}
                height={25}
                className="w-24 h-5 sm:w-32 sm:h-7"
              />
              <div className="w-6 h-6 bg-[#FDD037] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0E1109]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <Link href="/" className="text-white hover:text-[#FDD037] transition-colors text-[16px] font-medium">
                Home
              </Link>
              <Link href="/#about" className="text-white hover:text-[#FDD037] transition-colors text-[16px] font-medium">
                About Us
              </Link>
              <div className="flex items-center gap-1">
                <Link href="/#industries" className="text-white hover:text-[#FDD037] transition-colors text-[16px] font-medium">
                  Industries
                </Link>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-1">
                <Link href="/#services" className="text-white hover:text-[#FDD037] transition-colors text-[16px] font-medium">
                  Services
                </Link>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <Link href="/#pricing" className="text-white hover:text-[#FDD037] transition-colors text-[16px] font-medium">
                Pricing
              </Link>
              <Link href="/news" className="text-white hover:text-[#FDD037] transition-colors text-[16px] font-medium">
                News
              </Link>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700">
            {/* Copyright */}
            <div className="text-[14px] text-gray-400">
              © 2025 Trademate. All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors">
                <span className="text-[12px] font-semibold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors">
                <span className="text-[12px] font-semibold">IN</span>
              </a>
              <a href="#" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors">
                <span className="text-[12px] font-semibold">IG</span>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                Privacy & Policy
              </Link>
              <Link href="/help" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}