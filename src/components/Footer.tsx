import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900">
      {/* CTA Banner — Uber style full-width black */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight tracking-tight mb-4">
                Don&apos;t get stranded.<br />
                Download the app.
              </h2>
              <p className="text-neutral-600 text-lg mb-8 max-w-md">
                Join thousands of drivers who trust Car-diology for all their car service needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-black text-white font-semibold px-7 py-4 rounded-xl hover:bg-neutral-900 transition-colors flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </button>
                <button className="bg-black text-white font-semibold px-7 py-4 rounded-xl hover:bg-neutral-900 transition-colors flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zM20.7 10.37l-2.7-1.56-3.56 3.56 3.56 3.56 2.72-1.57c.78-.45.78-1.54-.02-1.99zM3 1.24L14.59 12.83l-3.18 3.18L3 4.24V1.24zM3.18.24c-.3-.17-.64-.24-.99-.2L14.79 12.6l-3.18-3.18L3.18.24z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
            {/* Mini app preview */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-56 bg-black rounded-[2.5rem] border border-neutral-800 p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-xs font-semibold">9:41</span>
                  <div className="w-12 h-4 bg-neutral-900 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-2">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-neutral-500 text-[10px]">What do you need?</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {["🔧", "🚗", "⛽", "🔩"].map((icon, i) => (
                      <div key={i} className="bg-neutral-900 rounded-xl p-2 flex items-center justify-center text-base">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="bg-neutral-900 rounded-xl h-20 relative overflow-hidden">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                      backgroundSize: "12px 12px"
                    }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                      <div className="w-3 h-3 bg-white rounded-full border border-black" />
                    </div>
                  </div>
                  <div className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2">
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-[8px] font-black">CW</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-[9px] font-semibold">Caroline W.</p>
                      <p className="text-neutral-500 text-[8px]">800m • 5 min</p>
                    </div>
                    <button className="bg-white text-black text-[8px] font-bold px-2 py-1 rounded-md">Go</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-white font-black text-2xl tracking-tight mb-4">
              Car-diology
            </div>
            <p className="text-neutral-500 leading-relaxed mb-6 max-w-xs text-sm">
              Your one pit stop car service platform. Find mechanics, spare parts, and workshops — anytime, anywhere.
            </p>
            <div className="flex gap-2">
              {["T", "F", "I", "L"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-neutral-900 hover:bg-neutral-800 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-neutral-400 text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">Services</h4>
            <ul className="space-y-3">
              {["Find a Mechanic", "Towing Service", "Spare Parts", "Workshop Booking", "Roadside Assistance"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Press", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-bold text-white mb-3 text-sm">Contact</h4>
              <p className="text-neutral-500 text-sm">support@cardiology.app</p>
              <p className="text-neutral-500 text-sm mt-1">+254 700 000 000</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            © 2024 Car-diology. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-neutral-600 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
