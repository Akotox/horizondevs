
import ProjectLeft from "@/components/projects/project-left";
import ProjectRight from "@/components/projects/project-right";
import ProjectInfo from "@/components/projects/project_details";

import { Project } from "@/lib/interfaces/projects";

import { notFound } from 'next/navigation'
 

 
async function getProject(id: string) {
  let res = await fetch(`https://horizondevelopers.co.za/api/projects/project/${id}`)
  let project: Project = await res.json()
  if (!project) notFound()
  return project
}

export async function generateStaticParams() {
  let projects = await fetch('https://horizondevelopers.co.za/api/projects').then((res) =>
    res.json()
  )
 
  return projects.map((project: Project) => ({
    id: project.id,
  }))
}
 
export async function generateMetadata({ params }: { params: { id: string } }) {
  let project = await getProject(params.id);
  
  const thumbnail = project.thumbnail; 
  const title = project.title; 
  const description = project.description;
  const imageUrl = thumbnail.url; 

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://horizondevelopers.co.za/projects/${params.id}`, // Construct the project URL
      images: [
        {
          url: imageUrl,
          alt: thumbnail.alt, // Alt text for the image
        },
      ],
    },
    twitter: {
      card: 'summary_large_image', // Use large image card for Twitter
      title: title,
      description: description,
      image: imageUrl,
    },
  };
}


export default async function ProjectDetails({ params }: { params: { id: string } }) {
  let project = await getProject(params.id)
  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5    flex-col md:flex-row  ">
        
        <div className="hidden lg:block lg:w-1/3">
          <ProjectLeft title={project.title} stack={project.technologies} imageUrl={project.appLogo} download={project.downloads}/>
        </div>

        <ProjectInfo data={project}/>
        <ProjectRight />
      </div>
    </div>
  );
}
