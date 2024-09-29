import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconPath: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconPath }) => {
  return (
    <div className="card rounded-xl shadow-custom-drop bg-white h-96 w-72 p-7 flex flex-col items-center justify-center card-animation">
      <div className="flex items-center justify-center mb-4 rounded-full">
        <img src={iconPath} alt={title} className="w-14" />
      </div>
      <h5 className="font-bold text-xl text-center mb-4 text-black">{title}</h5>
      <p className="text-gray-600 text-base text-center my-5 font-medium font-generalsans">{description}</p>
      <a href="#" className="font-generalsans font-semibold text-base hover:text-blue-900 underline text-black">
        View More
      </a>
    </div>
  );
};

export default ServiceCard;
