import { Schema, model, models, Document } from "mongoose";

// Define an enum for blog content types
enum BlogContentType {
  IMAGE = "image",
  HEADING = "heading",
  CODE = "code",
  PG = "pg",
}

// Define the content item interface
interface IContentItem {
  contentType: BlogContentType; // Type of content (image, heading, code, pg)
  content: string; // The actual content
  imageUrl?: string; // Optional image URL, applicable only for contentType 'image'
  heading?: string; // Optional heading
  lang: string; // Optional language
}

// Define the related item interface
interface IRelatedItem {
  title: string; // Title of the related item
  id: string; // ID of the related item
}

// Define the suggested course interface
interface ISuggestedCourse {
  title: string; // Title of the suggested course
  id: string; // ID of the suggested course
  url: string; // URL link to the suggested course
}

// Define the BlogPost interface
export interface IBlogPost extends Document {
  title: string; // Title of the blog post
  content: IContentItem[]; // Array of content items
  author: string; // Author's name or ID
  tags: string[]; // Array of tags related to the post
  date: Date; // Date of publication
  image?: string; // Optional image URL/path for the post
  related?: IRelatedItem[]; // List of related items
  headlines?: string; // List of headlines
  repo?: string; // Repository link
  suggestedCourses?: ISuggestedCourse[]; // List of suggested courses
  email?: string; // Optional email field
  website?: string; // Optional website field
}

// Create the BlogPost schema
const ContentItemSchema = new Schema<IContentItem>({
  contentType: { type: String, enum: Object.values(BlogContentType), required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: false },
  heading: { type: String, required: false }, // Optional heading
  lang: { type: String, required: false }, // Optional language
  
});

const RelatedItemSchema = new Schema<IRelatedItem>({
  title: { type: String, required: true },
  id: { type: String, required: true },
});

const SuggestedCourseSchema = new Schema<ISuggestedCourse>({
  title: { type: String, required: true },
  id: { type: String, required: true },
  url: { type: String, required: true }, // URL link for the suggested course
});

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    content: { type: [ContentItemSchema], required: true }, // Array of content items
    author: { type: String, required: true }, // Can be a user ID
    date: { type: Date, required: false, default: Date.now }, // Default to current date
    tags: { type: [String], required: false }, // Optional tags array
    image: { type: String, required: false }, // Optional image field
    related: { type: [RelatedItemSchema], required: false }, // List of related items
    headlines: { type: String, required: false }, // List of headlines
    repo: { type: String, required: false }, // Repository link
    suggestedCourses: { type: [SuggestedCourseSchema], required: false }, // List of suggested courses
    email: { type: String, required: false, default: "andre@horizondevelopers.co.za"}, // Optional email field
    website: { type: String, required: false, default: "www.horizondevelopers.co.za" }, // Optional website field
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

// Create the BlogPost model
const BlogPost = models.BlogPost || model<IBlogPost>("BlogPost", BlogPostSchema);

export default BlogPost;
