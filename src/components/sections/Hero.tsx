import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-8 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1f77d6] text-white rounded-[20px] py-8 sm:py-12 px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#3A87DB] rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 max-w-full shadow-sm">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#3A87DB]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-center text-white">Solution that converts leads and makes you money.</span>
          </div>

          {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 sm:mb-8 leading-tight tracking-[-2px] md:tracking-[-3px]">
            Never Miss Another<br />
            <span className="text-[#ffd643]">Job Lead </span>
            Again
          </h1>

          {/* Description */}
          <p className="text-[16px] text-white/90 mb-8 max-w-3xl xl:max-w-[582px] mx-auto leading-[24px]">
            Trademate automates your Checkatrade, Rated People, MyBuilder, TrustATrader, Bark.com and works seamlessly with enquiries from any of these platforms, plus social media so you can focus on the work, not the admin.
          </p>

          {/* Customer Avatars and Trust */}
          <div className="mb-4 flex flex-col items-center">
            {/* Avatars Row */}
            <div className="flex items-center -space-x-2 mb-4">
              <Image
                src="/customer-1.png"
                alt="Customer 1"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/customer-2.png"
                alt="Customer 2"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/customer-3.png"
                alt="Customer 3"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            </div>
            {/* Trust Text Row */}
            <p className="text-[16px] font-medium leading-[24px]">
              Trusted by more than 100+ satisfied UK traders
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8 sm:mb-16">
            <Link href="#contact" className="bg-[#ffd643] text-[#0e1109] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-[#ffd643]/90 transition-colors inline-block">
              Book a Free Demo
            </Link>
          </div>

          {/* Partner Logos */}
         
          </div>
        </div>
      </div>
    </section>
  );
}
