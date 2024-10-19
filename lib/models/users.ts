import { Schema, model, models, Document } from "mongoose";

// Define the User interface
export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  company: string;
}

// Create the User schema
const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create the User model
const User = models.User || model<IUser>("User", UserSchema);

export default User;
