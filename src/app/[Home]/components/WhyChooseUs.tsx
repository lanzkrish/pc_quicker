import Image from "next/image";

const features = [
  {
    title: "Expert Technicians",
    description: "Our team consists of highly trained professionals with years of experience in laptop repairs."
  },
  {
    title: "Easy Online Booking",
    description: "Book your repair service online in just a few clicks, anytime and anywhere."
  },
  {
    title: "Timely Updates",
    description: "Stay informed with real-time updates on your device’s repair status."
  },
  {
    title: "Trust & Transparency",
    description: "We believe in honest communication and transparent pricing for all our services."
  },
  {
    title: "Doorstep Pickup & Delivery",
    description: "Enjoy hassle-free pickup and delivery of your device right at your doorstep."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white px-6 py-20 relative  mx-auto overflow-hidden">
      <div className="relative z-40 max-w-7xl mx-auto text-left px-10">
        <h2 className="text-3xl font-bold mb-6 text-purple-600">
          Why Choose Our Expert Laptop Repair Services for Your Device?
        </h2>
        <p className="mb-8 max-w-xl">
          Our mission is to eliminate the frustration that often comes with laptop servicing and create a customer-first experience powered by technology and trust.
        </p>
        <div className="max-w-5xl gap-6 mb-8">
          <ul className="grid md:grid-cols-3 gap-4">
            {features.map((item, i) => (
              <li key={i} className="bg-gray-800/50 p-4 rounded shadow">
                <div className="font-semibold text-lg mb-1 text-purple-600">{item.title}</div>
                <div className="text-gray-300 text-sm">{item.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gradient and Circles */}
      <div className="absolute inset-0 z-10 pointer-events-none" />

      <div className="flex justify-center relative z-20">
        <Image
          src="/why_choose_us.png"
          alt="Why Choose Us"
          width={1124}
          height={851}
          className="rounded-lg shadow-lg  md:-mt-130 md:-mr-120 -mr-40 -mt-90"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
