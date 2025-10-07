import Link from 'next/link';

interface IndustryPromotionProps {
  industry: string;
  title: string;
  description: string;
  mainHeading: string;
  mainDescription: string;
  ctaText: string;
  ctaLink: string;
}

export default function IndustryPromotion({ 
  industry,
  title, 
  description, 
  mainHeading, 
  mainDescription, 
  ctaText, 
  ctaLink 
}: IndustryPromotionProps) {
  // Use industry variable to avoid unused warning
  console.log('Industry:', industry);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - White Background */}
        <div className="text-center mb-16">
          {/* Promotion Label */}
          <div className="inline-flex mb-6">
            <div className="bg-[#EAF3FC] text-[#1A73E8] rounded-full px-6 py-3">
              <span className="text-sm font-bold tracking-wider uppercase">
                Promotion
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h3 className="text-[36px] font-semibold text-[#464646] mb-6 leading-[46px] tracking-[-1px]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-lg text-[#677489] max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom Section - Blue Background with Pattern */}
        <div className="bg-[#1A73E8] rounded-[20px] p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Text Content - Centered */}
            <div className="space-y-8 text-center">
              {/* Main Heading */}
              <h3 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
                {mainHeading}
              </h3>

              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed">
                {mainDescription}
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Link 
                  href={ctaLink}
                  className="inline-flex bg-[#FFD700] text-[#464646] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {ctaText}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}






