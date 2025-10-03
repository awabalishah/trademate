import Image from 'next/image';

export default function CoreBeliefs() {
  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Core Beliefs Label */}
          <div className="inline-flex mb-6">
            <div className="bg-[#1A73E8] rounded-full px-6 py-3">
              <span className="text-white text-sm font-bold tracking-wider uppercase">
                Core Beliefs
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h3 className="text-[36px] font-semibold text-black leading-[46px] tracking-[-1px]">
            What We Stand For
          </h3>
        </div>

        {/* Three Column Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Card - Our Foundation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-6">
              Our Foundation
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hundreds of tradespeople are already transforming their businesses with Trademate. Don&apos;t let another lead slip by — let us handle the hard work while you focus on what you do best.
            </p>

            {/* Foundation Details */}
            <div className="space-y-4">
              <div>
                <span className="text-gray-600 text-sm">Based In</span>
                <div className="text-black font-bold">Nottingham, UK</div>
              </div>
              
              <div>
                <span className="text-gray-600 text-sm">Founded</span>
                <div className="text-black font-bold">2025</div>
              </div>
              
              <div>
                <span className="text-gray-600 text-sm">Working Hours</span>
                <div className="text-black font-bold">Monday - Saturday, 08.00 AM - 06.00 PM</div>
              </div>
            </div>
          </div>

          {/* Center Card - Image */}
          <div className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center">
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src="/whatwestandfor.png"
                alt="What We Stand For"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Card - Our Vision & Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Our Vision */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the go-to partner for every UK trades business, helping them grow without extra admin or missed opportunities.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is simple: to give tradespeople their time back. By automating enquiries, bookings, reminders, invoices, and reviews, we make sure no lead slips through the cracks. With Trademate, you focus on the job — we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

