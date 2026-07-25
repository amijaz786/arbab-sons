"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-green-700 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Arbab & Sons Logo"
          width={100}
          height={50}
          priority
          className="h-auto w-auto max-w-full"
        />

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 items-center text-white">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/cordyceps" className="hover:text-yellow-400">Cordyceps</a>
          <a href="/herbal-remedies" className="hover:text-yellow-400">Herbal Remedies</a>
          <a href="/wellness" className="hover:text-yellow-400">Wellness</a>
          <a href="/about" className="hover:text-yellow-400">About Us</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
          <a href="/shop" className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 font-semibold text-sm">Shop</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-4 pb-4 bg-green-800 text-white">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/cordyceps" className="hover:text-yellow-400">Cordyceps</a>
          <a href="/herbal-remedies" className="hover:text-yellow-400">Herbal Remedies</a>
          <a href="/wellness" className="hover:text-yellow-400">Wellness</a>
          <a href="/about" className="hover:text-yellow-400">About Us</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
          <a href="/shop" className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 font-semibold text-sm">Shop</a>
        </div>
      )}
    </header>
  );
}
