import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, role, description, imageUrl }) => {

  return (
    <div className="bg-white rounded-2xl lg:shadow-lg p-6 lg:hover:scale-110 lg:hover:shadow-2xl transition-all" id='team'>
      <img src={imageUrl} alt={name} className="w-48 lg:-mt-24 mx-auto rounded-full" />
      <h3 className="text-xl font-bold text-center font-generalsans">{name}</h3>
      <p className="text-black text-center mb-2 font-generalsans font-semibold">{role}</p>
      <p className="text-sm text-black text-center italic font-generalsans">{description}</p>
    </div>
  );
};

export default TeamCard;