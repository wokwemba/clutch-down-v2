const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Perfect for occasional car service needs",
    features: [
      "Find mechanics near you",
      "Browse spare parts",
      "View workshops",
      "Basic chat support",
      "1 vehicle registration",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "For car owners who want priority service",
    features: [
      "Everything in Basic",
      "Priority mechanic dispatch",
      "Exclusive offers & discounts",
      "Up to 3 vehicle registrations",
      "24/7 roadside assistance",
      "Parts price comparison",
      "Dedicated support",
    ],
    cta: "Start Premium",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$29.99",
    period: "/month",
    description: "For fleets and business vehicle management",
    features: [
      "Everything in Premium",
      "Unlimited vehicle registrations",
      "Fleet management dashboard",
      "Bulk parts ordering",
      "Dedicated account manager",
      "Custom invoicing",
      "API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-red-400 text-sm font-medium">Simple Pricing</span>
          </div>
          <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-red-500 border-2 border-red-400 shadow-2xl shadow-red-500/30 scale-105"
                  : "bg-neutral-800 border border-neutral-700 hover:border-neutral-600"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-red-500 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-space-grotesk text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-red-100" : "text-neutral-400"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`font-space-grotesk text-4xl font-bold ${plan.highlighted ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlighted ? "text-red-100" : "text-neutral-400"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? "bg-white/20" : "bg-red-500/20"
                    }`}>
                      <svg className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-red-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm ${plan.highlighted ? "text-white" : "text-neutral-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                plan.highlighted
                  ? "bg-white text-red-500 hover:bg-red-50"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Offers banner */}
        <div className="mt-16 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl px-6 py-3">
              <div className="text-red-400 font-bold text-xl">15% OFF</div>
              <div className="text-neutral-400 text-xs">Black Friday</div>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl px-6 py-3">
              <div className="text-orange-400 font-bold text-xl">5% OFF</div>
              <div className="text-neutral-400 text-xs">Christmas</div>
            </div>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl px-6 py-3">
              <div className="text-yellow-400 font-bold text-xl">15% OFF</div>
              <div className="text-neutral-400 text-xs">New Year</div>
            </div>
          </div>
          <p className="text-neutral-400 text-sm">
            🎉 Seasonal offers available! Collect your discount in the app.
          </p>
        </div>
      </div>
    </section>
  );
}
