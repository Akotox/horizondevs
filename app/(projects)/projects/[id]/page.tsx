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

import ProjectLeft from "@/components/projects/project-left";
import ProjectRight from "@/components/projects/project-right";
import ProjectInfo from "@/components/projects/project_details";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5    flex-col md:flex-row  ">
        <div className="hidden lg:block lg:w-1/3">
          <ProjectLeft author="" date="" bio="" stack="" />
        </div>

        <ProjectInfo />
        <ProjectRight />
      </div>
    </div>
  );
}
