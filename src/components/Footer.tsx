import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white mb-4">
            Don&apos;t Get Stranded
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of drivers who trust Car-diology for all their car service needs. Download the app today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-500 font-semibold px-8 py-4 rounded-full hover:bg-red-50 transition-colors flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </button>
            <button className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-12.6-3.18-3.18L3.18 23.76zM20.7 10.37l-2.7-1.56-3.56 3.56 3.56 3.56 2.72-1.57c.78-.45.78-1.54-.02-1.99zM3 1.24L14.59 12.83l-3.18 3.18L3 4.24V1.24zM3.18.24c-.3-.17-.64-.24-.99-.2L14.79 12.6l-3.18-3.18L3.18.24z"/>
              </svg>
              Google Play
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
                  <path d="M12 6v6l4 2-1 1.73-5-2.73V6H12z" fill="white"/>
                </svg>
              </div>
              <span className="font-space-grotesk font-bold text-xl text-white">
                Car<span className="text-red-500">-diology</span>
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-xs">
              Your one pit stop car service platform. Find mechanics, spare parts, and workshops — anytime, anywhere.
            </p>
            <div className="flex gap-3">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-neutral-400 text-xs capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {["Find a Mechanic", "Towing Service", "Spare Parts", "Workshop Booking", "Roadside Assistance"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Press", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-space-grotesk font-semibold text-white mb-3">Contact</h4>
              <p className="text-neutral-400 text-sm">support@cardiology.app</p>
              <p className="text-neutral-400 text-sm mt-1">+254 700 000 000</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © 2024 Car-diology. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-neutral-500 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
