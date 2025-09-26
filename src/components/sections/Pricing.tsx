export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "£99",
      period: "/month",
      description: "Perfect for small trades businesses getting started",
      features: [
        "Up to 50 leads per month",
        "Basic AI responses",
        "Checkatrade integration",
        "Email automation",
        "Basic reporting",
        "Email support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "£199",
      period: "/month",
      description: "Most popular for growing trades businesses",
      features: [
        "Up to 200 leads per month",
        "Advanced AI responses",
        "All platform integrations",
        "Full automation suite",
        "Advanced reporting & analytics",
        "Calendar integration",
        "Priority support",
        "Custom workflows"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "£399",
      period: "/month",
      description: "For established trades businesses with high volume",
      features: [
        "Unlimited leads",
        "Premium AI with custom training",
        "All integrations + custom APIs",
        "White-label options",
        "Advanced analytics & insights",
        "Multi-calendar support",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#EAF3FC] text-[#1f77d6] px-6 py-3 rounded-full text-sm font-medium mb-6">
            PRICING
          </div>
          <h2 className="text-[36px] font-semibold text-[#0E1109] mb-6 leading-[44px]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[16px] text-[#677489] max-w-3xl mx-auto leading-[24px]">
            Choose the plan that fits your business needs. All plans include our core automation features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-[#1f77d6] scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#1f77d6] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-[24px] font-semibold text-[#0E1109] mb-2 leading-[32px]">
                  {plan.name}
                </h3>
                <p className="text-[16px] text-[#677489] mb-6 leading-[24px]">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-[48px] font-bold text-[#0E1109] leading-[56px]">
                    {plan.price}
                  </span>
                  <span className="text-[16px] text-[#677489] ml-2 leading-[24px]">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#1f77d6] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[16px] text-[#677489] leading-[24px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold text-[16px] transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#1f77d6] text-white hover:bg-[#1f77d6]/90 transform hover:scale-105'
                    : 'bg-[#FDD037] text-[#0E1109] hover:bg-[#FDD037]/90'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[16px] text-[#677489] mb-6 leading-[24px]">
            Need a custom solution? We&apos;re here to help.
          </p>
          <button className="bg-white text-[#1f77d6] font-semibold px-8 py-3 rounded-lg border-2 border-[#1f77d6] hover:bg-[#1f77d6] hover:text-white transition-all duration-300">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
}
