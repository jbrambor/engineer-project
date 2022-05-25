import { Schema, model, Document } from "mongoose";

const photosSchema = new Schema({
    descriptiontype_id: Number,
    ml_tags: [
        {
            confidence: Number,
            tag_id: Number,
            tag_name: String,
            tag_type: String,
            photo_id: Number,
        },
    ],
    photo_id: Number,
    tags: [
        {
            tag: String,
            id: Number,
        },
    ],
    url_square60: String,
    url_max: String,
    url_1440: String,
    hotelData: {
        type: Schema.Types.ObjectId,
        ref: "HotelData",
    }
});

export const photosModel = model<Document>('Photos', photosSchema);