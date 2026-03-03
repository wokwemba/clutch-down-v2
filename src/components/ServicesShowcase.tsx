const services = [
  {
    tag: "Roadside Assistance",
    title: "Mechanic On Demand",
    description: "Engine trouble? Flat tire? Our certified mechanics come to you. Real-time tracking, transparent pricing, and 4.9★ rated professionals available 24/7.",
    stats: [
      { label: "Avg. Response", value: "5 min" },
      { label: "Mechanics", value: "500+" },
      { label: "Rating", value: "4.9★" },
    ],
    screen: (
      <div className="space-y-3">
        {/* Available mechanics */}
        <div className="text-white text-xs font-bold">Available Mechanics</div>
        {[
          { name: "Caroline Washington", dist: "800m", eta: "5 min", rating: "4.9", specialty: "Engine" },
          { name: "Arianna Washington", dist: "1.1km", eta: "8 min", rating: "4.8", specialty: "Electrical" },
        ].map((m) => (
          <div key={m.name} className="bg-neutral-900 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black text-[10px] font-black">{m.name.split(" ").map(n => n[0]).join("")}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[10px] font-semibold truncate">{m.name}</p>
              <p className="text-neutral-500 text-[9px]">{m.dist} • {m.eta} • {m.rating}★ • {m.specialty}</p>
            </div>
            <button className="bg-white text-black text-[9px] font-bold px-2.5 py-1.5 rounded-lg flex-shrink-0">
              Request
            </button>
          </div>
        ))}
        {/* Issue selector */}
        <div className="bg-neutral-900 rounded-xl p-3">
          <p className="text-neutral-500 text-[10px] mb-2">Select Issue</p>
          <div className="grid grid-cols-2 gap-1.5">
            {["Engine", "Body Works", "Electrical", "Tires"].map((issue, i) => (
              <div key={issue} className={`rounded-lg p-2 text-center text-[9px] font-semibold ${i === 0 ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"}`}>
                {issue}
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-white text-black text-xs font-bold py-2.5 rounded-xl">
          Confirm Request
        </button>
      </div>
    ),
  },
  {
    tag: "Parts Marketplace",
    title: "Spare Parts Store",
    description: "Browse thousands of original and aftermarket parts from verified suppliers. Compare prices, check compatibility, and get doorstep delivery.",
    stats: [
      { label: "Parts Listed", value: "10K+" },
      { label: "Suppliers", value: "200+" },
      { label: "Brands", value: "50+" },
    ],
    screen: (
      <div className="space-y-3">
        <div className="bg-neutral-900 rounded-xl px-3 py-2.5 flex items-center gap-2">
          <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-neutral-500 text-[10px]">Search spare parts...</span>
        </div>
        {/* Filter chips */}
        <div className="flex gap-1.5 flex-wrap">
          {["All", "Engine", "Body", "Electrical"].map((f, i) => (
            <span key={f} className={`text-[9px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? "bg-white text-black" : "bg-neutral-900 text-neutral-400"}`}>{f}</span>
          ))}
        </div>
        {[
          { name: "DFT Water Pump AW4126", type: "Original", price: "OMR 187", brand: "Volkswagen" },
          { name: "Radiator Fan Motor Assy", type: "Duplicate", price: "OMR 40", brand: "Toyota" },
          { name: "AVON AW4128 Engine Wat.", type: "Original", price: "OMR 207", brand: "Audi" },
        ].map((part) => (
          <div key={part.name} className="bg-neutral-900 rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[10px] font-semibold truncate">{part.name}</p>
              <p className="text-neutral-500 text-[9px]">{part.brand} • {part.type}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white text-xs font-black">{part.price}</p>
              <button className="text-neutral-400 text-[9px] mt-0.5 hover:text-white">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "Book a Workshop",
    title: "Workshop Finder",
    description: "Find top-rated workshops near you. View specializations, read reviews, check availability, and book your slot in seconds.",
    stats: [
      { label: "Workshops", value: "50+" },
      { label: "Cities", value: "10+" },
      { label: "Avg Rating", value: "4.8★" },
    ],
    screen: (
      <div className="space-y-3">
        <div className="text-white text-xs font-bold">Popular Workshops</div>
        {[
          { name: "Auto King Workshop", location: "Muscat, Oman", dist: "2.5 km", rating: "4.9", tags: ["Engine", "Electrical", "Body"] },
          { name: "Adonz Automotive", location: "Westlands, Kenya", dist: "4.1 km", rating: "4.7", tags: ["Painting", "Modification"] },
          { name: "DG Automotive", location: "Muscat, Oman", dist: "7.5 km", rating: "4.6", tags: ["Tires", "Brakes"] },
        ].map((w) => (
          <div key={w.name} className="bg-neutral-900 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-white text-[10px] font-bold">{w.name}</p>
              <span className="text-neutral-400 text-[9px]">{w.rating}★</span>
            </div>
            <p className="text-neutral-500 text-[9px] mb-2">{w.location} • {w.dist}</p>
            <div className="flex gap-1 flex-wrap mb-2">
              {w.tags.map((tag) => (
                <span key={tag} className="bg-neutral-800 text-neutral-400 text-[8px] px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
            <button className="w-full bg-white text-black text-[9px] font-bold py-1.5 rounded-lg">Book Now</button>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: "Emergency Service",
    title: "Towing Service",
    description: "Stuck on the road? Request a flatbed tow truck instantly. Track your tow in real-time and get transparent pricing upfront.",
    stats: [
      { label: "Response Time", value: "10 min" },
      { label: "Tow Trucks", value: "100+" },
      { label: "Coverage", value: "24/7" },
    ],
    screen: (
      <div className="space-y-3">
        <div className="text-white text-xs font-bold">Towing Service</div>
        {/* Map */}
        <div className="bg-neutral-900 rounded-xl h-28 relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "16px 16px"
          }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
            <div className="w-4 h-4 bg-white rounded-full border-2 border-black flex items-center justify-center shadow-lg">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
          </div>
          <div className="absolute top-3 right-4 w-2 h-2 bg-white rounded-full opacity-50" />
          <div className="absolute bottom-4 left-6 w-2 h-2 bg-white rounded-full opacity-50" />
        </div>
        {/* Tow type */}
        <div className="bg-neutral-900 rounded-xl p-3">
          <p className="text-neutral-500 text-[10px] mb-2">Select Tow Type</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Flat Bed Truck", active: true },
              { label: "Car Lifting", active: false },
            ].map((t) => (
              <div key={t.label} className={`rounded-lg p-2 text-center text-[9px] font-semibold ${t.active ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"}`}>
                {t.label}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-neutral-900 rounded-xl p-3 flex items-center justify-between">
          <div>
            <p className="text-neutral-500 text-[9px]">Estimated Cost</p>
            <p className="text-white text-sm font-black">$45.00</p>
          </div>
          <button className="bg-white text-black text-[9px] font-bold px-3 py-2 rounded-lg">Request Tow</button>
        </div>
      </div>
    ),
  },
];

export default function ServicesShowcase() {
  return (
    <section id="diagnostics" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
            All-in-one<br />
            <span className="text-neutral-400">car platform.</span>
          </h2>
        </div>

        {/* Services — alternating layout like Uber */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block bg-neutral-900 text-neutral-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  {service.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Stats — Uber minimal */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className="border-l-2 border-white pl-4">
                      <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-neutral-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className="bg-white text-black font-bold px-8 py-3.5 rounded-lg hover:bg-neutral-200 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Phone mockup */}
              <div className={`flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative w-64 bg-neutral-950 rounded-[2.5rem] border border-neutral-800 shadow-2xl overflow-hidden p-4">
                  {/* Status bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-xs font-semibold">10:30</span>
                    <div className="w-14 h-4 bg-black rounded-full" />
                    <div className="flex gap-0.5">
                      <div className="w-1 h-2.5 bg-white rounded-sm opacity-40" />
                      <div className="w-1 h-3 bg-white rounded-sm opacity-60" />
                      <div className="w-1 h-3.5 bg-white rounded-sm opacity-80" />
                      <div className="w-1 h-4 bg-white rounded-sm" />
                    </div>
                  </div>
                  {service.screen}
                  {/* Bottom nav */}
                  <div className="mt-4 pt-3 border-t border-neutral-900 flex justify-around">
                    {["Home", "Parts", "Request", "Workshop", "Profile"].map((item, i) => (
                      <div key={item} className="flex flex-col items-center gap-0.5">
                        <div className={`w-4 h-4 rounded-sm ${i === 0 ? "bg-white" : "bg-neutral-800"}`} />
                        <span className={`text-[7px] ${i === 0 ? "text-white" : "text-neutral-600"}`}>{item}</span>
                      </div>
                    ))}
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
