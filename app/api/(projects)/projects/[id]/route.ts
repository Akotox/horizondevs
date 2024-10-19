import { NextResponse } from "next/server"; // Adjust based on your framework
import connect from "@/lib/db-connection"; // Adjust the import path as needed
import Project from "@/lib/models/projects"; // Adjust the import path as needed
import { Types } from "mongoose";

export const GET = async (request: Request) => {
    try {
      const { searchParams } = new URL(request.url);
      const projectId = searchParams.get("id"); // Get the project ID from query parameters
  
      // Validate the project ID
      if (!projectId || !Types.ObjectId.isValid(projectId)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid or missing project ID" }),
          { status: 400 }
        );
      }
  
      await connect();
  
      // Fetch the project by ID, selecting only the _id and thumbnail fields
      const project = await Project.findById(projectId, { _id: 1, thumbnail: 1 });
  
      if (!project) {
        return new NextResponse(
          JSON.stringify({ message: "Project not found" }),
          { status: 404 }
        );
      }
  
      return new NextResponse(
        JSON.stringify(project),
        { status: 200 } // 200 OK
      );
    } catch (error: any) {
      return new NextResponse("Error in fetching project: " + error.message, {
        status: 500,
      });
    }
  };

