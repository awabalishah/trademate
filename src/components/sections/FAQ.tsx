'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "Do I need any technical setup to get started?",
      answer: "No - we handle the entire setup for you on our onboarding call. You just share your business details and we take care of the rest."
    },
    {
      id: 1,
      question: "How does Trademate get my Checkatrade leads?",
      answer: "We integrate directly with Checkatrade's API to automatically capture and process your leads in real-time, ensuring you never miss an opportunity."
    },
    {
      id: 2,
      question: "Will customers know they're speaking to AI?",
      answer: "Our AI responses are designed to sound natural and professional. Customers will have a seamless experience without knowing they're interacting with AI."
    },
    {
      id: 3,
      question: "Can I use my own booking calendar?",
      answer: "Yes! Trademate integrates with most popular calendar systems including Google Calendar, Outlook, and Calendly for seamless booking management."
    },
    {
      id: 4,
      question: "What happens after a job is completed?",
      answer: "We automatically send follow-up messages, request reviews, handle invoicing, and schedule future maintenance - all while keeping you informed of every interaction."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? -1 : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#EAF3FC] text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
            FAQ
          </div>
          <h2 className="text-[36px] font-semibold text-[#0E1109] mb-6 leading-[44px]">
            Got Questions?
          </h2>
          <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
            We've got answers to your most common cleaning concerns.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 ${
                openItem === faq.id
                  ? 'bg-[#EAF3FC] border-[#1f77d6]'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-[18px] font-semibold text-[#0E1109] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === faq.id ? (
                    <svg className="w-6 h-6 text-[#1f77d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-[#677489]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
              </button>
              
              {openItem === faq.id && (
                <div className="px-6 pb-6">
                  <p className="text-[16px] text-[#677489] leading-[24px]">
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
