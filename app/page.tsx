import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-green-800 text-white">
      
      {/* Hero Section */}
      <section className="w-full text-center py-12">
        <div className="max-w-screen-lg mx-auto px-2">
          <h1 className="font-extrabold whitespace-nowrap text-3xl sm:text-5xl md:text-6xl mb-2 bg-gradient-to-r from-yellow-400 via-green-400 to-green-700 bg-clip-text text-transparent drop-shadow-lg">
            Arbab & Sons
          </h1>
          <h2 className="text-base sm:text-xl uppercase tracking-widest text-green-200 mb-6">
            Premium Herbal Medicine
          </h2>
          <p className="text-sm sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover the healing power of Cordyceps and natural remedies. 
            Our herbal wellness products are crafted to restore balance, 
            boost vitality, and support a healthy lifestyle.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 font-semibold text-sm sm:text-base">
              Explore Products
            </a>
            <a href="/about" className="border border-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black font-semibold text-sm sm:text-base">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Product 1 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6">
          <Image 
            src="/images/cordyceps.jpg" 
            alt="Cordyceps Extract" 
            width={400} 
            height={300} 
            loading="eager"
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg font-bold mb-2">Cordyceps Extract</h3>
          <p className="text-gray-600 mb-2">$49.99</p>
          <p className="text-sm text-gray-500">Boosts energy and supports immunity</p>
        </div>

        {/* Product 2 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6">
          <Image 
            src="/images/herbal-tea.jpg" 
            alt="Herbal Tea Blend" 
            width={400} 
            height={300} 
            loading="eager"
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg font-bold mb-2">Herbal Tea Blend</h3>
          <p className="text-gray-600 mb-2">$19.99</p>
          <p className="text-sm text-gray-500">Relaxing mix of natural herbs</p>
        </div>

        {/* Product 3 */}
        <div className="bg-white text-black rounded-lg shadow-lg p-6">
          <Image 
            src="/images/wellness-capsules.jpg" 
            alt="Wellness Capsules" 
            width={400} 
            height={300} 
            loading="eager"
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg font-bold mb-2">Wellness Capsules</h3>
          <p className="text-gray-600 mb-2">$29.99</p>
          <p className="text-sm text-gray-500">Daily support for vitality</p>
        </div>
      </section>
    </main>
  );
}

