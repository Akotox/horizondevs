import { NextResponse } from "next/server"; // Adjust based on your framework
import connect from "@/lib/db-connection"; // Adjust the import path as needed
import Project from "@/lib/models/projects"; // Adjust the import path as needed
import { Types } from "mongoose";
import { log } from "console";

export const POST = async (request: Request) => {
    try {
      const body = await request.json();
      
      const { 
        title, 
        description, 
        frontendFeatures, 
        backendFeatures, 
        upcomingFeatures, 
        technologies, 
        appLogo, 
        author, 
        playStoreLink, 
        appStoreLink, 
        website, 
        content,
        thumbnail, // Include thumbnail in the request
        downloads,
        email, 
        testAppLink, 
        testAppDescription, 
      } = body;
  
      // Validate required fields
      if (!title || !description || !frontendFeatures || !backendFeatures || 
          !upcomingFeatures || !technologies || !author || !content||   !thumbnail || !downloads || !email || !testAppLink || !testAppDescription ) {
        return new NextResponse(
          JSON.stringify({ message: "Missing required fields" }),
          { status: 400 }
        );
      }
       
     
  
      await connect();
  
      // Create a new project
      const newProject = new Project({
        title,
        description,
        frontendFeatures,
        backendFeatures,
        upcomingFeatures,
        technologies,
        appLogo,
        author, // Use the author field from the request
        playStoreLink,
        appStoreLink,
        website,
        content,
        thumbnail, // Include thumbnail in the new project
        date: new Date(), // Set the current date
      });
  
      await newProject.save();
  
      return new NextResponse(
        JSON.stringify({ message: "Project created" }),
        { status: 201 } 
      );
    } catch (error: any) {
      return new NextResponse("Error in creating project: " + error.message, {
        status: 500,
      });
    }
  };

export const GET = async (request: Request) => {
    try {
      await connect();
  
      // Fetch all projects, selecting only the _id and thumbnail fields
      const projects = await Project.find({}, { _id: 1, thumbnail: 1 });
  
      return new NextResponse(
        JSON.stringify(projects),
        { status: 200 } // 200 OK
      );
    } catch (error: any) {
      return new NextResponse("Error in fetching projects: " + error.message, {
        status: 500,
      });
    }
  };

 