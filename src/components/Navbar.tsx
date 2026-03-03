"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Uber-style wordmark logo */}
            <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" fill="white" letterSpacing="-1">Car</text>
              <text x="38" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" fill="white" letterSpacing="-1">-diology</text>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="#dashboard" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              How It Works
            </Link>
            <Link href="#pricing" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              Safety
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-white hover:text-neutral-300 transition-colors text-sm font-medium px-4 py-2">
              Log in
            </button>
            <button className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors hover:bg-neutral-200">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-900 px-4 py-6 flex flex-col gap-5">
          <Link href="#features" className="text-white text-base font-medium" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#dashboard" className="text-white text-base font-medium" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link href="#pricing" className="text-white text-base font-medium" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="#" className="text-white text-base font-medium" onClick={() => setMenuOpen(false)}>Safety</Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-neutral-900">
            <button className="text-white text-sm font-medium py-3 text-left">Log in</button>
            <button className="bg-white text-black text-sm font-semibold px-5 py-3 rounded-lg">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
