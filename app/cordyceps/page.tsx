import Image from "next/image";

export default function Cordyceps() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Cordyceps Products</h1>
      <Image 
        src="/images/cordyceps.jpg" 
        alt="Cordyceps Extract" 
        width={400} 
        height={300} 
        className="rounded-lg shadow-lg"
      />
      <p className="mt-4 text-gray-700 text-center max-w-xl">
        Discover our premium Cordyceps extracts, known for boosting energy and supporting immunity.
      </p>
    </main>
  );
}
