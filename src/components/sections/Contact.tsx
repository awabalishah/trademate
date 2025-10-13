'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    trade: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          trade: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F9F9F9] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h3 className="text-[36px] font-semibold text-[#0E1109] mb-4 leading-[46px] tracking-[-1px]">
            Ready to Transform Your Business?
          </h3>
          <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
            Get in touch with our team to discuss how Trademate can help automate your trades business and grow your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-[24px] font-semibold text-[#0E1109] mb-6 leading-[32px]">
              Get Your Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {statusMessage}
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {statusMessage}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-[16px] font-medium text-[#0E1109] mb-2">
                    Full Name <span className="text-[#1f77d6]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f77d6] focus:border-transparent transition-all duration-200 text-[#0E1109] placeholder-gray-400"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[16px] font-medium text-[#0E1109] mb-2">
                    Email Address <span className="text-[#1f77d6]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f77d6] focus:border-transparent transition-all duration-200 text-[#0E1109] placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[16px] font-medium text-[#0E1109] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f77d6] focus:border-transparent transition-all duration-200 text-[#0E1109] placeholder-gray-400"
                    placeholder="+44 20 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[16px] font-medium text-[#0E1109] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f77d6] focus:border-transparent transition-all duration-200 text-[#0E1109] placeholder-gray-400"
                    placeholder="Smith Plumbing Ltd"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="trade" className="block text-[16px] font-medium text-[#0E1109] mb-2">
                    Your Trade <span className="text-[#1f77d6]">*</span>
                  </label>
                  <select
                    id="trade"
                    name="trade"
                    required
                    value={formData.trade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f77d6] focus:border-transparent transition-all duration-200 text-[#0E1109] bg-white"
                  >
                    <option value="">Select your trade</option>
                    <option value="plumber">Plumber</option>
                    <option value="electrician">Electrician</option>
                    <option value="builder">Builder</option>
                    <option value="roofer">Roofer</option>
                    <option value="locksmith">Locksmith</option>
                    <option value="gas-engineer">Gas Engineer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="block text-[16px] font-medium text-[#0E1109] mb-2">
                    Select Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f77d6] focus:border-transparent transition-all duration-200 text-[#0E1109] bg-white"
                  >
                    <option value="">Select Service Required</option>
                    <option value="automation">Business Automation</option>
                    <option value="website">Website Development</option>
                    <option value="seo">SEO & Marketing</option>
                    <option value="query-management">Query Management</option>
                    <option value="ai-calling">AI Calling System</option>
                    <option value="lead-management">Lead Management</option>
                    <option value="all">All Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[16px] font-medium text-[#0E1109] mb-2">
                  Tell Us About Your Business Needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f77d6] focus:border-transparent transition-all duration-200 text-[#0E1109] placeholder-gray-400 resize-none"
                  placeholder="Describe your current challenges and what you'd like to achieve..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1f77d6] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#1f77d6]/90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Get Free Consultation'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[24px] font-semibold text-[#0E1109] mb-6 leading-[32px]">
                Why Choose Trademate?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1f77d6] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#0E1109] mb-2 leading-[24px]">Industry Expertise</h4>
                    <p className="text-[16px] text-[#677489] leading-[24px]">We understand the unique challenges faced by tradespeople.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1f77d6] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#0E1109] mb-2 leading-[24px]">Proven Results</h4>
                    <p className="text-[16px] text-[#677489] leading-[24px]">Our clients see 3x more leads and 50% time savings on average.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1f77d6] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold text-[#0E1109] mb-2 leading-[24px]">Ongoing Support</h4>
                    <p className="text-[16px] text-[#677489] leading-[24px]">24/7 support and regular updates to keep your business growing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#EAF3FC] rounded-2xl p-8">
              <h4 className="text-[20px] font-semibold text-[#0E1109] mb-6 leading-[28px]">
                Get Started Today
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#1f77d6] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[16px] text-[#0E1109] font-medium">contact@thetrademate.co.uk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#1f77d6] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-[16px] text-[#0E1109] font-medium">07972867621</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}