import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="py-8 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A73E8] text-white rounded-[20px] py-12">
          <div className="text-center max-w-4xl mx-auto">
        {/* About Us Label */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-white text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Learn More About
          <br />
          <span className="text-white">Trademate</span>
        </h1>

        {/* Descriptive Text */}
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          At Trademate, we believe that a clean home goes beyond appearance – it brings peace of mind and comfort.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            href="/#contact" 
            className="bg-[#FFD700] text-[#464646] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Free Demo
          </Link>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
