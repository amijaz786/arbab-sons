import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Arbab & Sons",
  description: "Premium Herbal Medicine",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
        
        {/* Header - full width bar */}
        <header className="w-full bg-green-900 text-yellow-200 px-4 sm:px-6 lg:px-8 py-4 shadow-md">
          <Header />
        </header>

        {/* Page Content - flex-grow ensures it fills space */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer - full width bar with aligned content */}
        <footer className="w-full bg-green-900 text-yellow-200 py-8">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}

