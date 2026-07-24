export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg text-yellow-300">Arbab & Sons</h3>
          <p className="text-sm">Esenyurt, Istanbul, Türkiye</p>
          <p className="text-sm">Email: ies_y5k@yahoo.co.uk</p>
          <p className="text-sm">Phone: +90 535 265 6549</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400">Facebook</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400">Instagram</a>
          <a href="https://twitter.com" target="_blank" className="hover:text-yellow-400">Twitter</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-400">LinkedIn</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Arbab & Sons. All rights reserved.
      </div>
    </footer>
  );
}
