const services = [
  {
    title: "Mechanic On Demand",
    subtitle: "Roadside Assistance",
    description: "Engine trouble? Flat tire? Our certified mechanics come to you. Real-time tracking, transparent pricing, and 4.9★ rated professionals.",
    stats: [
      { label: "Avg. Response", value: "5 min" },
      { label: "Mechanics", value: "500+" },
      { label: "Rating", value: "4.9★" },
    ],
    color: "from-red-500/20 to-orange-500/10",
    accent: "text-red-400",
    border: "border-red-500/20",
    screenContent: (
      <div className="space-y-3">
        <div className="bg-neutral-800 rounded-xl p-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">CW</span>
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Caroline Washington</p>
              <p className="text-neutral-500 text-[10px]">Mechanic • 800m away</p>
            </div>
            <div className="ml-auto text-yellow-400 text-xs">4.9★</div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-neutral-700 rounded-lg p-2 text-center">
              <p className="text-neutral-400 text-[9px]">Specialty</p>
              <p className="text-white text-[10px] font-medium">Engine</p>
            </div>
            <div className="flex-1 bg-neutral-700 rounded-lg p-2 text-center">
              <p className="text-neutral-400 text-[9px]">ETA</p>
              <p className="text-white text-[10px] font-medium">5 mins</p>
            </div>
            <div className="flex-1 bg-neutral-700 rounded-lg p-2 text-center">
              <p className="text-neutral-400 text-[9px]">Rate</p>
              <p className="text-white text-[10px] font-medium">$200/hr</p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 rounded-xl p-3">
          <p className="text-neutral-400 text-[10px] mb-2">Select Issue</p>
          <div className="grid grid-cols-2 gap-2">
            {["Engine", "Body Works", "Electrical", "Tires"].map((issue) => (
              <div key={issue} className={`rounded-lg p-2 text-center text-[10px] font-medium ${issue === "Engine" ? "bg-red-500 text-white" : "bg-neutral-700 text-neutral-400"}`}>
                {issue}
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-red-500 text-white text-xs font-semibold py-2.5 rounded-xl">
          Request Mechanic
        </button>
      </div>
    ),
  },
  {
    title: "Spare Parts Store",
    subtitle: "Parts Marketplace",
    description: "Browse thousands of original and aftermarket parts from verified suppliers. Compare prices, check compatibility, and get doorstep delivery.",
    stats: [
      { label: "Parts Listed", value: "10K+" },
      { label: "Suppliers", value: "200+" },
      { label: "Brands", value: "50+" },
    ],
    color: "from-blue-500/20 to-purple-500/10",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    screenContent: (
      <div className="space-y-3">
        <div className="bg-neutral-800 rounded-xl px-3 py-2 flex items-center gap-2">
          <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-neutral-500 text-[10px]">Search spare parts...</span>
        </div>
        {[
          { name: "DFT Water Pump AW4126", type: "Original", price: "OMR 187", brand: "Volkswagen" },
          { name: "Radiator Fan Motor", type: "Duplicate", price: "OMR 40", brand: "Toyota" },
        ].map((part) => (
          <div key={part.name} className="bg-neutral-800 rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[10px] font-semibold truncate">{part.name}</p>
              <p className="text-neutral-500 text-[9px]">{part.brand} • {part.type}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white text-xs font-bold">{part.price}</p>
              <button className="text-blue-400 text-[9px] mt-0.5">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Workshop Finder",
    subtitle: "Book a Workshop",
    description: "Find top-rated workshops near you. View specializations, read reviews, check availability, and book your slot in seconds.",
    stats: [
      { label: "Workshops", value: "50+" },
      { label: "Cities", value: "10+" },
      { label: "Avg Rating", value: "4.8★" },
    ],
    color: "from-green-500/20 to-teal-500/10",
    accent: "text-green-400",
    border: "border-green-500/20",
    screenContent: (
      <div className="space-y-3">
        <div className="bg-neutral-800 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-white text-xs font-semibold">Auto King Workshop</p>
            <span className="text-yellow-400 text-[10px]">4.9★</span>
          </div>
          <p className="text-neutral-500 text-[10px] mb-2">Muscat, Oman • 2.5 km</p>
          <div className="flex gap-1 flex-wrap mb-2">
            {["Engine", "Electrical", "Body"].map((tag) => (
              <span key={tag} className="bg-green-500/10 text-green-400 text-[9px] px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <button className="w-full bg-green-500 text-white text-[10px] font-semibold py-2 rounded-lg">Book Now</button>
        </div>
        <div className="bg-neutral-800 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-white text-xs font-semibold">Adonz Automotive</p>
            <span className="text-yellow-400 text-[10px]">4.7★</span>
          </div>
          <p className="text-neutral-500 text-[10px] mb-2">Westlands, Kenya • 4.1 km</p>
          <div className="flex gap-1 flex-wrap mb-2">
            {["Painting", "Modification"].map((tag) => (
              <span key={tag} className="bg-green-500/10 text-green-400 text-[9px] px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <button className="w-full bg-neutral-700 text-neutral-300 text-[10px] font-semibold py-2 rounded-lg">View Details</button>
        </div>
      </div>
    ),
  },
];

export default function ServicesShowcase() {
  return (
    <section id="diagnostics" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-red-400 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="font-space-grotesk text-4xl sm:text-5xl font-bold text-white mb-4">
            All-in-One Car Platform
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Whether you need emergency help or planned maintenance, Car-diology connects you with the right service instantly.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 bg-neutral-800 border ${service.border} rounded-full px-3 py-1.5 mb-4`}>
                  <span className={`${service.accent} text-xs font-medium`}>{service.subtitle}</span>
                </div>
                <h3 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className={`bg-neutral-900 border ${service.border} rounded-xl p-4 text-center`}>
                      <div className={`font-space-grotesk text-2xl font-bold ${service.accent} mb-1`}>{stat.value}</div>
                      <div className="text-neutral-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className={`bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-red-500/25`}>
                  Learn More
                </button>
              </div>

              {/* Phone mockup */}
              <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-3xl rounded-full scale-75`} />
                  <div className="relative w-64 bg-neutral-900 rounded-[2.5rem] border-2 border-neutral-700 shadow-2xl overflow-hidden p-4">
                    {/* Status bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white text-xs font-medium">10:30</span>
                      <div className="w-16 h-4 bg-neutral-950 rounded-full" />
                      <div className="w-4 h-3 border border-white/40 rounded-sm" />
                    </div>
                    {service.screenContent}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
