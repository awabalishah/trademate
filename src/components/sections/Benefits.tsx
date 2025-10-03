import Link from 'next/link';
import Image from 'next/image';

interface BenefitsProps {
  industry: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

export default function Benefits({ 
  industry, 
  title, 
  description, 
  benefits, 
  ctaText, 
  ctaLink 
}: BenefitsProps) {
  // Dynamic image selection based on industry
  const getIndustryImage = (industry: string) => {
    const industryLower = industry.toLowerCase();
    
    // Handle exact matches first
    if (industryLower.includes('plumbing')) return '/plumbing-benefits.png';
    if (industryLower.includes('electrical') || industryLower.includes('electrician')) return '/electrician-benefits.png';
    if (industryLower.includes('roofing') || industryLower.includes('roofer')) return '/roofer-benefit.png';
    if (industryLower.includes('heating') || industryLower.includes('gas')) return '/gas-engineer-benefit.png';
    if (industryLower.includes('builders') || industryLower.includes('construction')) return '/builders-benefit.png';
    if (industryLower.includes('locksmith')) return '/locksmith-benefit.png';
    if (industryLower.includes('carpentry') || industryLower.includes('carpenter')) return '/carpenters-benefits.png';
    if (industryLower.includes('painting') || industryLower.includes('painter')) return '/painters-benefit.png';
    if (industryLower.includes('gardening') || industryLower.includes('gardener')) return '/gardner-benefits.png';
    if (industryLower.includes('handyman') || industryLower.includes('handymen')) return '/handymen-benefits.png';
    
    return null; // Will show placeholder for other industries
  };

  const industryImage = getIndustryImage(industry);

  return (
    <section className="py-20 bg-[#FFF8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Industry Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {industryImage ? (
                <Image
                  src={industryImage}
                  alt={`${industry} Benefits`}
                  width={400}
                  height={480}
                  className="w-[400px] h-[480px] object-contain"
                />
              ) : (
                /* Image Placeholder */
                <div className="w-80 h-96 bg-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">Image placeholder</p>
                    <p className="text-gray-400 text-xs mt-1">Will be added to public folder</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            {/* Benefits Label */}
            <div className="inline-flex">
              <div className="bg-[#EAF3FC] text-[#1A73E8] rounded-full px-6 py-3">
                <span className="text-sm font-bold tracking-wider uppercase">
                  Benefits
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h3 className="text-[36px] font-bold text-[#464646] leading-[46px] tracking-[-1px]">
              {title}
            </h3>

            {/* Description */}
            <p className="text-lg text-[#464646] leading-relaxed">
              {description}
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 shadow-sm">
                    <svg className="w-4 h-4 text-[#1A73E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#464646] font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

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
    </section>
  );
}






