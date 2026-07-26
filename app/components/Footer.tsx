export default function Footer() {
  return (
    <footer className="bg-green-900 text-yellow-200 py-8 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg text-yellow-300 tracking-wide">
            Arbab & Sons
          </h3>
          <p className="text-sm text-green-100">Esenyurt, Istanbul, Türkiye</p>
          <p className="text-sm text-green-100">Email: ies_y5k@yahoo.co.uk</p>
          <p className="text-sm text-green-100">Phone: +90 535 265 6549</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400 transition-colors">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400 transition-colors">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-yellow-400 transition-colors">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm text-green-200 mt-6 italic">
        © {new Date().getFullYear()} Arbab & Sons — Premium Herbal Medicine. All rights reserved.
      </div>
    </footer>
  );
}
