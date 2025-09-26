'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Trademate Logo"
                width={217}
                height={45}
                className="w-32 h-7 sm:w-40 sm:h-8 md:w-48 md:h-10 lg:w-52 lg:h-11 xl:w-[217px] xl:h-[45px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-[#464646] hover:text-[#1f77d6] transition duration-300 font-medium">
              About
            </Link>
            <div className="flex items-center space-x-1">
              <Link href="/#industries" className="text-[#464646] hover:text-[#1f77d6] transition duration-300 font-medium">
                Industries
              </Link>
              <svg className="w-4 h-4 text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center space-x-1">
              <Link href="/#services" className="text-[#464646] hover:text-[#1f77d6] transition duration-300 font-medium">
                Services
              </Link>
              <svg className="w-4 h-4 text-[#464646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Link href="/#pricing" className="text-[#464646] hover:text-[#1f77d6] transition duration-300 font-medium">
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="/#contact" className="bg-[#ffd643] text-[#464646] font-semibold px-8 py-3 rounded-full hover:bg-[#ffd643]/90 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#464646] hover:text-[#1f77d6] focus:outline-none focus:text-[#1f77d6]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/#about" className="block px-3 py-2 text-[#464646] hover:text-[#1f77d6]">
                About
              </Link>
              <Link href="/#industries" className="block px-3 py-2 text-[#464646] hover:text-[#1f77d6]">
                Industries
              </Link>
              <Link href="/#services" className="block px-3 py-2 text-[#464646] hover:text-[#1f77d6]">
                Services
              </Link>
              <Link href="/#pricing" className="block px-3 py-2 text-[#464646] hover:text-[#1f77d6]">
                Pricing
              </Link>
              <Link href="/#contact" className="block px-3 py-2 bg-[#ffd643] text-[#464646] font-semibold text-center rounded-full">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
