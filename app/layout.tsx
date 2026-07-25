import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Arbab & Sons",
  description: "Premium Herbal Medicine",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="flex flex-col sm:flex-row justify-between items-center py-4 bg-green-700 sticky top-0 z-50 rounded-md">
            <Image
              src="/images/logo.png"
              alt="Arbab & Sons Logo"
              width={100}
              height={50}
              priority
              className="h-auto w-auto max-w-full mb-2 sm:mb-0"
            />

            <nav className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center sm:justify-end">
              <a href="/" className="hover:text-yellow-400 text-sm sm:text-base">Home</a>
              <a href="/cordyceps" className="hover:text-yellow-400 text-sm sm:text-base">Cordyceps</a>
              <a href="/herbal-remedies" className="hover:text-yellow-400 text-sm sm:text-base">Herbal Remedies</a>
              <a href="/wellness" className="hover:text-yellow-400 text-sm sm:text-base">Wellness</a>
              <a href="/about" className="hover:text-yellow-400 text-sm sm:text-base">About Us</a>
              <a href="/contact" className="hover:text-yellow-400 text-sm sm:text-base">Contact</a>
              <a href="/shop" className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 font-semibold text-xs sm:text-sm">Shop</a>
            </nav>
          </header>

          {/* Page Content */}
          <main className="py-6">{children}</main>

          {/* Footer */}
          <footer className="py-6 bg-green-700 text-white rounded-md">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
