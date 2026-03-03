"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
                <path d="M12 6v6l4 2-1 1.73-5-2.73V6H12z" fill="white"/>
              </svg>
            </div>
            <span className="font-space-grotesk font-bold text-xl text-white">
              Car<span className="text-red-500">-diology</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="#dashboard" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              Dashboard
            </Link>
            <Link href="#diagnostics" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              Diagnostics
            </Link>
            <Link href="#pricing" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-neutral-400 hover:text-white transition-colors text-sm font-medium px-4 py-2">
              Sign In
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neutral-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <div className="md:hidden bg-neutral-950 border-t border-neutral-800 px-4 py-4 flex flex-col gap-4">
          <Link href="#features" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="#dashboard" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link href="#diagnostics" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>Diagnostics</Link>
          <Link href="#pricing" className="text-neutral-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <div className="flex flex-col gap-2 pt-2 border-t border-neutral-800">
            <button className="text-neutral-400 hover:text-white transition-colors text-sm font-medium py-2 text-left">Sign In</button>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
}
