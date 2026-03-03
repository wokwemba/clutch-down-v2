"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Reusable phone frame wrapper
function PhoneFrame({ children, label, onClick, isActive }: { 
  children: React.ReactNode; 
  label: string; 
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div 
        className={`w-48 bg-neutral-950 rounded-[2rem] border overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
          isActive ? "border-white shadow-2xl shadow-white/10" : "border-neutral-800"
        }`}
        onClick={onClick}
      >
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
      <span className={`text-xs font-medium ${isActive ? "text-white" : "text-neutral-600"}`}>{label}</span>
    </div>
  );
}

// Screen: Onboarding
function OnboardingScreen({ onNext }: { onNext?: () => void }) {
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
      <button 
        onClick={onNext}
        className="w-full bg-white text-black text-[10px] font-black py-2.5 rounded-xl hover:bg-neutral-200 transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}

// Screen: Sign Up
function SignUpScreen({ onSignUp, onGoogle, onFacebook }: { 
  onSignUp?: () => void;
  onGoogle?: () => void;
  onFacebook?: () => void;
}) {
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
      <button 
        onClick={onSignUp}
        className="w-full bg-white text-black text-[10px] font-black py-2 rounded-xl mb-2 hover:bg-neutral-200 transition-colors"
      >
        Sign Up
      </button>
      <div className="text-center text-neutral-600 text-[8px]">or</div>
      <div className="space-y-1.5 mt-2">
        <button 
          onClick={onGoogle}
          className="w-full bg-neutral-900 text-neutral-400 text-[9px] font-medium py-2 rounded-xl hover:bg-neutral-800 transition-colors"
        >
          Sign up with Gmail
        </button>
        <button 
          onClick={onFacebook}
          className="w-full bg-neutral-900 text-neutral-400 text-[9px] font-medium py-2 rounded-xl hover:bg-neutral-800 transition-colors"
        >
          Sign up with Facebook
        </button>
      </div>
    </div>
  );
}

// Screen: OTP Verification
function OTPScreen({ onVerify }: { onVerify?: () => void }) {
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
      <button 
        onClick={onVerify}
        className="w-full bg-white text-black text-[10px] font-black py-2.5 rounded-xl mb-2 hover:bg-neutral-200 transition-colors"
      >
        Verify & Proceed
      </button>
      <p className="text-center text-neutral-600 text-[8px]">Didn&apos;t receive code? <span className="text-white">Resend</span></p>
    </div>
  );
}

