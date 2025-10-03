import Link from 'next/link';

interface IndustryHeroProps {
  industry: string;
  industryLabel: string;
  title: string;
  description: string;
  ctaText?: string;
}

export default function IndustryHero({ 
  industry: _industry, 
  industryLabel,
  title, 
  description, 
  ctaText = "Book a Free Demo" 
}: IndustryHeroProps) {
  return (
    <section className="py-8 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A73E8] text-white rounded-[20px] py-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="relative text-center max-w-4xl mx-auto">
            {/* Industry Label */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-white text-sm font-medium tracking-wider uppercase">
                  {industryLabel}
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            {/* Descriptive Text */}
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link 
                href="/#contact" 
                className="bg-[#FFD700] text-[#464646] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
