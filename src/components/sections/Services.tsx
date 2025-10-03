import Image from 'next/image';

export default function Services() {
  const industries = [
    { name: 'Gas Engineers', image: '/gas-engineer.png' },
    { name: 'Electrician', image: '/electrician.png' },
    { name: 'Plumbing', image: '/plumber.png' },
    { name: 'Roofers', image: '/roofer.png' },
    { name: 'Builders', image: '/builder.png' },
    { name: 'Locksmiths', image: '/locksmith.png' },
  ];

  return (
        <section id="services" className="py-20 bg-[#F9F9F9]">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-[#eaf3fc] text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
                WE ARE SERVING
              </div>
              <h3 className="text-[36px] font-semibold text-[#0E1109] mb-6 max-w-3xl xl:max-w-[574px] mx-auto leading-[46px] tracking-[-1px] text-center">
                No matter what industry you&apos;re in, we got you covered
              </h3>
              <p className="text-[16px] text-[#677489] max-w-4xl mx-auto leading-[24px] text-center">
                Trademate AI is built to talk to more leads, set more appointments, and follow up for your business with little oversight.
              </p>
            </div>

         {/* Industry Cards Row - Scrollable */}
         <div className="relative group">
           <div className="overflow-hidden">
             <div 
               className="flex gap-4 animate-scroll-slow group-hover:pause-scroll"
               style={{ 
                 animation: 'scroll-slow 60s linear infinite'
               }}
             >
               {/* Duplicate the industries array for seamless loop */}
               {[...industries, ...industries].map((industry, index) => (
                 <div key={index} className="relative cursor-pointer flex-shrink-0">
                   <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-2xl overflow-hidden shadow-lg">
                     <Image
                       src={industry.image}
                       alt={industry.name}
                       fill
                       className="object-cover"
                     />
                     <div className="absolute bottom-4 left-4 right-4">
                       <div className="bg-white rounded-lg p-4 shadow-lg">
                         <h3 className="text-[20px] font-semibold text-[#0E1109] leading-[28px]">{industry.name}</h3>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
      </div>
    </section>
  );
}
