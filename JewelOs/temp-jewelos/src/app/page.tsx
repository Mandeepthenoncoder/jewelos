import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to JewelOS</h1>
      <p className="text-xl mb-8">
        The all-in-one platform for jewelry retailers
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/login" 
          className="px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800"
        >
          Login
        </Link>
        <Link 
          href="/about" 
          className="px-6 py-3 border border-neutral-300 rounded-md hover:bg-neutral-50"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
}
