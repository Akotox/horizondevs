import { NextResponse } from "next/server";
import connect from "@/lib/db-connection"; // Adjust the import path as needed
import BlogPost from "@/lib/models/blogs"; // Adjust the import path as needed
import { Types } from "mongoose";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    // Validate the ID
    if (!Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid blog post ID" }),
        { status: 400 }
      );
    }

    // Connect to the database
    await connect();

    // Find the blog post by ID
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return new NextResponse(
        JSON.stringify({ message: "Blog post not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify(blogPost),
      { status: 200 } // 200 OK
    );
  } catch (error: any) {
    return new NextResponse("Error in retrieving blog post: " + error.message, {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    // Connect to the database
    await connect();

    // Create a new blog post
    const newBlogPost = new BlogPost(body);
    await newBlogPost.save();

    return new NextResponse(
      JSON.stringify({ message: "Blog post created successfully"}),
      { status: 201 } // 201 Created
    );
  } catch (error: any) {
    return new NextResponse("Error in creating blog post: " + error.message, {
      status: 500,
    });
  }
};




