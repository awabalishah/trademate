'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#eaf3fc] text-[#1f77d6] px-6 py-2 rounded-full text-sm font-medium mb-6">
            Pricing
          </div>
          <h3 className="text-[36px] font-semibold text-[#0E1109] mb-4 leading-[46px] tracking-[-1px]">
            Simple Plans For Every<br />Trade Business
          </h3>
          <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re a solo tradesman or running a growing team, Trademate has a plan that fits. No hidden fees — just automation that saves you time and wins more jobs.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                !isYearly
                  ? 'bg-white text-[#0E1109] shadow-sm'
                  : 'text-[#677489]'
              }`}
            >
              Monthly Pricing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                isYearly
                  ? 'bg-white text-[#0E1109] shadow-sm'
                  : 'text-[#677489]'
              }`}
            >
              Yearly Pricing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-[24px] font-semibold text-[#0E1109] mb-2">Starter Plan</h3>
              <p className="text-[14px] text-[#677489]">
                Get booked & organised
              </p>
              <p className="text-[12px] text-[#677489] mt-2">
                For solo tradies and small crews starting with automation.
              </p>
            </div>

            <Link
              href="/#contact"
              className="block w-full bg-[#1f77d6] text-white text-center py-4 rounded-full font-semibold hover:bg-[#1f77d6]/90 transition-colors mb-8"
            >
              Start with Starter
            </Link>

            <div>
              <p className="text-sm font-semibold text-[#0E1109] mb-4">You get:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#677489]">Instant email replies (sound like you)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#677489]">Online bookings & calendar sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#677489]">New-lead alerts by email</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#677489]">All lead details in one place</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-3xl p-8 relative hover:shadow-2xl transition-shadow lg:transform lg:scale-105">
            <div className="absolute top-6 right-6">
              <span className="bg-[#ffd643] text-[#0E1109] px-4 py-1.5 rounded-full text-xs font-bold">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-[24px] font-semibold text-white mb-2">Pro Plan</h3>
              <p className="text-[14px] text-white/90">
                Run the business on autopilot
              </p>
              <p className="text-[12px] text-white/80 mt-2">
                For busy crews who want more jobs and less admin.
              </p>
            </div>

            <Link
              href="/#contact"
              className="block w-full bg-[#ffd643] text-[#0E1109] text-center py-4 rounded-full font-semibold hover:bg-[#ffd643]/90 transition-colors mb-8"
            >
              Upgrade to Pro
            </Link>

            <div>
              <p className="text-sm font-semibold text-white mb-4">Everything in Starter, plus:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white">Automatic quotes & invoices (get paid faster)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white">Automatic review requests (email & WhatsApp after each job)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white">Website tune-up to win more calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white">WhatsApp auto-responder for new enquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-white">Dedicated priority support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">💼</span>
              </div>
              <h3 className="text-[24px] font-semibold text-[#0E1109] mb-2">Enterprise Plan</h3>
              <p className="text-[14px] text-[#677489]">
                Work with our experts to create a customized plan designed.
              </p>
            </div>

            <Link
              href="/#contact"
              className="block w-full bg-[#1f77d6] text-white text-center py-4 rounded-full font-semibold hover:bg-[#1f77d6]/90 transition-colors mb-8"
            >
              Contact Us for Enterprise
            </Link>

            <div>
              <p className="text-sm font-semibold text-[#0E1109] mb-4">Features include:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#677489]">Dedicated account manager for personalized support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#677489]">Custom integrations with your existing workflows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#677489]">Enterprise-grade security and compliance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
