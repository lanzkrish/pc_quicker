import Image from 'next/image';

const About = () => {
  return (
   <div className='overflow-hidden bg-black'>
    <h3 className=' mt-6 md:ml-20 md:mt-20  text-center md:text-left  text-3xl font-semibold text-purple-600 '>About Us</h3>
     <section className="bg-black text-white px-6 py-20 flex flex-col md:flex-row items-center">
      <Image src="/laptop-5673901_1280 1.png" alt="Laptop" width={400} height={300} className="md:w-1/2 mb-6 md:-mb-35 md:-ml-6" />
      
      <div className="md:ml-12 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Driven by Passion for Computers</h2>
        <p className="mb-4">
          At pcQuicker.com, we prioritize transparency and convenience in every repair.
          Our certified technicians provide expert at-home diagnostics to ensure your laptop is in the best hands.
        </p>
        <button className="bg-fuchsia-600 text-white px-6 py-3  hover:bg-fuchsia-700 mt-10 ">
          LEARN MORE →
        </button>
      </div>
      
    </section>
   </div>
  );
};

export default About;
