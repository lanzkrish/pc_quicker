'use client';
import Link from 'next/link';

const CTA = () => (
  <section className="bg-gradient-to-r from-purple-300 via-fuchsia-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black py-12 px-6 transition-colors duration-500">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-purple-600 mb-2">
        Get Your Laptop Fixed Fast
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-3xl">
        Experience hassle free repairs with our expert technicians. Book your
        service today and enjoy transparent pricing and timely updates.
      </p>
    </div>
    <Link
      href="/book-now"
      className="inline-block px-4 py-3 bg-fuchsia-600 text-white font-semibold hover:bg-fuchsia-600 dark:hover:bg-fuchsia-500 transition-colors text-lg shadow"
    >
      Book Now
    </Link>
  </div>
</section>

);

export default CTA;