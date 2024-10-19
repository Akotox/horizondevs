import { NextResponse } from "next/server"; // Adjust based on your framework
import connect from "@/lib/db-connection"; // Adjust the import path as needed
import Meeting from "@/lib/models/meetings"; // Adjust the import path as needed

export const GET = async (request: Request) => {
  try {
    await connect();

    // Get userId from query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    // Validate userId
    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "Missing userId parameter" }),
        { status: 400 }
      );
    }

    // Retrieve and sort meetings for the specified userId by date
    const meetings = await Meeting.find({ userId }).sort({ date: 1 }); // 1 for ascending order

    return new NextResponse(
      JSON.stringify({ meetings }),
      { status: 200 } // 200 OK
    );
  } catch (error: any) {
    return new NextResponse("Error in retrieving meetings: " + error.message, {
      status: 500,
    });
  }
};
