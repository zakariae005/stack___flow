import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

export interface CreateQuestionParams {
    title: string,
    content: string,
    author: Schema.Types.ObjectId
    tags: string[],
    path: string
}

export interface CreateUserParams {
    clerkId: string,
    name: string,
    username: string,
    email: string,
    picture: string,
}

export interface UpdateUserParams {
    clerkId: string;
    updateData: Partial<IUser>;
    path: string;
  }

export interface DeleteUserParams {
    clerkId: string;
}