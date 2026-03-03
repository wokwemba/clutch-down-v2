const steps = [
  {
    number: "01",
    title: "Sign Up & Set Location",
    description: "Create your account with email or phone. Enable location to find services near you instantly. Register your vehicle details.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    screen: (
      <div className="bg-neutral-950 rounded-2xl p-4 space-y-3">
        <div className="text-white text-xs font-bold mb-3">Sign Up</div>
        <div className="bg-neutral-900 rounded-lg px-3 py-2.5">
          <div className="text-neutral-600 text-[10px] mb-0.5">Full Name</div>
          <div className="text-white text-xs">Nate Samson</div>
        </div>
        <div className="bg-neutral-900 rounded-lg px-3 py-2.5">
          <div className="text-neutral-600 text-[10px] mb-0.5">Email or Phone</div>
          <div className="text-white text-xs">nate@email.com</div>
        </div>
        <div className="bg-neutral-900 rounded-lg px-3 py-2.5">
          <div className="text-neutral-600 text-[10px] mb-0.5">Password</div>
          <div className="text-white text-xs">••••••••</div>
        </div>
        <button className="w-full bg-white text-black text-xs font-bold py-2.5 rounded-lg">Sign Up</button>
        <div className="text-center text-neutral-600 text-[9px]">or continue with Gmail · Facebook · Apple</div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Register Your Vehicle",
    description: "Add your car make, model, year, and fuel type. Upload your Mulkiya for verified service and accurate part matching.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2z" />
      </svg>
    ),
    screen: (
      <div className="bg-neutral-950 rounded-2xl p-4 space-y-3">
        <div className="text-white text-xs font-bold mb-3">Register Your Car</div>
        <div className="bg-neutral-900 rounded-lg px-3 py-2.5 flex items-center justify-between">
          <div>
            <div className="text-neutral-600 text-[10px]">Manufacturer</div>
            <div className="text-white text-xs font-medium">Hyundai</div>
          </div>
          <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </div>
        <div className="bg-neutral-900 rounded-lg px-3 py-2.5 flex items-center justify-between">
          <div>
            <div className="text-neutral-600 text-[10px]">Model</div>
            <div className="text-white text-xs font-medium">i20 Active</div>
          </div>
          <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-neutral-900 rounded-lg px-3 py-2.5">
            <div className="text-neutral-600 text-[10px]">Year</div>
            <div className="text-white text-xs font-medium">2021</div>
          </div>
          <div className="bg-neutral-900 rounded-lg px-3 py-2.5">
            <div className="text-neutral-600 text-[10px]">Fuel</div>
            <div className="text-white text-xs font-medium">Petrol</div>
          </div>
        </div>
        <button className="w-full bg-white text-black text-xs font-bold py-2.5 rounded-lg">Continue</button>
      </div>
    ),
  },
  {
    number: "03",
    title: "Select Your Service",
    description: "Choose from mechanic call-out, towing, spare parts, workshop booking, or roadside assistance — all in one tap.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    screen: (
      <div className="bg-neutral-950 rounded-2xl p-4 space-y-3">
        <div className="text-white text-xs font-bold mb-3">What do you need?</div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: "🔧", label: "Call Mechanic", active: true },
            { icon: "🚗", label: "Towing", active: false },
            { icon: "🔩", label: "Spare Parts", active: false },
            { icon: "🏭", label: "Workshop", active: false },
          ].map((s) => (
            <div key={s.label} className={`rounded-xl p-3 flex flex-col items-center gap-1.5 ${s.active ? "bg-white" : "bg-neutral-900"}`}>
              <span className="text-lg">{s.icon}</span>
              <span className={`text-[9px] font-semibold ${s.active ? "text-black" : "text-neutral-400"}`}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-neutral-900 rounded-xl p-3">
          <div className="text-neutral-500 text-[10px] mb-2">Select Issue</div>
          <div className="flex flex-wrap gap-1.5">
            {["Engine", "Body Works", "Electrical", "Tires"].map((issue, i) => (
              <span key={issue} className={`text-[9px] font-semibold px-2.5 py-1 rounded-full ${i === 0 ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"}`}>{issue}</span>
            ))}
          </div>
        </div>
        <button className="w-full bg-white text-black text-xs font-bold py-2.5 rounded-lg">Request Mechanic</button>
      </div>
    ),
  },
  {
    number: "04",
    title: "Track & Pay Securely",
    description: "Track your mechanic in real-time. Pay with card, cash, or M-Pesa. Rate your experience after service.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    screen: (
      <div className="bg-neutral-950 rounded-2xl p-4 space-y-3">
        <div className="text-white text-xs font-bold mb-1">Payment</div>
        <div className="bg-neutral-900 rounded-xl p-3 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-neutral-500">Mechanic/hr</span>
            <span className="text-white font-semibold">$200</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-neutral-500">VAT (5%)</span>
            <span className="text-white font-semibold">$20</span>
          </div>
          <div className="h-px bg-neutral-800" />
          <div className="flex justify-between text-xs">
            <span className="text-white font-bold">Total</span>
            <span className="text-white font-black">$220</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-neutral-900 rounded-lg px-3 py-2.5 flex items-center gap-2">
            <div className="w-6 h-4 bg-neutral-700 rounded-sm" />
            <span className="text-white text-[10px]">**** **** **** 8970</span>
            <span className="ml-auto text-neutral-500 text-[9px]">12/26</span>
          </div>
          <div className="bg-neutral-900 rounded-lg px-3 py-2.5 flex items-center gap-2">
            <span className="text-white text-[10px]">💵</span>
            <span className="text-white text-[10px]">Cash</span>
          </div>
        </div>
        <button className="w-full bg-white text-black text-xs font-bold py-2.5 rounded-lg">Confirm Payment</button>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="dashboard" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest mb-4">Simple Process</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
            Up and running<br />
            <span className="text-neutral-400">in 4 steps.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-neutral-800 z-0" style={{width: 'calc(100% - 3rem)', left: '3rem'}} />
              )}

              <div className="relative z-10">
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-neutral-700 text-4xl font-black leading-none">{step.number}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm mb-5">
                  {step.description}
                </p>

                {/* Mini screen preview */}
                <div className="border border-neutral-800 rounded-2xl overflow-hidden">
                  {step.screen}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-start">
          <button className="bg-white text-black font-bold px-8 py-4 rounded-lg text-base hover:bg-neutral-200 transition-colors">
            Get Started Now
          </button>
          <button className="bg-neutral-900 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-neutral-800 transition-colors border border-neutral-800">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
