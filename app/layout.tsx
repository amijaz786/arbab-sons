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
      <body className="bg-white text-gray-900">
        {/* Header (Client Component) */}
        <Header />

        {/* Page Content */}
        <main className="w-full px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-green-700 text-white px-4 sm:px-6 lg:px-8 py-6">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
