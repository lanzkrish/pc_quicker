'use client'

import Link from "next/link";

// import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover  bg-right bg-white"
      style={{
        backgroundImage: "url('/keyboard-5017973 1.png')",
      }}
    >
      <section className="text-white bg-black/55  items-center justify-center flex flex-col md:flex-row h-full">
       <div className=" flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-20 h-full  md:mx-14 lg:max-w-9xl  max-w-7xl mx-auto">
         <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Restore Your 
            Laptop to Peak <br />
            Performance
          </h1>
          <p className="mb-10 text">Experience lightining fast laptop repairs with our certified technicians. We prioritize transparency and convenience to get you back to work in no time.</p>
          
          <Link href="/book-now" className=" bg-purple-600 text-white px-12 py-6  hover:bg-purple-700 transition-colors rounded-full text-lg font-medium shadow-lg">
            Book Now
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          {/* <Image src="/keyboard-5017973 1.png" alt="Laptop" width={2500} height={2400} /> */}
        </div>
       </div>
      </section>
    </div>
  );
};

export default Hero;
