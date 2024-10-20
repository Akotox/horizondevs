import { Schema, model, models, Document } from "mongoose";

// Define an enum for project content types
enum ProjectContentType {
  IMAGE = "image",
  HEADING = "heading",
  CODE = "code",
  PG = "pg",
  VIDEO = "video",
}

// Define the Feature interface
interface IFeature {
  title: string; // Title of the feature
  description: string; // Description of the feature
}

// Define the Content Item interface
interface IContentItem {
  contentType: ProjectContentType; // Type of content
  content: string; // The actual content
  imageUrl?: string; // Optional image URL
}

// Define the Thumbnail interface
interface IThumbnail {
  url: string; // Thumbnail image URL
  height: number; // Height of the thumbnail
  width: number; // Width of the thumbnail
  alt: string; // Alt text for the thumbnail
  projectType: string; // Type of the project (e.g., Web App)
  projectID?: string; // Type of the project (e.g., Web App)
}

// Define the Project interface
export interface IProject extends Document {
  title: string; // Title of the project
  description: string; // Brief description of the project
  downloads: number; // Brief description of the project
  email: string; // Description of the project
  testAppLink: string; // Description of the
  testAppDescription: string; // Description of the
  frontendFeatures: IFeature[]; // Array of frontend features
  backendFeatures: IFeature[]; // Array of backend features
  upcomingFeatures: IFeature[]; // Array of upcoming features
  technologies: string[]; // Array of technologies used
  date: Date; // Date of project creation
  image?: string; // Optional image URL/path for the project
  appLogo?: string; // Optional app logo URL/path
  author: string; // Author's name or ID
  playStoreLink?: string; // Optional Play Store link
  appStoreLink?: string; // Optional App Store link
  website?: string; // Optional website link
  content: IContentItem[]; // Array of content items
  thumbnail?: IThumbnail; // Optional thumbnail information
}

// Create the Feature schema
const FeatureSchema = new Schema<IFeature>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Create the Content Item schema
const ContentItemSchema = new Schema<IContentItem>({
  contentType: { type: String, enum: Object.values(ProjectContentType), required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: false },
});

// Create the Thumbnail schema
const ThumbnailSchema = new Schema<IThumbnail>({
  url: { type: String, required: true },
  height: { type: Number, required: true },
  width: { type: Number, required: true },
  alt: { type: String, required: true },
  projectType: { type: String, required: true },
  projectID: { type: String, required: false },
});

// Create the Project schema
const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    downloads: { type: Number, required: false, default: 320,},
    email: { type: String, required: false, default: "apps@horizondeveloper.co.za"},
    testAppLink: { type: String, required: false, default: "" },
    testAppDescription: { type: String, required: false, default: "" },
    frontendFeatures: { type: [FeatureSchema], required: true },
    backendFeatures: { type: [FeatureSchema], required: true },
    upcomingFeatures: { type: [FeatureSchema], required: true },
    technologies: { type: [String], required: true },
    date: { type: Date, required: true, default: Date.now },
    image: { type: String, required: false },
    appLogo: { type: String, required: false },
    author: { type: String, required: true },
    playStoreLink: { type: String, required: false },
    appStoreLink: { type: String, required: false },
    website: { type: String, required: false },
    content: { type: [ContentItemSchema], required: true },
    thumbnail: { type: ThumbnailSchema, required: false }, // Add thumbnail field
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

// Create the Project model
const Project = models.Project || model<IProject>("Project", ProjectSchema);

export default Project;
