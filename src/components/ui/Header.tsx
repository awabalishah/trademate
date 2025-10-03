'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
            <Link href="/about" className={`transition duration-300 font-medium ${
              pathname === '/about' 
                ? 'text-[#1f77d6] font-semibold' 
                : 'text-[#464646] hover:text-[#1f77d6]'
            }`}>
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="flex items-center space-x-1 text-[#464646] hover:text-[#1f77d6] transition duration-300 font-medium"
              >
                <span>Industries</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Industries Dropdown */}
              {isIndustriesOpen && (
                <div className="hidden md:block fixed top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-[780px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-50">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">INDUSTRIES</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link 
                    href="/industries/plumbing" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                    onClick={() => setIsIndustriesOpen(false)}
                  >
                      <Image
                        src="/plumber.png"
                        alt="Plumbing"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Plumbing</span>
                  </Link>
                  <Link 
                    href="/industries/electrical" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                    onClick={() => setIsIndustriesOpen(false)}
                  >
                      <Image
                        src="/electrician.png"
                        alt="Electricians"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Electricians</span>
                  </Link>
                  <Link 
                    href="/industries/heating" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      <Image
                        src="/gas-engineer.png"
                        alt="Gas Engineer"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Gas Engineer</span>
                    </Link>
                    <Link 
                      href="/industries/roofing" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      <Image
                        src="/roofer.png"
                        alt="Roofers"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Roofers</span>
                    </Link>
                    <Link 
                      href="/industries/carpentry" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      <Image
                        src="/carpenters.png"
                        alt="Carpenters"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Carpenters</span>
                    </Link>
                  <Link 
                    href="/industries/gardening" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                    onClick={() => setIsIndustriesOpen(false)}
                  >
                      <Image
                        src="/gardner.png"
                        alt="Gardeners"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Gardeners</span>
                  </Link>
                  <Link 
                    href="/industries/construction" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      <Image
                        src="/builder.png"
                        alt="Builders"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Builders</span>
                    </Link>
                    <Link 
                      href="/industries/painting" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      <Image
                        src="/painters.png"
                        alt="Painters"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Painters</span>
                    </Link>
                    <Link 
                      href="/industries/handyman" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      <Image
                        src="/handymen.png"
                        alt="Handymen"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Handymen</span>
                    </Link>
                    <Link 
                      href="/industries/locksmith" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition duration-200 group"
                    onClick={() => setIsIndustriesOpen(false)}
                  >
                      <Image
                        src="/locksmith.png"
                        alt="Locksmiths"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg flex-shrink-0 object-cover"
                      />
                      <span className="text-lg font-medium text-[#0E1109] group-hover:text-[#1f77d6]">Locksmiths</span>
                  </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-[#464646] hover:text-[#1f77d6] transition duration-300 font-medium"
              >
                <span>Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              </button>
              
              {/* Services Dropdown */}
              {isServicesOpen && (
                <div className="hidden md:block fixed top-24 left-1/2 -translate-x-1/2 w-[95vw] max-w-[1200px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-50 max-h-[600px] overflow-y-auto">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">POWERFUL AND SIMPLE SERVICES</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/ai-calling.svg"
                          alt="AI Calling"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">AI Calling</h4>
                        <p className="text-sm text-[#677489]">Answer every customer call with an AI receptionist — 24/7.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/inboxmanagement.svg"
                          alt="Inbox Management"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Inbox Management</h4>
                        <p className="text-sm text-[#677489]">All Checkatrade and web enquiries sorted and logged automatically.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/quotes.svg"
                          alt="Quotes & Invoicing"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Quotes & Invoicing</h4>
                        <p className="text-sm text-[#677489]">Send branded quotes and invoices without lifting a finger.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/marketing.svg"
                          alt="Social Media Marketing"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Social Media Marketing</h4>
                        <p className="text-sm text-[#677489]">Turn Facebook enquiries into booked jobs automatically.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/workflow-automation.svg"
                          alt="Workflow Automation"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Workflow Automation</h4>
                        <p className="text-sm text-[#677489]">From leads to invoices — your entire workflow runs on autopilot.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/customer-lists.svg"
                          alt="Customer Lists"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Customer Lists</h4>
                        <p className="text-sm text-[#677489]">Organize and track every lead and customer in one place.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/autoresponse.svg"
                          alt="Auto Responses"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Auto Responses</h4>
                        <p className="text-sm text-[#677489]">AI sends instant replies to win more jobs before competitors.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/calendar.svg"
                          alt="Calendar Management"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Calendar Management</h4>
                        <p className="text-sm text-[#677489]">Let customers book jobs directly into your schedule.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/website-building.svg"
                          alt="Website Building"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Website Building</h4>
                        <p className="text-sm text-[#677489]">Get a simple trade website that captures leads for you.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/seo.svg"
                          alt="SEO Optimization"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">SEO Optimization</h4>
                        <p className="text-sm text-[#677489]">Make your trade business easier to find online.</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/certificatess.svg"
                          alt="Certificates"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Certificates</h4>
                        <p className="text-sm text-[#677489]">View and manage your certificates</p>
                      </div>
                    </Link>
                    <Link 
                      href="/#services" 
                      className="flex flex-col gap-3 p-4 rounded-lg hover:bg-gray-50 transition duration-200 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/icons/customer-support.svg"
                          alt="Customer Support"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#0E1109] group-hover:text-[#1f77d6] mb-1">Customer Support</h4>
                        <p className="text-sm text-[#677489]">Follow-ups, reminders, and reviews — handled automatically</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/pricing" className="text-[#464646] hover:text-[#1f77d6] transition duration-300 font-medium">
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
              <Link href="/about" className={`block px-3 py-2 transition duration-300 ${
                pathname === '/about' 
                  ? 'text-[#1f77d6] font-semibold' 
                  : 'text-[#464646] hover:text-[#1f77d6]'
              }`}>
                About
              </Link>
              <div className="px-3 py-2">
                <div className="text-[#464646] font-medium mb-2">Industries</div>
                <div className="ml-4 space-y-1">
                  <Link href="/industries/plumbing" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Plumbers
                  </Link>
                  <Link href="/industries/electrical" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Electricians
                  </Link>
                  <Link href="/industries/construction" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Builders
                  </Link>
                  <Link href="/industries/roofing" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Roofers
                  </Link>
                  <Link href="/industries/heating" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Gas Engineers
                  </Link>
                  <Link href="/industries/locksmith" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Locksmiths
                  </Link>
                  <Link href="/industries/carpentry" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Carpenters
                  </Link>
                  <Link href="/industries/painting" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Painters & Decorators
                  </Link>
                  <Link href="/industries/gardening" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Gardeners/Landscapers
                  </Link>
                  <Link href="/industries/handyman" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Handymen
                  </Link>
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-[#464646] font-medium mb-2">Services</div>
                <div className="ml-4 space-y-1">
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    AI Calling
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Inbox Management
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Quotes & Invoicing
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Social Media Marketing
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Workflow Automation
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Customer Lists
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Auto Responses
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Calendar Management
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Website Building
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    SEO Optimization
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Certificates
                  </Link>
                  <Link href="/#services" className="block py-1 text-[#464646] hover:text-[#1f77d6] text-sm">
                    Customer Support
              </Link>
                </div>
              </div>
              <Link href="/pricing" className="block px-3 py-2 text-[#464646] hover:text-[#1f77d6]">
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
