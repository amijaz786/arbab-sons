"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-green-900 sticky top-0 z-50 border-b border-green-900">
      {/* Inner container aligned with hero/footer */}
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Arbab & Sons Logo"
          width={150}
          height={80}
          priority
          className="h-auto w-auto drop-shadow-lg"
        />

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-10 items-center text-yellow-100 font-medium text-lg">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/cordyceps" className="hover:text-yellow-400">Cordyceps</a>
          <a href="/herbal-remedies" className="hover:text-yellow-400">Herbal Remedies</a>
          <a href="/wellness" className="hover:text-yellow-400">Wellness</a>
          <a href="/about" className="hover:text-yellow-400">About Us</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
          <a href="/shop" className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 font-semibold shadow-md">
            Shop
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-yellow-100 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-4 pb-4 bg-green-800 text-yellow-100">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/cordyceps" className="hover:text-yellow-400">Cordyceps</a>
          <a href="/herbal-remedies" className="hover:text-yellow-400">Herbal Remedies</a>
          <a href="/wellness" className="hover:text-yellow-400">Wellness</a>
          <a href="/about" className="hover:text-yellow-400">About Us</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
          <a href="/shop" className="bg-yellow-400 text-black px-5 py-2 rounded-md hover:bg-yellow-500 font-semibold shadow-md">
            Shop
          </a>
        </div>
      )}
    </header>
  );
}
