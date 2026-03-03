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
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest mb-4">Simple Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
            Choose your plan.<br />
            <span className="text-neutral-400">No hidden fees.</span>
          </h2>
        </div>

        {/* Plans — Uber card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-200 ${
                plan.highlighted
                  ? "bg-white text-black"
                  : "bg-neutral-950 border border-neutral-900 hover:border-neutral-700"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-1 ${plan.highlighted ? "text-neutral-500" : "text-neutral-500"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className={`text-5xl font-black ${plan.highlighted ? "text-black" : "text-white"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlighted ? "text-neutral-500" : "text-neutral-500"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? "text-neutral-600" : "text-neutral-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-black" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? "text-neutral-700" : "text-neutral-400"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                plan.highlighted
                  ? "bg-black text-white hover:bg-neutral-900"
                  : "bg-white text-black hover:bg-neutral-200"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Seasonal offers — Uber promo style */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { discount: "15% OFF", label: "Black Friday", code: "BF2024" },
            { discount: "5% OFF", label: "Christmas", code: "XMAS24" },
            { discount: "15% OFF", label: "New Year", code: "NY2025" },
          ].map((offer) => (
            <div key={offer.label} className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <div className="text-white font-black text-2xl">{offer.discount}</div>
                <div className="text-neutral-500 text-sm mt-1">{offer.label}</div>
              </div>
              <div className="text-right">
                <div className="text-neutral-600 text-xs mb-1">Code</div>
                <div className="bg-neutral-900 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg">{offer.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
