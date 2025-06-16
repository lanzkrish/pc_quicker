'use client';
import { useRouter } from 'next/navigation';

const ThankYou = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-fuchsia-100">
      <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 max-w-md w-full text-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">Thank You!</h1>
        <p className="text-gray-700 mb-8">Your submission has been received successfully.</p>
        <button
          onClick={goHome}
          className="px-6 py-3 bg-fuchsia-600 text-white rounded-md font-semibold hover:bg-fuchsia-700 transition-colors"
        >
          Go to Homepage
        </button>
      </div>
      {/* Tailwind animation utility */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ThankYou;