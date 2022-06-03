import { Schema, model, Document } from "mongoose";

const userSchema = new Schema({
    email: String,
    password: String,
});

export const userModel = model<Document>('User', userSchema);