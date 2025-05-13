type Service = {
    title: string;
    desc: string;
    img: string;
  };
  
  const services: Service[] = [
    {
      title: 'Screen Replacement',
      desc: 'Restore display clarity...',
      img: '/assets/screen-replace.jpg',
    },
    {
      title: 'RAM/Storage Upgrade',
      desc: 'Boost performance...',
      img: '/assets/ram-upgrade.jpg',
    },
    {
      title: 'General Error Diagnosis',
      desc: 'Diagnose crashes and more...',
      img: '/assets/error-check.jpg',
    },
  ];
  
  const Services = () => {
    return (
      <section className="px-6 py-20 text-black bg-white">
        <h2 className="text-3xl font-bold mb-6">Comprehensive Computer Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, desc, img }, index) => (
            <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg">
              <img src={img} alt={title} className="mb-4 rounded" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  