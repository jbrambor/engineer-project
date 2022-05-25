import { Schema, model, Document } from "mongoose";

const descriptionSchema = new Schema({
    descriptiontype_id: Number,
    languagecode: String,
    description: String,
    hotelData: {
        type: Schema.Types.ObjectId,
        ref: "HotelData",
    }
});

export const descriptionModel = model<Document>('Description', descriptionSchema);