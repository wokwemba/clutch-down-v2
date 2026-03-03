// Reusable phone frame wrapper
function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-48 bg-neutral-950 rounded-[2rem] border border-neutral-800 overflow-hidden shadow-xl">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1">
          <span className="text-white text-[9px] font-semibold">10:30</span>
          <div className="w-10 h-3 bg-black rounded-full" />
          <div className="flex gap-0.5">
            <div className="w-0.5 h-2 bg-white rounded-sm opacity-40" />
            <div className="w-0.5 h-2.5 bg-white rounded-sm opacity-60" />
            <div className="w-0.5 h-3 bg-white rounded-sm opacity-80" />
            <div className="w-0.5 h-3.5 bg-white rounded-sm" />
          </div>
        </div>
        {children}
      </div>
      <span className="text-neutral-600 text-xs font-medium">{label}</span>
    </div>
  );
}

// Screen: Onboarding
function OnboardingScreen() {
  return (
    <div className="p-4 pb-5">
      <div className="bg-neutral-900 rounded-2xl h-32 mb-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "14px 14px"
        }} />
        <div className="relative text-center">
          <div className="text-3xl mb-1">🔧</div>
          <div className="text-white text-xs font-black">CAR-DIOLOGY</div>
        </div>
      </div>
      <div className="text-white text-sm font-black mb-1">At Anytime,</div>
      <div className="text-white text-sm font-black mb-2">Anywhere</div>
      <p className="text-neutral-500 text-[10px] mb-4">Don&apos;t be stranded. Find a mechanic near you.</p>
      <div className="flex gap-1 justify-center mb-4">
        <div className="w-4 h-1 bg-white rounded-full" />
        <div className="w-1 h-1 bg-neutral-700 rounded-full" />
        <div className="w-1 h-1 bg-neutral-700 rounded-full" />
      </div>
      <button className="w-full bg-white text-black text-[10px] font-black py-2.5 rounded-xl">Get Started</button>
    </div>
  );
}

// Screen: Sign Up
function SignUpScreen() {
  return (
    <div className="p-4 pb-5">
      <div className="text-white text-xs font-black mb-4">Create Account</div>
      <div className="space-y-2 mb-3">
        <div className="bg-neutral-900 rounded-lg px-3 py-2">
          <div className="text-neutral-600 text-[8px]">Full Name</div>
          <div className="text-white text-[10px]">Nate Samson</div>
        </div>
        <div className="bg-neutral-900 rounded-lg px-3 py-2">
          <div className="text-neutral-600 text-[8px]">Email or Phone</div>
          <div className="text-white text-[10px]">nate@email.com</div>
        </div>
        <div className="bg-neutral-900 rounded-lg px-3 py-2">
          <div className="text-neutral-600 text-[8px]">Password</div>
          <div className="text-white text-[10px]">••••••••</div>
        </div>
      </div>
      <button className="w-full bg-white text-black text-[10px] font-black py-2 rounded-xl mb-2">Sign Up</button>
      <div className="text-center text-neutral-600 text-[8px]">or</div>
      <div className="space-y-1.5 mt-2">
        {["Sign up with Gmail", "Sign up with Facebook"].map((s) => (
          <button key={s} className="w-full bg-neutral-900 text-neutral-400 text-[9px] font-medium py-2 rounded-xl">{s}</button>
        ))}
      </div>
    </div>
  );
}

// Screen: OTP Verification
function OTPScreen() {
  return (
    <div className="p-4 pb-5">
      <div className="text-white text-xs font-black mb-1">Phone Verification</div>
      <p className="text-neutral-500 text-[9px] mb-4">Enter the OTP sent to +254 724 589 654</p>
      <div className="flex gap-2 justify-center mb-4">
        {["3", "5", "4", "8"].map((d, i) => (
          <div key={i} className={`w-9 h-10 rounded-xl flex items-center justify-center text-sm font-black ${i < 3 ? "bg-white text-black" : "bg-neutral-900 text-white border border-white"}`}>
            {d}
          </div>
        ))}
      </div>
      <button className="w-full bg-white text-black text-[10px] font-black py-2.5 rounded-xl mb-2">Verify & Proceed</button>
      <p className="text-center text-neutral-600 text-[8px]">Didn&apos;t receive code? <span className="text-white">Resend</span></p>
    </div>
  );
}

