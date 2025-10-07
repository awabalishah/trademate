import Link from 'next/link';
import Image from 'next/image';

interface PainPointsProps {
  industry: string;
  title: string;
  description: string;
  painPoints: string[];
  ctaText: string;
  ctaLink: string;
}

export default function PainPoints({ 
  industry,
  title, 
  description, 
  painPoints, 
  ctaText, 
  ctaLink 
}: PainPointsProps) {
  // Use industry variable to avoid unused warning
  console.log('Industry:', industry);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Pain Points Label */}
            <div className="inline-flex">
              <div className="bg-[#EAF3FC] text-[#1A73E8] rounded-full px-6 py-3">
                <span className="text-sm font-medium tracking-wider uppercase">
                  Pain Points
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h3 className="text-[36px] font-semibold text-[#464646] leading-[46px] tracking-[-1px]">
              {title}
            </h3>

            {/* Description */}
            <p className="text-lg text-[#464646] leading-relaxed">
              {description}
            </p>

            {/* Pain Points Checklist */}
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#EAF3FC] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1A73E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#464646] font-medium">
                    {point}
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

          {/* Right Column - Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/mobilemockup.png"
                alt="Mobile App Mockup"
                width={400}
                height={750}
                className="w-[400px] h-[750px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






