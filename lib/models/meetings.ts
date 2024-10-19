import { Schema, model, models, Document } from "mongoose";

// Define the Meeting interface
export interface IMeeting extends Document {
  title: string;
  date: Date; // Date for the meeting
  userId: string; // User ID for the meeting owner
  duration: number; // Duration in minutes
  notes?: string; // Optional notes about the meeting
  email: string; // Email field
  phone?: string; // Optional phone number
}

// Create the Meeting schema
const MeetingSchema = new Schema<IMeeting>(
  {
    title: { type: String, required: true },
    userId: { type: String, required: true},
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    notes: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

// Create the Meeting model
const Meeting = models.Meeting || model<IMeeting>("Meeting", MeetingSchema);

export default Meeting;
