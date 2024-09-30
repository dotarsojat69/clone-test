import React from 'react';

export interface PortfolioItem {
  title: string;
  imageUrl: string;
}

const PortfolioCard: React.FC<PortfolioItem> = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-2">
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
      <h3 className="text-lg text-white font-generalsans font-semibold">{title}</h3>
    </div>
  );
};

export default PortfolioCard