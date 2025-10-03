export default function PricingHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Pricing
          </div>
          
          {/* Heading */}
          <h1 className="text-[48px] md:text-[56px] font-bold text-white mb-4 leading-tight">
            Pricing Plans
          </h1>
          
          {/* Description */}
          <p className="text-[18px] text-white/90 max-w-2xl mx-auto leading-relaxed">
            Simple, transparent pricing that grows with you. Try any plan free for 07 days.
          </p>
        </div>
      </div>
    </section>
  );
}


