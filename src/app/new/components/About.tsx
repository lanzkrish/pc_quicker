import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-black text-white px-6 py-20 flex flex-col md:flex-row items-center">
      <Image src="/laptop-5673901_1280 1.png" alt="Laptop" width={400} height={300} className="md:w-1/2 mb-6 md:mb-0" />
      <div className="md:ml-12 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Driven by Passion for Computers</h2>
        <p className="mb-4">
          We believe in bringing reliability, transparency, and convenience to laptop servicing...
        </p>
        <button className="bg-fuchsia-600 text-white px-6 py-3 rounded hover:bg-fuchsia-700">
          LEARN MORE →
        </button>
      </div>
    </section>
  );
};

export default About;
