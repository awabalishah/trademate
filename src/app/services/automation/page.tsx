import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Automation
            </h1>
            <p className="text-[16px] mb-8 max-w-3xl mx-auto text-blue-100 leading-[24px]">
              Streamline your operations with custom automation solutions that save time, 
              reduce errors, and help you focus on what you do best.
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-8">
              From £299/month
            </div>
            <Link href="/#contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-semibold text-[#0E1109] mb-4 leading-[44px]">
              What We Automate
            </h2>
            <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
              Our automation solutions handle the repetitive tasks so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Customer Management',
                description: 'Automatically capture and organize customer information from all your lead sources.'
              },
              {
                icon: '📄',
                title: 'Invoice Generation',
                description: 'Create and send professional invoices automatically based on completed jobs.'
              },
              {
                icon: '📅',
                title: 'Appointment Scheduling',
                description: 'Let customers book appointments directly through your website and sync with your calendar.'
              },
              {
                icon: '📞',
                title: 'Lead Follow-up',
                description: 'Never miss a lead with automated follow-up sequences and reminders.'
              },
              {
                icon: '📊',
                title: 'Reporting & Analytics',
                description: 'Get detailed insights into your business performance with automated reports.'
              },
              {
                icon: '💬',
                title: 'Customer Communication',
                description: 'Send automated updates, confirmations, and reminders to keep customers informed.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-[20px] font-semibold text-[#0E1109] mb-3 leading-[28px]">{feature.title}</h3>
                <p className="text-[16px] text-[#677489] leading-[24px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] font-semibold text-[#0E1109] mb-6 leading-[44px]">
                Why Choose Our Automation?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Save 10+ Hours Per Week',
                    description: 'Automate repetitive tasks and focus on high-value work that grows your business.'
                  },
                  {
                    title: 'Reduce Human Error',
                    description: 'Eliminate mistakes in data entry, scheduling, and customer communication.'
                  },
                  {
                    title: 'Improve Customer Experience',
                    description: 'Faster response times and consistent communication keep customers happy.'
                  },
                  {
                    title: 'Scale Your Business',
                    description: 'Handle more customers and jobs without proportionally increasing admin work.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#0E1109] mb-2 leading-[28px]">{benefit.title}</h3>
                      <p className="text-[16px] text-[#677489] leading-[24px]">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-[20px] font-semibold text-[#0E1109] mb-6 leading-[28px]">Get Your Free Automation Audit</h3>
              <p className="text-[16px] text-[#677489] mb-6 leading-[24px]">
                We&apos;ll analyze your current processes and show you exactly how much time and money 
                you can save with our automation solutions.
              </p>
              <Link href="/#contact" className="btn-primary w-full text-center block">
                Book Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
