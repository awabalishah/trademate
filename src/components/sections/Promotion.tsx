import Image from 'next/image';

export default function Promotion() {
  return (
    <section id="promotion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Promotion Banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#EAF3FC] text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
            PROMOTION
          </div>
          <h2 className="text-[36px] font-semibold text-[#0E1109] mb-6 leading-[44px]">
            Get 20% Off Your First Month Of Automation Setup
          </h2>
          <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
            Enjoy our limited-time offer on professional professional automation services.
          </p>
        </div>

        {/* Two Offer Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Box - Free Consultation */}
          <div className="bg-[#EAF3FC] rounded-2xl p-8 flex items-center gap-6 min-h-[280px]">
            <div className="flex-1">
              <h3 className="text-[24px] font-semibold text-[#1f77d6] mb-4 leading-[32px]">
                Let Trademate Handle Your Leads.
              </h3>
              <p className="text-[16px] text-[#677489] mb-6 leading-[24px]">
                Experience top-tier cleaning backed by trusted professionals.
              </p>
              <button className="bg-[#FFD643] text-[#0E1109] font-semibold px-8 py-3 rounded-lg hover:bg-[#FFD643]/90 transition-colors">
                Schedule a Free Consultation
              </button>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/promotion-1.png"
                alt="Hard Hat Worker"
                width={200}
                height={200}
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Box - Discount Offer */}
          <div className="bg-[#EAF3FC] rounded-2xl p-8 flex items-center gap-6 min-h-[280px]">
            <div className="flex-1">
              <h3 className="text-[24px] font-semibold text-[#1f77d6] mb-4 leading-[32px]">
                Get 20% Off Your First Signup!
              </h3>
              <p className="text-[16px] text-[#677489] mb-6 leading-[24px]">
                This exclusive deal is reserved for new customers and is available for a limited.
              </p>
              <button className="bg-[#FFD643] text-[#0E1109] font-semibold px-8 py-3 rounded-lg hover:bg-[#FFD643]/90 transition-colors">
                Claim Your Discount
              </button>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/promotion-2.png"
                alt="Worker with Hammer"
                width={200}
                height={200}
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
