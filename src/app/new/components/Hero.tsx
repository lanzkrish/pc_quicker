'use client'
// import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-white"
      style={{
        backgroundImage: "url('/keyboard-5017973 1.png')",
      }}
    >
      <section className="text-white flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-20 h-full mx-0 md:mx-14">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Restore Your <br />
            Laptop to Peak <br />
            Performance
          </h1>
          <button className="bg-purple-600 text-white px-10 py-4 rounded hover:bg-purple-700">
            BOOK NOW
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          {/* <Image src="/keyboard-5017973 1.png" alt="Laptop" width={2500} height={2400} /> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
