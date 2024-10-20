
import ProjectLeft from "@/components/projects/project-left";
import ProjectRight from "@/components/projects/project-right";
import ProjectInfo from "@/components/projects/project_details";


export default function ProjectDetails({ params }: { params: { id: string } }) {
  
  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5    flex-col md:flex-row  ">
        
        <div className="hidden lg:block lg:w-1/3">
          <ProjectLeft author='Yeah' date="" bio="" stack="" />
        </div>

        <ProjectInfo />
        <ProjectRight />
      </div>
    </div>
  );
}
