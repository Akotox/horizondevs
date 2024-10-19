import { NextResponse } from "next/server"; // Adjust based on your framework
import connect from "@/lib/db-connection"; // Adjust the import path as needed
import Project from "@/lib/models/projects"; // Adjust the import path as needed
import { Types } from "mongoose";

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { projectId, featureType, features } = body;

    // Validate the project ID
    if (!projectId || !Types.ObjectId.isValid(projectId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing project ID" }),
        { status: 400 }
      );
    }

    // Validate featureType
    const validFeatureTypes = ['frontend', 'backend', 'upcoming'];
    if (!featureType || !validFeatureTypes.includes(featureType)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing feature type" }),
        { status: 400 }
      );
    }

    await connect();

    // Find the project by ID
    const project = await Project.findById(projectId);
    if (!project) {
      return new NextResponse(
        JSON.stringify({ message: "Project not found" }),
        { status: 404 }
      );
    }

    // Add the new features to the appropriate feature list
    if (featureType === 'frontend') {
      project.frontendFeatures.push(...features);
    } else if (featureType === 'backend') {
      project.backendFeatures.push(...features);
    } else if (featureType === 'upcoming') {
      project.upcomingFeatures.push(...features);
    }

    // Save the updated project
    await project.save();

    return new NextResponse(
      JSON.stringify({ message: "Project updated successfully" }),
      { status: 200 } // 200 OK
    );
  } catch (error: any) {
    return new NextResponse("Error in updating project: " + error.message, {
      status: 500,
    });
  }
};
