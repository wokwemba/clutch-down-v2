export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">Your One-Stop Car Service Platform</span>
            </div>

            <h1 className="font-space-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Car</span>
              <span className="gradient-text">-diology</span>
              <br />
              <span className="text-neutral-300 text-4xl sm:text-5xl lg:text-6xl">At Anytime,</span>
              <br />
              <span className="text-neutral-300 text-4xl sm:text-5xl lg:text-6xl">Anywhere</span>
            </h1>

            <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Welcome to Car-diology — your one pit stop service. Don&apos;t be stranded. Find a mechanic near you, order spare parts, and book workshops instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40">
                Dial a Mechanic
              </button>
              <button className="border border-neutral-700 hover:border-neutral-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-lg hover:bg-neutral-800/50">
                Browse Spare Parts
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-space-grotesk text-3xl font-bold text-white">500+</div>
                <div className="text-neutral-500 text-sm mt-1">Mechanics</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-space-grotesk text-3xl font-bold text-white">50+</div>
                <div className="text-neutral-500 text-sm mt-1">Workshops</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-space-grotesk text-3xl font-bold text-white">4.9★</div>
                <div className="text-neutral-500 text-sm mt-1">Rating</div>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full scale-75" />

              {/* Phone frame */}
              <div className="relative w-72 h-[580px] bg-neutral-900 rounded-[3rem] border-2 border-neutral-700 shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                  <span className="text-white text-xs font-medium">10:30</span>
                  <div className="w-24 h-6 bg-neutral-950 rounded-full" />
                  <div className="flex gap-1">
                    <div className="w-4 h-3 border border-white/60 rounded-sm relative">
                      <div className="absolute inset-0.5 bg-white/60 rounded-sm" style={{width: '70%'}} />
                    </div>
                  </div>
                </div>

                {/* App content */}
                <div className="px-4 pb-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-neutral-400 text-xs">Good Evening!</p>
                      <p className="text-white font-semibold text-sm">Nate Samson</p>
                    </div>
                    <div className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">NS</span>
                    </div>
                  </div>

                  {/* Search bar */}
                  <div className="bg-neutral-800 rounded-xl px-3 py-2.5 flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-neutral-500 text-xs">Where would you go?</span>
                  </div>

                  {/* Map placeholder */}
                  <div className="bg-neutral-800 rounded-2xl h-36 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900" />
                    {/* Map grid lines */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px"
                    }} />
                    {/* Location pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div className="w-2 h-2 bg-red-500 mx-auto -mt-0.5" style={{clipPath: 'polygon(50% 100%, 0 0, 100% 0)'}} />
                    </div>
                    {/* Mechanic dots */}
                    <div className="absolute top-4 left-8 w-3 h-3 bg-blue-400 rounded-full" />
                    <div className="absolute top-8 right-10 w-3 h-3 bg-green-400 rounded-full" />
                    <div className="absolute bottom-6 left-12 w-3 h-3 bg-yellow-400 rounded-full" />
                  </div>

                  {/* Service buttons */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { icon: "🔧", label: "Mechanic" },
                      { icon: "🚗", label: "Towing" },
                      { icon: "⛽", label: "Fuel" },
                      { icon: "🔩", label: "Parts" },
                    ].map((item) => (
                      <div key={item.label} className="bg-neutral-800 rounded-xl p-2 text-center">
                        <div className="text-lg mb-1">{item.icon}</div>
                        <div className="text-neutral-400 text-[9px]">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Nearby mechanic card */}
                  <div className="bg-neutral-800 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">CW</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold truncate">Caroline Washington</p>
                      <p className="text-neutral-500 text-[10px]">800m away • 4.9 ★</p>
                    </div>
                    <button className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-lg flex-shrink-0">
                      Call
                    </button>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-neutral-950 border-t border-neutral-800 px-4 py-3">
                  <div className="flex justify-around">
                    {[
                      { icon: "🏠", label: "Home", active: true },
                      { icon: "❤️", label: "Saved" },
                      { icon: "💳", label: "Wallet" },
                      { icon: "🎁", label: "Offers" },
                      { icon: "👤", label: "Profile" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-0.5">
                        <span className="text-sm">{item.icon}</span>
                        <span className={`text-[9px] ${item.active ? "text-red-500" : "text-neutral-600"}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-16 top-20 bg-neutral-900 border border-neutral-700 rounded-2xl p-3 shadow-xl w-40">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-white text-xs font-semibold">Mechanic Found</span>
                </div>
                <p className="text-neutral-500 text-[10px]">Caroline • 5 mins away</p>
              </div>

              <div className="absolute -right-12 bottom-32 bg-neutral-900 border border-neutral-700 rounded-2xl p-3 shadow-xl w-36">
                <div className="text-neutral-500 text-[10px] mb-1">Payment</div>
                <div className="text-white text-sm font-bold">$220.00</div>
                <div className="text-green-400 text-[10px] mt-1">✓ Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
