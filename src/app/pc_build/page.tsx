import Image from "next/image";

const pcBuildSections = [
  {
    title: "Tailored Performance",
    description:
      "Select the perfect balance of CPU, GPU, RAM, and storage to match your gaming, creative, or professional needs. Every build is uniquely optimized for you.",
    image: "/pc_build/pc_performance.jpg",
    orientation: "left",
  },
  {
    title: "Future-Proof Hardware",
    description:
      "Stay ahead with the latest generation of processors, graphics cards, and memory modules—ready to handle tomorrow’s challenges today.",
    image: "/pc_build/pc_futureproof.jpg",
    orientation: "right",
  },
  {
    title: "Premium Cooling Solutions",
    description:
      "From advanced liquid cooling to silent airflow systems, our PCs are built to stay cool and efficient under heavy workloads.",
    image: "/pc_build/pc_cooling.jpg",
    orientation: "left",
  },
  {
    title: "RGB & Aesthetic Customization",
    description:
      "Design a PC that reflects your style—minimalist matte finishes or vibrant RGB builds with immersive lighting effects.",
    image: "/pc_build/pc_rgb.jpg",
    orientation: "right",
  },
  {
    title: "Expert Assembly",
    description:
      "Every component is carefully cable-managed, tested, and stress-checked by expert technicians for top-tier performance.",
    image: "/pc_build/pc_expert.jpg",
    orientation: "left",
  },
  {
    title: "Warranty & Support",
    description:
      "Enjoy peace of mind with extended warranties, lifetime technical support, and upgrade-friendly builds.",
    image: "/pc_build/pc_support.jpg",
    orientation: "right",
  },
];

const CustomPCBuild = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-500">
      {/* Hero Header */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <Image
          src="/pc_build/pc_hero.jpg"
          alt="Custom PC Background"
          fill
          priority
          className="object-cover object-center brightness-45"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-600 dark:text-purple-500 mb-6 drop-shadow-lg">
            Build Your Dream Custom PC
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Crafted for performance, aesthetics, and future-proof power.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-32 py-20">
        {pcBuildSections.map((section, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-16 ${
              section.orientation === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={section.image}
                alt={section.title}
                width={1000}
                height={100}
                className="rounded-2xl shadow-lg object-cover h-[500px]"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-500">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Book Now / Contact Us Section */}
      <div className="py-20 text-center border-t border-gray-200 dark:border-gray-800 transition-colors">
        <h2 className="text-4xl font-bold text-purple-600 dark:text-purple-500 mb-6">
          Ready to Build Your PC?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Get in touch with our experts and bring your dream setup to life.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg"
          >
            Contact Us
          </a>
          <a
            href="/book-now"
            className="border border-purple-600 hover:bg-purple-600 hover:text-white text-purple-600 dark:text-purple-500 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomPCBuild;
