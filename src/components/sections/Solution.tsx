import Image from 'next/image';

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement Area */}
        <div className="text-center mb-20 relative">
          {/* Left Side Image */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
            <Image
              src="/Problem-01.png"
              alt="Problem visualization left"
              width={200}
              height={300}
              className="w-48 h-72 object-contain"
            />
          </div>

          {/* Right Side Image */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
            <Image
              src="/Problem-02.png"
              alt="Problem visualization right"
              width={200}
              height={300}
              className="w-48 h-72 object-contain"
            />
          </div>

          {/* Central Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-[#eaf3fc] text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
              YOUR PROBLEM
            </div>
                <h2 className="text-[36px] font-semibold text-[#0E1109] mb-6 leading-[44px] w-[600px] xl:w-[600px] lg:w-[550px] md:w-[500px] sm:w-[400px] w-full mx-auto">
                  You&apos;re bombarded with hundreds of{' '}
                  <span className="text-[#1f77d6]">Emails and Queries</span> while still trying to do the work.
                </h2>
            <p className="text-[16px] text-[#677489] mb-4 leading-[24px] max-w-3xl mx-auto">
              And you have to check them all in order to make sure you&apos;re not missing a potential great lead.
            </p>
            <p className="text-[22px] font-bold text-[#0E1109] leading-[30px] max-w-3xl mx-auto">
              What if you had a platform where AI take care<br />
              for all your leads?
            </p>
          </div>
        </div>

        {/* Solution Statement Area */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#eaf3fc] text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
            SOLUTION FOR YOUR
          </div>
          <h2 className="text-[36px] font-semibold text-[#0E1109] mb-16 leading-[44px]">
            Solution for your every problem
          </h2>
        </div>

        {/* Four Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Card 1: Capture Details */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#1f77d6] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 leading-[28px] mt-4">
              Capture Details
            </h3>
            <p className="text-[16px] text-[#677489] leading-[24px]">
              We pull new enquiries directly from Checkatrade, Facebook, or your website using our Automation.
            </p>
          </div>

          {/* Card 2: We Automate Everything */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#1f77d6] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 leading-[28px] mt-4">
              We Automate Everything
            </h3>
            <p className="text-[16px] text-[#677489] leading-[24px]">
              From lead capture to AI replies, bookings, invoicing, calls, and reminders we set up everything so it runs on autopilot.
            </p>
          </div>

          {/* Card 3: Share Your Schedule */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#1f77d6] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 leading-[28px] mt-4">
              Share Your Schedule
            </h3>
            <p className="text-[16px] text-[#677489] leading-[24px]">
              Simply provide your calendar link to allow customers to schedule your services once they provide their requirements.
            </p>
          </div>

          {/* Card 4: You Focus on the Job */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#1f77d6] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">4</span>
            </div>
            <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 leading-[28px] mt-4">
              You Focus on the Job
            </h3>
            <p className="text-[16px] text-[#677489] leading-[24px]">
              Invoices, reminders, and review requests are sent automatically. You have to focus on the job and new leads.
            </p>
          </div>
        </div>

        {/* Service Tags */}
        <div className="flex flex-col gap-4 items-center">
          {/* First Row */}
          <div className="flex gap-3 flex-wrap justify-center">
            {[
              'N8N Automation',
              'Voice Agent',
              'Chat Bot',
              'Email Automation',
              'LangChain',
              'Zapier AI Autom'
            ].map((tag, index) => (
              <div key={index} className="rounded-[32px] px-4 py-2 flex items-center gap-2 whitespace-nowrap border border-[#1f77d6] bg-white">
                <div className="w-4 h-4 bg-[#1f77d6] rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#0E1109] text-sm font-medium">{tag}</span>
              </div>
            ))}
          </div>
          
          {/* Second Row - Offset and Different Arrangement */}
          <div className="flex gap-3 flex-wrap justify-center ml-8">
            {[
              'Website Design',
              'Content Creation',
              'UI/UX Design',
              'SEO Services',
              'Social Media Marketing'
            ].map((tag, index) => (
              <div key={index} className="rounded-[32px] px-4 py-2 flex items-center gap-2 whitespace-nowrap border border-[#1f77d6] bg-white">
                <div className="w-4 h-4 bg-[#1f77d6] rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#0E1109] text-sm font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
