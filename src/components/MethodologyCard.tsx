import React from 'react';

interface CardContent {
  description: string;
  points: string[];
}

export interface Card {
    id: string;
    title: string;
    subtitle: string;
    content: CardContent;
  }

interface MethodologyCardProps extends Omit<Card, 'content'> {
  title: string;
  subtitle: string;
  content: CardContent;
  isExpanded: boolean;
  onHover: (id: string | null) => void;
  id: string;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({ title, subtitle, content, isExpanded, onHover, id }) => (
  <div 
    className={`flex-1 p-6 ${isExpanded ? 'bg-gray-200' : 'bg-gray-300'} transition-all duration-300 ease-in-out cursor-pointer`}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    <h3 className="text-2xl font-extrabold mb-2 font-generalsans">{title}</h3>
    <p className="text-base mb-2 font-generalsans font-semibold">{subtitle}</p>
    {isExpanded && (
      <div className="mt-4">
        <p className="text-sm mb-4 font-generalsans">{content.description}</p>
        <ul className="list-disc pl-5 text-sm">
          {content.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    )}
    <div className="mt-4 flex justify-center">
      <svg className={`w-16 text-gray-400 transition duration-300 transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

  export default MethodologyCard;