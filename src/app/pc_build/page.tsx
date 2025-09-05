import Image from "next/image";

const pcBuildSections = [
  {
    title: "Tailored Performance",
    description:
      "Select the perfect balance of CPU, GPU, RAM, and storage to match your gaming, creative, or professional needs. Every build is uniquely optimized for you.",
    image: "/pc_build/pc_performance.jpg", // replace with your vertical/horizontal image
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
    <section className="bg-black text-white mb-5">
      {/* Page Header */}
      {/* <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-purple-600 mb-6">
          Build Your Dream Custom PC
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Designed for power, performance, and aesthetics—crafted with the same
          precision and elegance you expect from world-class machines.
        </p>
      </div> */}

      {/* Hero Header with Background Image */}
      <div className="relative w-full h-[700px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/pc_build/pc_hero.jpg" // Replace with your hero background image
          alt="Custom PC Background"
          fill
          priority
          className="object-cover object-center brightness-25"
        />

        {/* Overlay Text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-500 mb-6 drop-shadow-lg">
            Build Your Dream Custom PC
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
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
              <h2 className="text-3xl font-bold mb-4 text-purple-600">
                {section.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomPCBuild;
 