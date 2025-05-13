const WhyChooseUs = () => {
    const features = [
      'Expert Technicians',
      'Easy Online Booking',
      'Timely Updates',
      'Trust & Transparency',
      'Doorstep Pickup & Delivery',
    ];
  
    return (
      <section className="bg-black text-white px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">Why Choose Us?</h2>
        <p className="mb-8 max-w-xl">
          Our mission is to eliminate the frustration that often comes with laptop servicing...
        </p>
        <ul className="grid md:grid-cols-3 gap-4">
          {features.map((item, i) => (
            <li key={i} className="bg-gray-800 p-4 rounded shadow">
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default WhyChooseUs;
  