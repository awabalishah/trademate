'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Do I need any technical setup to get started?",
      answer: "No – we handle the entire setup for you on our onboarding call. You just share your business details and we take care of the rest."
    },
    {
      question: "How does Trademate get my Checkatrade leads?",
      answer: "We integrate directly with Checkatrade's email responses to automatically capture and organize all your leads in one place, so you never miss an opportunity."
    },
    {
      question: "Will customers know they are speaking to AI?",
      answer: "Our AI is designed to communicate naturally and professionally. Most customers won't notice they're speaking to AI, but we can configure transparency based on your preference."
    },
    {
      question: "Can I use my own booking calendar?",
      answer: "Yes! Trademate integrates with popular calendar systems like Google Calendar, Outlook, and more. We'll sync everything during setup."
    },
    {
      question: "What happens after a job is completed?",
      answer: "Trademate automatically sends follow-up messages, requests reviews, generates invoices, and tracks payments – keeping your workflow running smoothly without manual effort."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#eaf3fc] text-[#1f77d6] px-6 py-2 rounded-full text-sm font-medium mb-6">
            FAQ
          </div>
          <h3 className="text-[36px] font-semibold text-[#0E1109] mb-4 leading-[46px] tracking-[-1px]">
            Got Questions?
          </h3>
          <p className="text-[16px] text-[#677489]">
            We&apos;ve got answers to your most common onboarding concerns.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[18px] font-semibold text-[#0E1109] pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-6 h-6 text-[#1f77d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-[#677489]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[16px] text-[#677489] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


