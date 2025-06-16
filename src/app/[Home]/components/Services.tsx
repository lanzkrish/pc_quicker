import Image from "next/image";

type Service = {
    title: string;
    desc: string;
    img: string;
  };
  
  const services: Service[] = [
    {
      title: "Screen Replacement: Quick and reliable service for your laptop's display.",
      desc: "Get your screen replaced efficiently by our skilled technicians.",
      img: '/assets/screen-replace.png',
    },
    {
      title: "RAM/Storage Upgrade: Enhance your laptop's performance with our expert upgrades.",
      desc: "Boost your laptop's speed and storage capacity with our upgrade services.", 
      img: '/assets/ram-upgrade.png',
    },
    {
      title: 'Explore our range of expert laptop repair services today!',
      desc: "From screen replacements to upgrades, we handle it all with precision.",
      img: '/assets/error-check.png',
    },
  ];
  
  const Services = () => {
    return (
      <section className=" text-black bg-white ">
         <div className=" py-20 pt-6 max-w-7xl mx-auto px-10">
          <h3 className='md:ml-20 mt-0 md:mt-20 mb-6 text-center md:text-left  text-3xl font-semibold text-purple-600'>Our Services</h3>
        <h2 className="text-xl md:ml-20 font-bold mb-6 ">We offer Comprehensive Computer Services to meet all your laptop needs.</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6 mx-auto max-w-7xl">
          {services.map(({ title, desc, img }, index) => (
            <div key={index} className=" rounded-lg p-4 mx-auto hover:shadow-lg transition-shadow duration-300">
              <Image src={img} alt={title}
               className="mb-4 rounded mx-auto"
               width={240}
                height={316}
                 />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
         </div>
      </section>
    );
  };
  
  export default Services;
  