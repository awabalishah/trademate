import Image from 'next/image';

export default function YourProblem() {
  return (
    <section className="pt-20 pb-0 bg-white relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block lg:col-span-3">
            <Image
              src="/left.png"
              alt="Email and Messages"
              width={300}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
          </div>

          {/* Center - Text Content */}
          <div className="lg:col-span-6 text-center">
            <div className="inline-flex items-center bg-[#eaf3fc] text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
              YOUR PROBLEM
            </div>
            <h3 className="text-[36px] font-semibold text-[#0E1109] mb-6 leading-[46px] tracking-[-1px]">
              You&apos;re bombarded with hundreds of Emails and Queries while still trying to do the work
            </h3>
            <p className="text-[16px] sm:text-[18px] text-[#677489] mb-8 leading-relaxed max-w-2xl mx-auto">
              And you have to check them all in order to make sure you&apos;re not missing a potential great lead.
            </p>
            <p className="text-[18px] sm:text-[20px] font-semibold text-[#0E1109] leading-relaxed">
              What if you had a platform where AI takecare for all your leads?
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block lg:col-span-3">
            <Image
              src="/right.png"
              alt="Files and Folders"
              width={300}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
      
      {/* Arrow Image - Positioned at bottom center */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/arrow.png"
          alt="Arrow"
          width={100}
          height={100}
          className="w-auto h-auto"
        />
      </div>
    </section>
  );
}

