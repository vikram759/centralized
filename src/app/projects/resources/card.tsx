import React from "react";
import './card.css';

interface CardProps {
    id: number;
    image: string;
    role: string;
    techStack: string;
    company: string;
    companyInfo: string;
    timeline: string;
    price: string;
}

const Card: React.FC<CardProps> = ({ id, image, role, techStack, company, companyInfo, timeline, price }) => {
  return (
    <div className="relative w-[350px] h-[250px] bg-transparent perspective-1000 transform-gpu duration-500 hover:translate-z-0 hover:shadow-lg hover:scale-[1.2]">
      <div className="relative h-full w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center backface-hidden">
          <img src={image} alt="" className="w-[250px] mt-4" />
          <p>Project {id}</p>
          <p>{role}</p>
          <p>Tech Stack: {techStack}</p>
        </div>
        <div className="absolute w-full h-full rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col items-center justify-center backface-hidden transform rotate-y-180 shadow-lg">
          <p className="text-2xl text-white font-bold mt-4">{company}</p>
          <p className="text-2xl text-white font-bold mt-4">{companyInfo}</p>
          <p className="text-2xl text-white font-bold mt-4">{timeline}</p>
          <p className="text-lg text-white font-semibold mt-2">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
