import { Schema, model, models, Document } from "mongoose";

// Define the Testimonial interface
export interface ITestimonial extends Document {
  img: string; // Path or URL to the testimonial image
  clientImg: string; // Path or URL to the client image
  name: string; // Client's name
  company: string; // Client's company
  content: string; // Testimonial content
  categories: number[]; // Array of category IDs
}

// Create the Testimonial schema
const TestimonialSchema = new Schema<ITestimonial>(
  {
    img: { type: String, required: true },
    clientImg: { type: String, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
    content: { type: String, required: true },
    categories: { type: [Number], required: true }, // Array of numbers
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

// Create the Testimonial model
const Testimonial = models.Testimonial || model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
