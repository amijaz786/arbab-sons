import Image from "next/image";

export default function Shop() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12">
        Our Herbal Collection
      </h1>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/images/cordyceps.jpg" 
            alt="Cordyceps Extract" 
            width={400} 
            height={300} 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Cordyceps Extract</h3>
            <p className="text-gray-600 mb-2">$49.99</p>
            <p className="text-sm text-gray-500 mb-4">Boosts energy and supports immunity</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/images/herbal-tea.jpg" 
            alt="Herbal Tea Blend" 
            width={400} 
            height={300} 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Herbal Tea Blend</h3>
            <p className="text-gray-600 mb-2">$19.99</p>
            <p className="text-sm text-gray-500 mb-4">Relaxing mix of natural herbs</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/images/wellness-capsules.jpg" 
            alt="Wellness Capsules" 
            width={400} 
            height={300} 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Wellness Capsules</h3>
            <p className="text-gray-600 mb-2">$29.99</p>
            <p className="text-sm text-gray-500 mb-4">Daily support for vitality</p>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
