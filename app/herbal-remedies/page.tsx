import Image from "next/image";

export default function HerbalRemedies() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Herbal Remedies</h1>
      <Image 
        src="/images/herbal-tea.jpg" 
        alt="Herbal Tea Blend" 
        width={400} 
        height={300} 
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-gray-700 text-center max-w-xl">
        Explore natural remedies crafted from traditional herbs to restore balance and vitality.
      </p>
    </main>
  );
}
