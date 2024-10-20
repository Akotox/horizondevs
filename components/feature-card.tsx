import React from 'react';

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ index, title, description }) => {
  return (
    <div className="mb-3">
      <div className="text-[14px] font-bold text-white">
        {index}. {title}
      </div>
      <p className="text-gray-300 text-[14px] ml-5">{description}</p>
    </div>
  );
};

export default FeatureCard;