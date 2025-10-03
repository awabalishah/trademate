import Link from 'next/link';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-[#2F70F8] relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-8 h-8 bg-[#3F7DF8] rounded-lg transform rotate-12"></div>
        <div className="absolute top-20 left-32 w-6 h-6 bg-[#3F7DF8] rounded-lg transform rotate-45"></div>
        <div className="absolute top-32 left-16 w-10 h-10 bg-[#3F7DF8] rounded-lg transform -rotate-12"></div>
        <div className="absolute top-16 left-48 w-4 h-4 bg-[#3F7DF8] rounded-lg transform rotate-90"></div>
        
        <div className="absolute top-24 right-20 w-8 h-8 bg-[#3F7DF8] rounded-lg transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-[#3F7DF8] rounded-lg transform -rotate-12"></div>
        <div className="absolute top-16 right-48 w-10 h-10 bg-[#3F7DF8] rounded-lg transform rotate-12"></div>
        <div className="absolute top-32 right-16 w-4 h-4 bg-[#3F7DF8] rounded-lg transform -rotate-45"></div>
        
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-[#3F7DF8] rounded-lg transform -rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-6 h-6 bg-[#3F7DF8] rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-16 left-60 w-10 h-10 bg-[#3F7DF8] rounded-lg transform -rotate-12"></div>
        
        <div className="absolute bottom-24 right-24 w-8 h-8 bg-[#3F7DF8] rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 bg-[#3F7DF8] rounded-lg transform -rotate-45"></div>
        <div className="absolute bottom-16 right-60 w-10 h-10 bg-[#3F7DF8] rounded-lg transform rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold mb-8 w-full max-w-[606px] mx-auto leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] tracking-[-1px] sm:tracking-[-1.25px] md:tracking-[-1.5px]">
          <span className="text-[#FDD037]">Ready</span>{' '}
          <span className="text-white">To Win More Jobs, With Less</span>{' '}
          <span className="text-[#FDD037]">Effort</span><span className="text-white">?</span>
        </h2>

        {/* Description */}
        <p className="text-[20px] text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          Let Trademate automate your leads, bookings, and follow-ups — so you can focus on the work, not the admin.
        </p>

        {/* CTA Button */}
        <Link href="/#contact" className="inline-block bg-[#FDD037] text-[#0E1109] font-bold text-[18px] px-12 py-4 rounded-[48px] hover:bg-[#FDD037]/90 transition-colors transform hover:scale-105 shadow-lg">
          Book Your Free Demo
        </Link>
      </div>
    </section>
  );
}
