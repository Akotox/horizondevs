// components/ImageCard.tsx
import React from 'react';

interface ImageCardProps {
    id: string;
    imageUrl: string;
    height: number;
    width: number;
    alt: string;
    projectType: string; // New prop for project type
}
import Link from 'next/link';


const ImageCard: React.FC<ImageCardProps> = ({id, imageUrl, height, width, alt, projectType }) => {
    return (
        <div className="relative hover:scale-103" >
            <div className="absolute top-2 left-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full border border-white hover:bg-red-600">
                {projectType}
            </div>
            <Link href="projects/[id]" as={`/projects/${id}`}>
            <img 
                className="w-full rounded-xl shadow " 
                src={imageUrl} 
                width={width} 
                height={height} 
                alt={alt} 
            />
            </Link>
          
        </div>
    );
};

export default ImageCard;
