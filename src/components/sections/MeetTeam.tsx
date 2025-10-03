import Image from 'next/image';

export default function MeetTeam() {
  const teamMembers = [
    {
      name: "Luke Wayne",
      role: "CEO",
      image: "/team/01.png"
    },
    {
      name: "John David", 
      role: "COO",
      image: "/team/02.png"
    },
    {
      name: "Abhas Singh",
      role: "Product Head", 
      image: "/team/03.png"
    },
    {
      name: "Marco Felix",
      role: "Client Support Lead",
      image: "/team/04.png"
    }
  ];

  return (
    <section className="py-20 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Our Teams Label */}
          <div className="inline-flex mb-6">
            <div className="bg-[#1A73E8] rounded-full px-6 py-3">
              <span className="text-white text-sm font-bold tracking-wider uppercase">
                Our Teams
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h3 className="text-[36px] font-semibold text-black leading-[46px] tracking-[-1px]">
            Meet The People Behind The Sparkle
          </h3>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Team Member Image */}
              <div className="mb-6">
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Team Member Info */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

