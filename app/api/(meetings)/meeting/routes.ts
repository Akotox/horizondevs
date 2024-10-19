import { NextResponse } from "next/server"; // Adjust based on your framework
import connect from "@/lib/db-connection"; // Adjust the import path as needed
import Meeting from "@/lib/models/meetings"; // Adjust the import path as needed

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { title, date, userId, duration, notes, email, phone } = body;

    // Validate required fields
    if (!title || !date || !userId || !duration || !email) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    await connect();

    // Create a new meeting
    const newMeeting = new Meeting({
      title,
      date,
      userId,
      duration,
      notes,
      email,
      phone,
    });

    // Save the meeting to the database
    await newMeeting.save();

    return new NextResponse(
      JSON.stringify({ message: "Meeting created successfully", meeting: newMeeting }),
      { status: 201 } // 201 Created
    );
  } catch (error: any) {
    return new NextResponse("Error in creating meeting: " + error.message, {
      status: 500,
    });
  }
};