// Screen: Home / Map
function HomeScreen() {
  return (
    <div className="pb-2">
      <div className="px-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-neutral-500 text-[9px]">Good Evening!</p>
            <p className="text-white text-xs font-black">Nate Samson</p>
          </div>
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-[8px] font-black">NS</span>
          </div>
        </div>
        <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 mb-3">
          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-neutral-500 text-[9px]">Where would you go?</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 mb-3">
          {["🔧", "🚗", "⛽", "🔩"].map((icon, i) => (
            <div key={i} className="bg-neutral-900 rounded-xl p-2 flex flex-col items-center gap-1">
              <span className="text-sm">{icon}</span>
              <span className="text-neutral-600 text-[7px]">{["Mechanic", "Towing", "Fuel", "Parts"][i]}</span>
            </div>
          ))}
        </div>
        <div className="bg-neutral-900 rounded-xl h-20 relative overflow-hidden mb-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "12px 12px"
          }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
            <div className="w-3 h-3 bg-white rounded-full border border-black" />
          </div>
          <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
          <div className="absolute bottom-3 right-5 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
        </div>
        <div className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-[7px] font-black">CW</span>
          </div>
          <div className="flex-1">
            <p className="text-white text-[9px] font-semibold">Caroline W.</p>
            <p className="text-neutral-500 text-[8px]">800m • 4.9★ • 5 min</p>
          </div>
          <button className="bg-white text-black text-[8px] font-black px-2 py-1 rounded-lg">Call</button>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="border-t border-neutral-900 px-3 py-2 flex justify-around">
        {["Home", "Parts", "Request", "Wallet", "Profile"].map((item, i) => (
          <div key={item} className="flex flex-col items-center gap-0.5">
            <div className={`w-3 h-3 rounded-sm ${i === 0 ? "bg-white" : "bg-neutral-800"}`} />
            <span className={`text-[6px] ${i === 0 ? "text-white" : "text-neutral-600"}`}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Screen: Mechanic Request
function MechanicScreen() {
  return (
    <div className="p-4 pb-2">
      <div className="text-white text-[10px] font-black mb-3">Available Mechanics</div>
      <div className="space-y-2 mb-3">
        {[
          { name: "Caroline Washington", dist: "800m", rating: "4.9", specialty: "Engine" },
          { name: "Arianna Washington", dist: "1.1km", rating: "4.8", specialty: "Electrical" },
        ].map((m) => (
          <div key={m.name} className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black text-[7px] font-black">{m.name.split(" ").map(n => n[0]).join("")}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[9px] font-semibold truncate">{m.name}</p>
              <p className="text-neutral-500 text-[8px]">{m.dist} • {m.rating}★ • {m.specialty}</p>
            </div>
            <button className="bg-white text-black text-[7px] font-black px-2 py-1 rounded-lg flex-shrink-0">Go</button>
          </div>
        ))}
      </div>
      <div className="bg-neutral-900 rounded-xl p-2.5 mb-3">
        <p className="text-neutral-500 text-[8px] mb-1.5">Select Issue</p>
        <div className="grid grid-cols-2 gap-1">
          {["Engine", "Body Works", "Electrical", "Tires"].map((issue, i) => (
            <div key={issue} className={`rounded-lg p-1.5 text-center text-[8px] font-semibold ${i === 0 ? "bg-white text-black" : "bg-neutral-800 text-neutral-500"}`}>
              {issue}
            </div>
          ))}
        </div>
      </div>
      <button className="w-full bg-white text-black text-[9px] font-black py-2 rounded-xl">Request Mechanic</button>
    </div>
  );
}

// Screen: Spare Parts
function SparePartsScreen() {
  return (
    <div className="p-4 pb-2">
      <div className="text-white text-[10px] font-black mb-3">Spare Parts</div>
      <div className="bg-neutral-900 rounded-xl px-3 py-2 flex items-center gap-2 mb-3">
        <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-neutral-500 text-[9px]">Search spare parts...</span>
      </div>
      <div className="space-y-2 mb-3">
        {[
          { name: "DFT Water Pump AW4126", brand: "Volkswagen", type: "Original", price: "OMR 187" },
          { name: "Radiator Fan Motor", brand: "Toyota", type: "Duplicate", price: "OMR 40" },
        ].map((part) => (
          <div key={part.name} className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2">
            <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-neutral-500 text-xs">⚙️</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[9px] font-semibold truncate">{part.name}</p>
              <p className="text-neutral-500 text-[8px]">{part.brand} • {part.type}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white text-[10px] font-black">{part.price}</p>
              <button className="text-neutral-500 text-[7px]">Add</button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-neutral-900 rounded-xl p-2.5">
        <p className="text-neutral-500 text-[8px] mb-1">Popular Suppliers</p>
        <div className="flex gap-1.5 flex-wrap">
          {["Royal Auto", "Unique Auto", "Safa Parts"].map((s) => (
            <span key={s} className="bg-neutral-800 text-neutral-400 text-[7px] px-2 py-0.5 rounded-full">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Screen: Wallet
function WalletScreen() {
  return (
    <div className="p-4 pb-2">
      <div className="text-white text-[10px] font-black mb-3">Wallet</div>
      <div className="bg-white rounded-2xl p-4 mb-3">
        <p className="text-neutral-500 text-[8px] mb-1">Available Balance</p>
        <p className="text-black text-xl font-black">$570.00</p>
        <p className="text-neutral-500 text-[8px] mt-1">Total Spent: $220.00</p>
      </div>
      <div className="space-y-1.5 mb-3">
        {[
          { label: "**** **** **** 8970", exp: "12/26", active: true },
          { label: "Cash", exp: "", active: false },
          { label: "M-Pesa", exp: "", active: false },
        ].map((m) => (
          <div key={m.label} className={`rounded-xl p-2.5 flex items-center gap-2 ${m.active ? "bg-neutral-900 border border-white" : "bg-neutral-900"}`}>
            <div className="w-6 h-4 bg-neutral-700 rounded-sm flex-shrink-0" />
            <span className="text-white text-[9px] flex-1">{m.label}</span>
            {m.exp && <span className="text-neutral-500 text-[8px]">{m.exp}</span>}
          </div>
        ))}
      </div>
      <button className="w-full bg-white text-black text-[9px] font-black py-2 rounded-xl">Add Money</button>
    </div>
  );
}

// Screen: Profile
function ProfileScreen() {
  return (
    <div className="p-4 pb-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-black text-sm font-black">NS</span>
        </div>
        <div>
          <p className="text-white text-xs font-black">Nate Samson</p>
          <p className="text-neutral-500 text-[9px]">nate@email.com</p>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { icon: "🚗", label: "My Vehicles" },
          { icon: "📋", label: "History" },
          { icon: "💳", label: "Payment Methods" },
          { icon: "🎁", label: "Offers & Referrals" },
          { icon: "⚙️", label: "Settings" },
          { icon: "❓", label: "Help & Support" },
        ].map((item) => (
          <div key={item.label} className="bg-neutral-900 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
            <span className="text-sm">{item.icon}</span>
            <span className="text-white text-[10px] font-medium flex-1">{item.label}</span>
            <svg className="w-3 h-3 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

// Screen: Workshop
function WorkshopScreen() {
  return (
    <div className="p-4 pb-2">
      <div className="text-white text-[10px] font-black mb-3">Workshops</div>
      <div className="bg-neutral-900 rounded-xl px-3 py-2 flex items-center gap-2 mb-3">
        <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-neutral-500 text-[9px]">Search workshops...</span>
      </div>
      <div className="space-y-2">
        {[
          { name: "Auto King Workshop", loc: "Muscat, Oman", dist: "2.5 km", rating: "4.9", tags: ["Engine", "Body"] },
          { name: "Adonz Automotive", loc: "Westlands, Kenya", dist: "4.1 km", rating: "4.7", tags: ["Painting"] },
          { name: "DG Automotive", loc: "Muscat, Oman", dist: "7.5 km", rating: "4.6", tags: ["Tires"] },
        ].map((w) => (
          <div key={w.name} className="bg-neutral-900 rounded-xl p-2.5">
            <div className="flex items-center justify-between mb-1">
              <p className="text-white text-[9px] font-bold">{w.name}</p>
              <span className="text-neutral-400 text-[8px]">{w.rating}★</span>
            </div>
            <p className="text-neutral-500 text-[8px] mb-1.5">{w.loc} • {w.dist}</p>
            <div className="flex gap-1 mb-1.5">
              {w.tags.map((t) => (
                <span key={t} className="bg-neutral-800 text-neutral-500 text-[7px] px-1.5 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            <button className="w-full bg-white text-black text-[8px] font-black py-1.5 rounded-lg">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const screenGroups = [
  {
    title: "Onboarding",
    description: "Smooth onboarding flow with skip option",
    screens: [
      { component: <OnboardingScreen />, label: "Welcome" },
      { component: <SignUpScreen />, label: "Sign Up" },
      { component: <OTPScreen />, label: "Verify OTP" },
    ],
  },
  {
    title: "Core App",
    description: "Main app screens for daily use",
    screens: [
      { component: <HomeScreen />, label: "Home" },
      { component: <MechanicScreen />, label: "Mechanic" },
      { component: <SparePartsScreen />, label: "Spare Parts" },
    ],
  },
  {
    title: "More Features",
    description: "Workshop booking, wallet & profile",
    screens: [
      { component: <WorkshopScreen />, label: "Workshop" },
      { component: <WalletScreen />, label: "Wallet" },
      { component: <ProfileScreen />, label: "Profile" },
    ],
  },
];

export default function AppScreensSection() {
  return (
    <section className="py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest mb-4">App Preview</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl">
            Every screen,<br />
            <span className="text-neutral-400">beautifully designed.</span>
          </h2>
        </div>

        {/* Screen groups */}
        <div className="space-y-20">
          {screenGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-8">
                <h3 className="text-xl font-black text-white mb-1">{group.title}</h3>
                <p className="text-neutral-500 text-sm">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                {group.screens.map((screen) => (
                  <PhoneFrame key={screen.label} label={screen.label}>
                    {screen.component}
                  </PhoneFrame>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* App roles banner */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900">
          {[
            {
              role: "Car Owner",
              icon: "🚗",
              features: ["Find mechanics near you", "Order spare parts", "Book workshops", "Track service in real-time", "Secure payments"],
            },
            {
              role: "Mechanic",
              icon: "🔧",
              features: ["Receive job requests", "Manage your schedule", "Track earnings", "Build your reputation", "24/7 availability"],
            },
            {
              role: "Supplier / Workshop",
              icon: "🏭",
              features: ["List spare parts", "Manage enquiries", "Workshop bookings", "Analytics dashboard", "Customer chat"],
            },
          ].map((role) => (
            <div key={role.role} className="bg-black p-8">
              <div className="text-3xl mb-4">{role.icon}</div>
              <h3 className="text-white font-black text-lg mb-4">{role.role}</h3>
              <ul className="space-y-2">
                {role.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-neutral-500 text-sm">
                    <svg className="w-3.5 h-3.5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
