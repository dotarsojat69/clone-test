import ServiceCard from "./ServicesCard";


const services = [
  {
    title: 'Website Maintenance',
    description:
      'Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime, backups, and updates handled by experts.',
    iconPath: '/images/Maintenance.png',
  },
  {
    title: 'Website & App Development',
    description:
      'Transform your online presence with our custom website design solutions. From stunning visuals to seamless user experiences, we build it all.',
    iconPath: '/images/website.png',
  },
  {
    title: 'IT Support',
    description:
      'Experience peace of mind with our reliable IT support services. From troubleshooting to server maintenance, we ensure your technology is always running smoothly.',
    iconPath: '/images/IT Support.png',
  },
  {
    title: '3rd Party AI Solution',
    description:
      'Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provide the perfect solutions.',
    iconPath: '/images/3rd Party.png',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#1e293b] flex items-center justify-center py-40 text-white">
      <div className="flex flex-col gap-5">
        <h1 className="sm:text-center xl:text-left text-5xl sm:mx-0 mx-10 my-10 font-orbitron font-bold">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-10 mr-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconPath={service.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
