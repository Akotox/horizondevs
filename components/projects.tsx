// pages/projects.tsx
import React from 'react';
import ImageCard from './image-card';
import Link from 'next/link';

const imageData = [
    { id: "67149523be816f00b5d0a5f0", url: "https://cruip-tutorials.vercel.app/masonry/masonry-01.jpg", height: 290, width: 232, alt: "Image 01", projectType: "Web App" },
    { id: "2", url: "https://cruip-tutorials.vercel.app/masonry/masonry-02.jpg", height: 290, width: 232, alt: "Image 02", projectType: "E-wallet" },
    { id: "3", url: "https://cruip-tutorials.vercel.app/masonry/masonry-03.jpg", height: 174, width: 232, alt: "Image 03", projectType: "UI Design" },
    { id: "4", url: "https://cruip-tutorials.vercel.app/masonry/masonry-04.jpg", height: 155, width: 232, alt: "Image 04", projectType: "E-commerce" },
    { id: "5", url: "https://cruip-tutorials.vercel.app/masonry/masonry-05.jpg", height: 349, width: 232, alt: "Image 05", projectType: "News app" },
    { id: "6", url: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg", height: 250, width: 232, alt: "Image 06", projectType: "Travel app" },
    { id: "7", url: "https://cruip-tutorials.vercel.app/masonry/masonry-07.jpg", height: 349, width: 232, alt: "Image 07", projectType: "Dashboard" },
    { id: "8", url: "https://cruip-tutorials.vercel.app/masonry/masonry-08.jpg", height: 155, width: 232, alt: "Image 08", projectType: "Blog" },
    { id: "9", url: "https://cruip-tutorials.vercel.app/masonry/masonry-09.jpg", height: 250, width: 232, alt: "Image 09", projectType: "Food Delivery" },
    { id: "10", url: "https://cruip-tutorials.vercel.app/masonry/masonry-10.jpg", height: 290, width: 232, alt: "Image 10", projectType: "Game" },
    { id: "11", url: "https://cruip-tutorials.vercel.app/masonry/masonry-11.jpg", height: 155, width: 232, alt: "Image 11", projectType: "CRM" },
    { id: "12", url: "https://cruip-tutorials.vercel.app/masonry/masonry-12.jpg", height: 309, width: 232, alt: "Image 12", projectType: "Fitness app" },
];

const Projects: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-5">
            <div className="columns-2 md:columns-4 gap-4 space-y-4">
                {imageData.map(image => (
                   
                    <ImageCard 
                        id={image.id}  // Pass id here
                        key={image.id} 
                        imageUrl={image.url} 
                        height={image.height} 
                        width={image.width} 
                        alt={image.alt} 
                        projectType={image.projectType} // Pass project type here
                    />
                    
                    
                ))}
            </div>
            <div className="mt-6 text-right">
                <Link 
                    href="/all-projects" 
                    className="inline-block px-4 py-2 bg-indigo-500 text-white rounded-3xl shadow hover:bg-indigo-900 transition"
                >
                    View All
                </Link>
            </div>
        </div>
    );
};

export default Projects;
