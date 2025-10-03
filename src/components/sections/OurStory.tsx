import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Our Story Button */}
            <div className="inline-flex">
              <div className="bg-[#1A73E8] rounded-full px-6 py-3">
                <span className="text-white text-sm font-medium tracking-wider uppercase">
                  Our Story
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h3 className="text-[36px] font-semibold text-black leading-[46px] tracking-[-1px]">
              Trusted By Hundreds Of Trades Across The UK
            </h3>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            <p className="text-lg text-black leading-relaxed">
              At Trademate, we believe tradespeople shouldn&apos;t lose business just because they&apos;re busy on the job. That&apos;s why we built an automation service designed specifically for plumbers, electricians, carpenters, asbestos specialists, and more.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="/video.png"
              alt="Trademate Video"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Statistic */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[#1A73E8] mb-2">
              1,200+
            </div>
            <div className="text-black text-sm font-medium">
              Traders onboarded
            </div>
          </div>

          {/* Second Statistic */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[#1A73E8] mb-2">
              98%
            </div>
            <div className="text-black text-sm font-medium">
              Customer Satisfaction
            </div>
          </div>

          {/* Third Statistic */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[#1A73E8] mb-2">
              4.9/5
            </div>
            <div className="text-black text-sm font-medium">
              Average Rating
            </div>
          </div>

          {/* Fourth Statistic */}
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[#1A73E8] mb-2">
              5+
            </div>
            <div className="text-black text-sm font-medium">
              Years of Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
