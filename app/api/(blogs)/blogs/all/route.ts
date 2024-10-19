import { NextResponse } from "next/server";
import connect from "@/lib/db-connection"; // Adjust the import path as needed
import BlogPost from "@/lib/models/blogs"; // Adjust the import path as needed

export const GET = async (request: Request) => {
  try {
    // Connect to the database
    await connect();

    // Retrieve all blog posts with specific fields
    const blogPosts = await BlogPost.find({}, {
      title: 1,
      image: 1,
      date: 1,
      tags: 1,
      author: 1,
      headlines: 1,
    });

    return new NextResponse(
      JSON.stringify(blogPosts),
      { status: 200 } // 200 OK
    );
  } catch (error: any) {
    return new NextResponse("Error in retrieving blog posts: " + error.message, {
      status: 500,
    });
  }
};
