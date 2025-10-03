'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: '1',
      name: 'David Carter',
      company: 'Williams Plumbing',
      content: 'Running my plumbing business used to mean juggling calls, texts, and invoices late at night. With Trademate, everything is automated — replies, bookings, even payment reminders. I finally get my evenings back.',
      rating: 5,
      avatar: '/testimonials-1.png'
    },
    {
      id: '2',
      name: 'Jamie Gatley',
      company: 'JG Asbestos',
      content: 'Before Trademate, we were missing leads because we couldn\'t reply fast enough. Now every enquiry from Checkatrade is handled instantly, and we\'re booking more jobs without lifting a finger.',
      rating: 5,
      avatar: '/testimonials-2.png'
    },
    {
      id: '3',
      name: 'David Carter',
      company: 'Carter Electricals',
      content: 'The AI receptionist alone has been a game-changer. Customers never wait, even if I\'m on a job. I\'ve doubled my booked calls in just 3 months thanks to Trademate.',
      rating: 5,
      avatar: '/testimonials-3.png'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#EAF3FC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
            TESTIMONIALS
          </div>
          <h3 className="text-[36px] font-semibold text-[#0E1109] mb-6 leading-[46px] tracking-[-1px]">
            What Our Clients<br />
            Are Saying
          </h3>
          <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
            Real feedback from trades who&apos;ve transformed their business with Trademate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFD643]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-[16px] text-[#677489] mb-8 leading-[24px]">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              {/* Profile */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-[16px] font-semibold text-[#0E1109]">{testimonial.name}</div>
                  <div className="text-[14px] text-[#677489]">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-2 bg-[#FFD643] rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
