
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

export default async function ProjectDetails({ params }: { params: { id: string } }) {
  let project = await getProject(params.id)
  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5    flex-col md:flex-row  ">
        
        <div className="hidden lg:block lg:w-1/3">
          <ProjectLeft title={project.title} date="" bio="" stack={project.technologies} imageUrl={project.appLogo}/>
        </div>

        <ProjectInfo />
        <ProjectRight />
      </div>
    </div>
  );
}
