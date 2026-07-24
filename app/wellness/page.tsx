import Image from "next/image";

export default function Wellness() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Wellness Collection</h1>
      <Image 
        src="/images/wellness-capsules.jpg" 
        alt="Wellness Capsules" 
        width={400} 
        height={300} 
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-gray-700 text-center max-w-xl">
        Support your daily health with our wellness capsules designed for modern lifestyles.
      </p>
    </main>
  );
}
