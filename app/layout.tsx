import "./globals.css";
import Image from "next/image";
import Footer from "./components/Footer";   // ✅ add this

export const metadata = {
  title: "Arbab & Sons",
  description: "Premium Herbal Medicine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-green-700 sticky top-0 z-50">
          <Image
            src="/images/logo.png"
            alt="Arbab & Sons Logo"
            width={100}
            height={50}
            priority
            className="h-auto w-auto drop-shadow-lg"
          />

          <nav className="flex gap-6 items-center">
            <a href="/" className="hover:text-yellow-400">Home</a>
            <a href="/cordyceps" className="hover:text-yellow-400">Cordyceps</a>
            <a href="/herbal-remedies" className="hover:text-yellow-400">Herbal Remedies</a>
            <a href="/wellness" className="hover:text-yellow-400">Wellness</a>
            <a href="/about" className="hover:text-yellow-400">About Us</a>
            <a href="/contact" className="hover:text-yellow-400">Contact</a>
            <a href="/shop" className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 font-semibold text-sm">Shop</a>
          </nav>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer />   {/* ✅ add this back */}
      </body>
    </html>
  );
}
