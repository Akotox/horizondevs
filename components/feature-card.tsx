import React from 'react';

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ index, title, description }) => {
  return (
    <div className="mb-3">
      <div className="text-[14px] font-semibold text-white">
        {index + 1}. {title}
      </div>
      <p className="text-white text-[12px] ml-5">{description}</p>
    </div>
  );
};

export default FeatureCard;