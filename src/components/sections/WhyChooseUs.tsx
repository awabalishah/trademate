import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-[#EAF3FC] to-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Container with rounded background */}
        <div className="bg-[#EAF3FC] rounded-[20px] py-20 px-8 max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#1f77d6] text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-[36px] font-semibold text-[#0E1109] mb-6 max-w-4xl mx-auto leading-[44px]">
              Why Trademate is the right choice for Quality
            </h2>
            <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
              Discover a range of services designed to bring comfort
            </p>
          </div>

          {/* Three Feature Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {/* Card 1: Capture Leads */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/details.svg"
                  alt="Capture Leads Illustration"
                  width={240}
                  height={160}
                  className="w-60 h-40"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 text-left leading-[28px]">
                Capture Leads
              </h3>
              <p className="text-[16px] text-[#677489] text-left leading-[24px]">
                We fetch enquiries from Checkatrade, Trustatrade, Rated platform, MyBuilder, Bark, Your website, Facebook, and similar platforms.
              </p>
            </div>

            {/* Card 2: AI Responds */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/Illustration.svg"
                  alt="AI Responds Illustration"
                  width={240}
                  height={160}
                  className="w-60 h-40"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 text-left leading-[28px]">
                AI Responds
              </h3>
              <p className="text-[16px] text-[#677489] text-left leading-[24px]">
                AI replies instantly with a personalized email including booking links, and sends reminders so customers never forget.
              </p>
            </div>

            {/* Card 3: You Do the Job */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Image
                  src="/job.svg"
                  alt="You Do the Job Illustration"
                  width={240}
                  height={160}
                  className="w-60 h-40"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 text-left leading-[28px]">
                You Do the Job
              </h3>
              <p className="text-[16px] text-[#677489] text-left leading-[24px]">
                You instantly get notified when a new lead is booked, and only focus on delivering the service hassle-free.
              </p>
            </div>
          </div>

          {/* Bottom Section: Works with your websites and tools */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Left Side - Text Content */}
              <div className="flex-1">
                <h3 className="text-[20px] font-semibold text-[#0E1109] mb-4 text-left leading-[28px]">
                  Works with your websites and tools
                </h3>
                <p className="text-[16px] text-[#677489] text-left leading-[24px] w-[451px] xl:w-[451px] lg:w-[400px] md:w-[350px] sm:w-[300px] w-full">
                  We fetch enquiries from Checkatrade, Trustatradee, Rated people, My Builder, Bark, Your website, Facebook and similar platforms.
                </p>
              </div>
              
              {/* Right Side - Platform Badges Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-4 gap-3 w-fit">
                  {/* Row 1 */}
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/checktrade.svg"
                      alt="Checkatrade"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-[#0E1109] font-medium">Checkatrade</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/trusttrader.svg"
                      alt="Trustatrader"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-[#0E1109] font-medium">Trustatrader</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/ratedpeople.svg"
                      alt="RatedPeople"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-[#0E1109] font-medium">RatedPeople</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/mybuilder.svg"
                      alt="MyBuilder"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-[#0E1109] font-medium">MyBuilder</span>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-[#0E1109] font-medium">Facebook</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/whatsapp.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-[#0E1109] font-medium">WhatsApp</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <Image
                      src="/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-[#0E1109] font-medium">Instagram</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-full px-2 py-1 flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">b</span>
                    </div>
                    <span className="text-sm text-[#0E1109] font-medium">Bark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
