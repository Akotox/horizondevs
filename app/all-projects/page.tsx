// export const metadata = {
//     title: "Horizon Developers Blog",
//     description: "Explore insights, tips, and trends in full-stack development and software solutions from Horizon Developers. Stay updated with our latest posts!",
//     keywords: "Horizon Developers, blog, full-stack development, software solutions, web applications, tech trends",
//     author: "Horizon Developers Team",
//     robots: "index, follow",
//     viewport: "width=device-width, initial-scale=1.0",
//     category: "Technology",
//     language: "en-US",
//   };
  


import Cta from "@/components/cta";
import ImageCard from "@/components/image-card";
import Projects from "@/components/projects";
import Link from "next/link";

export default function AllProjects(){
    const imageData = [
        { id: "1", url: "https://cruip-tutorials.vercel.app/masonry/masonry-01.jpg", height: 290, width: 232, alt: "Image 01", projectType: "Web App" },
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
    return (
        <div>
            <div className="max-w-6xl mx-auto px-5">
            <Cta title={"Checkout our latest and most successful apps"} height={268} />

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
            
        </div>
           

        </div>
    )
}