// Screen: Home / Map
function HomeScreen({ onNavigate }: { onNavigate?: (tab: string) => void }) {
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
        <div 
          className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 mb-3 cursor-pointer"
          onClick={() => onNavigate?.("search")}
        >
          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-neutral-500 text-[9px]">Where would you go?</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 mb-3">
          {[
            { icon: "🔧", label: "Mechanic", key: "mechanic" },
            { icon: "🚗", label: "Towing", key: "towing" },
            { icon: "⛽", label: "Fuel", key: "fuel" },
            { icon: "🔩", label: "Parts", key: "parts" },
          ].map((item) => (
            <div 
              key={item.key}
              onClick={() => onNavigate?.(item.key)}
              className="bg-neutral-900 rounded-xl p-2 flex flex-col items-center gap-1 cursor-pointer hover:bg-neutral-800 transition-colors"
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-neutral-600 text-[7px]">{item.label}</span>
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
        <div 
          className="bg-neutral-900 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer hover:bg-neutral-800 transition-colors"
          onClick={() => onNavigate?.("mechanic")}
        >
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
        {[
          { label: "Home", key: "home", icon: "🏠" },
          { label: "Parts", key: "parts", icon: "🔩" },
          { label: "Request", key: "request", icon: "📋" },
          { label: "Wallet", key: "wallet", icon: "💳" },
          { label: "Profile", key: "profile", icon: "👤" },
        ].map((item) => (
          <div 
            key={item.key}
            onClick={() => onNavigate?.(item.key)}
            className="flex flex-col items-center gap-0.5 cursor-pointer"
          >
            <span className={`text-[10px] ${item.key === "home" ? "text-white" : "text-neutral-600"}`}>{item.icon}</span>
            <span className={`text-[6px] ${item.key === "home" ? "text-white" : "text-neutral-600"}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Screen: Mechanic Request
function MechanicScreen({ onRequest }: { onRequest?: () => void }) {
  const [selectedIssue, setSelectedIssue] = useState("Engine");
  
  const issues = ["Engine", "Body Works", "Electrical", "Tires"];
  
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
            <button className="bg-white text-black text-[7px] font-black px-2 py-1 rounded-lg">Go</button>
          </div>
        ))}
      </div>
      <div className="bg-neutral-900 rounded-xl p-2.5 mb-3">
        <p className="text-neutral-500 text-[8px] mb-1.5">Select Issue</p>
        <div className="grid grid-cols-2 gap-1">
          {issues.map((issue) => (
            <div 
              key={issue}
              onClick={() => setSelectedIssue(issue)}
              className={`rounded-lg p-1.5 text-center text-[8px] font-semibold cursor-pointer transition-colors ${
                selectedIssue === issue ? "bg-white text-black" : "bg-neutral-800 text-neutral-500 hover:bg-neutral-700"
              }`}
            >
              {issue}
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={onRequest}
        className="w-full bg-white text-black text-[9px] font-black py-2 rounded-xl hover:bg-neutral-200 transition-colors"
      >
        Request Mechanic
      </button>
    </div>
  );
}

// Screen: Spare Parts
function SparePartsScreen({ onAddToCart }: { onAddToCart?: () => void }) {
  const [cartCount, setCartCount] = useState(0);
  
  const parts = [
    { name: "DFT Water Pump AW4126", brand: "Volkswagen", type: "Original", price: "OMR 187" },
    { name: "Radiator Fan Motor", brand: "Toyota", type: "Duplicate", price: "OMR 40" },
  ];
  
  const handleAdd = () => {
    setCartCount(cartCount + 1);
    onAddToCart?.();
  };
  
  return (
    <div className="p-4 pb-2">
      <div className="flex items-center justify-between mb-3">
        <div className="text-white text-[10px] font-black">Spare Parts</div>
        <div className="bg-white text-black text-[8px] font-black px-2 py-0.5 rounded-full">
          {cartCount} 🛒
        </div>
      </div>
      <div className="bg-neutral-900 rounded-xl px-3 py-2 flex items-center gap-2 mb-3">
        <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-neutral-500 text-[9px]">Search spare parts...</span>
      </div>
      <div className="space-y-2 mb-3">
        {parts.map((part) => (
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
              <button 
                onClick={handleAdd}
                className="text-neutral-500 text-[7px] hover:text-white transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-neutral-900 rounded-xl p-2.5">
        <p className="text-neutral-500 text-[8px] mb-1">Popular Suppliers</p>
        <div className="flex gap-1.5 flex-wrap">
          {["Royal Auto", "Unique Auto", "Safa Parts"].map((s) => (
            <span key={s} className="bg-neutral-800 text-neutral-400 text-[7px] px-2 py-0.5 rounded-full cursor-pointer hover:bg-neutral-700 transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Screen: Wallet
function WalletScreen({ onAddMoney }: { onAddMoney?: () => void }) {
  const [selectedMethod, setSelectedMethod] = useState("**** **** **** 8970");
  
  const methods = [
    { label: "**** **** **** 8970", exp: "12/26", active: true },
    { label: "Cash", exp: "", active: false },
    { label: "M-Pesa", exp: "", active: false },
  ];
  
  return (
    <div className="p-4 pb-2">
      <div className="text-white text-[10px] font-black mb-3">Wallet</div>
      <div className="bg-white rounded-2xl p-4 mb-3">
        <p className="text-neutral-500 text-[8px] mb-1">Available Balance</p>
        <p className="text-black text-xl font-black">$570.00</p>
        <p className="text-neutral-500 text-[8px] mt-1">Total Spent: $220.00</p>
      </div>
      <div className="space-y-1.5 mb-3">
        {methods.map((m) => (
          <div 
            key={m.label}
            onClick={() => setSelectedMethod(m.label)}
            className={`rounded-xl p-2.5 flex items-center gap-2 cursor-pointer transition-colors ${
              selectedMethod === m.label ? "bg-neutral-900 border border-white" : "bg-neutral-900 hover:bg-neutral-800"
            }`}
          >
            <div className="w-6 h-4 bg-neutral-700 rounded-sm flex-shrink-0" />
            <span className="text-white text-[9px] flex-1">{m.label}</span>
            {m.exp && <span className="text-neutral-500 text-[8px]">{m.exp}</span>}
          </div>
        ))}
      </div>
      <button 
        onClick={onAddMoney}
        className="w-full bg-white text-black text-[9px] font-black py-2 rounded-xl hover:bg-neutral-200 transition-colors"
      >
        Add Money
      </button>
    </div>
  );
}

// Screen: Profile
function ProfileScreen({ onNavigate }: { onNavigate?: (item: string) => void }) {
  const menuItems = [
    { icon: "🚗", label: "My Vehicles" },
    { icon: "📋", label: "History" },
    { icon: "💳", label: "Payment Methods" },
    { icon: "🎁", label: "Offers & Referrals" },
    { icon: "⚙️", label: "Settings" },
    { icon: "❓", label: "Help & Support" },
  ];
  
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
        {menuItems.map((item) => (
          <div 
            key={item.label}
            onClick={() => onNavigate?.(item.label)}
            className="bg-neutral-900 rounded-xl px-3 py-2.5 flex items-center gap-2.5 cursor-pointer hover:bg-neutral-800 transition-colors"
          >
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
function WorkshopScreen({ onBook }: { onBook?: () => void }) {
  const workshops = [
    { name: "Auto King Workshop", loc: "Muscat, Oman", dist: "2.5 km", rating: "4.9", tags: ["Engine", "Body"] },
    { name: "Adonz Automotive", loc: "Westlands, Kenya", dist: "4.1 km", rating: "4.7", tags: ["Painting"] },
    { name: "DG Automotive", loc: "Muscat, Oman", dist: "7.5 km", rating: "4.6", tags: ["Tires"] },
  ];
  
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
        {workshops.map((w) => (
          <div key={w.name} className="bg-neutral-900 rounded-xl p-2.5">
            <div className="flex items-center justify-between mb-1">
              <p className="text-white text-[9px] font-bold">{w.name}</p>
              <span className="text-neutral-400 text-[8px]">{w.rating}★</span>
            </div>
            <p className="text-neutral-500 text-[8px] mb-1.5">{w.loc} • {w.dist}</p>
            <div className="flex gap-1 mb-1.5">
              {w.tags.map((t) => (
                <span key={t} className="bg-neutral-800 text-neutral-500 text-[7px] px-1.5 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <button 
              onClick={onBook}
              className="w-full bg-white text-black text-[8px] font-black py-1.5 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppPage() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState<string>("onboarding");
  const [cartCount, setCartCount] = useState(0);
  
  const handleNext = () => {
    const screenOrder = ["onboarding", "signup", "otp", "home"];
    const currentIndex = screenOrder.indexOf(currentScreen);
    if (currentIndex < screenOrder.length - 1) {
      setCurrentScreen(screenOrder[currentIndex + 1]);
    }
  };
  
  const handleNavigate = (tab: string) => {
    setCurrentScreen(tab);
  };
  
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  
  const handleBook = () => {
    alert("Workshop booked successfully!");
  };
  
  const handleAddMoney = () => {
    alert("Add money flow opened!");
  };
  
  const renderScreen = () => {
    const props = {
      onNext: handleNext,
      onSignUp: handleNext,
      onGoogle: handleNext,
      onFacebook: handleNext,
      onVerify: handleNext,
      onNavigate: handleNavigate,
      onAddToCart: handleAddToCart,
      onAddMoney: handleAddMoney,
      onBook: handleBook,
      onRequest: () => alert("Mechanic requested!"),
    };
    
    switch (currentScreen) {
      case "onboarding":
        return <OnboardingScreen {...props} />;
      case "signup":
        return <SignUpScreen {...props} />;
      case "otp":
        return <OTPScreen {...props} />;
      case "home":
        return <HomeScreen {...props} />;
      case "mechanic":
        return <MechanicScreen {...props} />;
      case "parts":
        return <SparePartsScreen {...props} />;
      case "wallet":
        return <WalletScreen {...props} />;
      case "profile":
        return <ProfileScreen {...props} />;
      case "workshop":
        return <WorkshopScreen {...props} />;
      default:
        return <OnboardingScreen {...props} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="bg-neutral-900 border-b border-neutral-800 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="text-white text-sm font-medium hover:text-neutral-300 transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-white text-sm font-black">CAR-DIOLOGY APP</h1>
          <div className="w-12" />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <PhoneFrame label={currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1)} isActive>
          {renderScreen()}
        </PhoneFrame>
      </main>
      
      {/* Quick Nav */}
      <nav className="bg-neutral-900 border-t border-neutral-800 px-4 py-2">
        <div className="max-w-md mx-auto flex justify-around">
          {["onboarding", "signup", "otp", "home", "mechanic", "parts", "wallet", "profile", "workshop"].map((screen) => (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`text-[10px] px-2 py-1 rounded ${
                currentScreen === screen 
                  ? "bg-white text-black font-black" 
                  : "text-neutral-500 hover:text-white transition-colors"
              }`}
            >
              {screen.slice(0, 4)}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
