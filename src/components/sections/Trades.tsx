import { trades } from '@/lib/data';

export default function Trades() {
  return (
    <section id="trades" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-semibold text-[#0E1109] mb-4 leading-[44px]">
            Built for All Trades
          </h2>
          <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
            Our solutions work perfectly for every type of tradesperson. 
            From plumbers to builders, we understand your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {trades.map((trade) => (
            <div key={trade.id} className="text-center group">
              <div className="bg-white rounded-xl p-6 shadow-lg card-hover group-hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {trade.icon}
                </div>
                <h3 className="text-[20px] font-semibold text-[#0E1109] leading-[28px]">
                  {trade.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[16px] text-[#677489] mb-6 leading-[24px]">
            Don't see your trade? We work with all types of tradespeople!
          </p>
          <button className="btn-primary">
            Get Custom Solution
          </button>
        </div>
      </div>
    </section>
  );
}
