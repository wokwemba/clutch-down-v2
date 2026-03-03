export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden pt-16">
      {/* Subtle map grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Uber-style category pill */}
            <div className="inline-flex items-center gap-2 bg-neutral-900 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white text-sm font-medium">Available 24/7</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight mb-6 text-white">
              Car service,<br />
              <span className="text-neutral-400">on demand.</span>
            </h1>

            <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
              Find a mechanic near you, order spare parts, and book workshops — all in one app. Fast, reliable, transparent.
            </p>

            {/* CTA Buttons — Uber style */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg text-base hover:bg-neutral-200 transition-colors">
                Dial a Mechanic
              </button>
              <button className="bg-neutral-900 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-neutral-800 transition-colors border border-neutral-800">
                Browse Spare Parts
              </button>
            </div>

            {/* Stats — Uber minimal style */}
            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-neutral-500 text-sm mt-1">Mechanics</div>
              </div>
              <div className="w-px bg-neutral-800" />
              <div>
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-neutral-500 text-sm mt-1">Workshops</div>
              </div>
              <div className="w-px bg-neutral-800" />
              <div>
                <div className="text-3xl font-black text-white">4.9★</div>
                <div className="text-neutral-500 text-sm mt-1">Rating</div>
              </div>
            </div>
          </div>

          {/* Right: Phone mockup — Uber app style */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 h-[600px] bg-neutral-950 rounded-[3rem] border border-neutral-800 shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-5 pb-2">
                  <span className="text-white text-xs font-semibold">9:41</span>
                  <div className="w-20 h-5 bg-black rounded-full" />
                  <div className="flex items-center gap-1">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="white" opacity="0.8">
                      <rect x="0" y="4" width="3" height="8" rx="1"/>
                      <rect x="4.5" y="2.5" width="3" height="9.5" rx="1"/>
                      <rect x="9" y="0.5" width="3" height="11.5" rx="1"/>
                      <rect x="13.5" y="0" width="2.5" height="12" rx="1" opacity="0.3"/>
                    </svg>
                  </div>
                </div>

                {/* App content */}
                <div className="px-4 pb-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-neutral-500 text-xs">Good morning</p>
                      <p className="text-white font-bold text-base">Nate Samson</p>
                    </div>
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-black">NS</span>
                    </div>
                  </div>

                  {/* Where to? — Uber signature */}
                  <div className="bg-white rounded-xl px-4 py-3.5 flex items-center gap-3 mb-4 shadow-lg">
                    <svg className="w-4 h-4 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-neutral-500 text-sm font-medium">What do you need?</span>
                  </div>

                  {/* Service icons — Uber style */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { icon: "🔧", label: "Mechanic" },
                      { icon: "🚗", label: "Towing" },
                      { icon: "⛽", label: "Fuel" },
                      { icon: "🔩", label: "Parts" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-1.5">
                        <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-xl">
                          {item.icon}
                        </div>
                        <span className="text-neutral-400 text-[9px] font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Map area */}
                  <div className="bg-neutral-900 rounded-2xl h-40 mb-4 relative overflow-hidden">
                    {/* Map grid */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px"
                    }} />
                    {/* Roads */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-700" />
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-neutral-700" />
                    {/* Location pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                      <div className="w-5 h-5 bg-black rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    {/* Mechanic dots */}
                    <div className="absolute top-5 left-8 w-2.5 h-2.5 bg-white rounded-full opacity-60" />
                    <div className="absolute top-10 right-10 w-2.5 h-2.5 bg-white rounded-full opacity-60" />
                    <div className="absolute bottom-8 left-14 w-2.5 h-2.5 bg-white rounded-full opacity-60" />
                  </div>

                  {/* Nearby mechanic — Uber ride card style */}
                  <div className="bg-neutral-900 rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-xs font-black">CW</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold">Caroline W.</p>
                      <p className="text-neutral-500 text-[10px]">800m • 4.9 ★ • 5 min ETA</p>
                    </div>
                    <button className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-lg flex-shrink-0">
                      Request
                    </button>
                  </div>
                </div>

                {/* Bottom nav — Uber style */}
                <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-neutral-900 px-4 py-3">
                  <div className="flex justify-around">
                    {[
                      { label: "Home", active: true, icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
                      )},
                      { label: "Activity", active: false, icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                      )},
                      { label: "Wallet", active: false, icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                        </svg>
                      )},
                      { label: "Account", active: false, icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
                        </svg>
                      )},
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-0.5">
                        <span className={item.active ? "text-white" : "text-neutral-600"}>
                          {item.icon}
                        </span>
                        <span className={`text-[8px] font-medium ${item.active ? "text-white" : "text-neutral-600"}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification cards — Uber style */}
              <div className="absolute -left-20 top-24 bg-white rounded-2xl p-3 shadow-2xl w-44">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                  <span className="text-black text-xs font-bold">Mechanic Found</span>
                </div>
                <p className="text-neutral-500 text-[10px]">Caroline • 5 min away</p>
              </div>

              <div className="absolute -right-16 bottom-36 bg-white rounded-2xl p-3 shadow-2xl w-36">
                <div className="text-neutral-500 text-[10px] mb-1">Total</div>
                <div className="text-black text-sm font-black">$220.00</div>
                <div className="text-green-600 text-[10px] mt-1 font-semibold">✓ Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
