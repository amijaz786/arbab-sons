import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";

// Import Google Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function Home() {
  return (
    <main className="bg-green-900 text-white w-full min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="flex-grow w-full text-center py-12">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className={`${playfair.className} font-extrabold whitespace-nowrap text-3xl sm:text-5xl md:text-6xl mb-2 bg-gradient-to-r from-yellow-400 via-green-400 to-green-700 bg-clip-text text-transparent drop-shadow-lg`}
          >
            Arbab & Sons
          </h1>
          <h2
            className={`${playfair.className} text-base sm:text-xl uppercase tracking-widest text-yellow-200 mb-6`}
          >
            Premium Herbal Medicine
          </h2>
          <p
            className={`${poppins.className} italic text-sm sm:text-lg text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed`}
          >
            Discover the healing power of Cordyceps and natural remedies. 
            Our herbal wellness products are crafted to restore balance, 
            boost vitality, and support a healthy lifestyle.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 shadow-md font-semibold text-sm sm:text-base transition-transform hover:scale-105"
            >
              Explore Products
            </a>
            <a
              href="/about"
              className="border border-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black shadow-md font-semibold text-sm sm:text-base transition-transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Product 1 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <Image 
            src="/images/cordyceps.jpg" 
            alt="Cordyceps Extract" 
            width={400} 
            height={300} 
            loading="eager"
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className={`${playfair.className} text-lg font-bold mb-2`}>Cordyceps Extract</h3>
          <p className="text-gray-600 mb-2">$49.99</p>
          <p className={`${poppins.className} text-sm text-gray-500 italic`}>Boosts energy and supports immunity</p>
        </div>

        {/* Product 2 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <Image 
            src="/images/herbal-tea.jpg" 
            alt="Herbal Tea Blend" 
            width={400} 
            height={300} 
            loading="eager"
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className={`${playfair.className} text-lg font-bold mb-2`}>Herbal Tea Blend</h3>
          <p className="text-gray-600 mb-2">$19.99</p>
          <p className={`${poppins.className} text-sm text-gray-500 italic`}>Relaxing mix of natural herbs</p>
        </div>

        {/* Product 3 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <Image 
            src="/images/wellness-capsules.jpg" 
            alt="Wellness Capsules" 
            width={400} 
            height={300} 
            loading="eager"
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className={`${playfair.className} text-lg font-bold mb-2`}>Wellness Capsules</h3>
          <p className="text-gray-600 mb-2">$29.99</p>
          <p className={`${poppins.className} text-sm text-gray-500 italic`}>Daily support for vitality</p>
        </div>
      </section>
    </main>
  );
}

